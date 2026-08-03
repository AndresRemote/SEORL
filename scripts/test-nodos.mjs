#!/usr/bin/env node
/**
 * Banco de pruebas: ejecuta el `jsCode` de cada nodo Code con datos simulados
 * (respuestas de Search Console, HTML, SERP y payloads de la API de Claude) y
 * comprueba que la logica produce el resultado esperado.
 *
 * No hace ninguna llamada de red: valida la logica, no las credenciales.
 *
 * Uso: npm test
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raizProyecto = join(dirname(fileURLToPath(import.meta.url)), '..');
const cargar = (archivo) =>
  JSON.parse(readFileSync(join(raizProyecto, 'workflows', archivo), 'utf8'));
const codigoDe = (wf, nombre) => wf.nodes.find((n) => n.name === nombre).parameters.jsCode;

function ejecutar(codigo, { entrada = [], nodos = {} }) {
  const items = (arr) => arr.map((json) => ({ json }));
  const $input = {
    all: () => items(entrada),
    first: () => items(entrada)[0],
  };
  const $ = (nombre) => {
    if (!(nombre in nodos)) throw new Error(`Nodo no simulado: ${nombre}`);
    return { all: () => items(nodos[nombre]), first: () => items(nodos[nombre])[0] };
  };
  const fn = new Function('$input', '$', `${codigo}`);
  return fn($input, $);
}

let fallos = 0;
const comprobar = (etiqueta, condicion, extra = '') => {
  console.log(`${condicion ? '  ok  ' : ' FALLA'} ${etiqueta}${extra ? ' — ' + extra : ''}`);
  if (!condicion) fallos++;
};

// ---------------------------------------------------------------- workflow 01
const wf01 = cargar('01-monitoreo-gsc.json');

console.log('\n[01] Rango de fechas');
const fechas = ejecutar(codigoDe(wf01, 'Rango de fechas'), {})[0].json;
console.log('      ', fechas.previoInicio, '→', fechas.previoFin, '||', fechas.actualInicio, '→', fechas.actualFin);
const dias = (a, b) => (Date.parse(b) - Date.parse(a)) / 86400000;
comprobar('ventana actual de 7 dias', dias(fechas.actualInicio, fechas.actualFin) === 6);
comprobar('ventana previa de 7 dias', dias(fechas.previoInicio, fechas.previoFin) === 6);
comprobar('los periodos no se solapan', dias(fechas.previoFin, fechas.actualInicio) === 1);

console.log('\n[01] Comparar periodos');
const cfg01 = {
  siteUrl: 'https://ej.com/',
  minImpresiones: 20,
  umbralCaidaPosiciones: 3,
  distanciaCortaDesde: 4,
  distanciaCortaHasta: 20,
  maxFilasIA: 15,
};
const filaGsc = (q, url, clicks, impressions, position) => ({
  keys: [q, url],
  clicks,
  impressions,
  ctr: impressions ? clicks / impressions : 0,
  position,
});
const comparado = ejecutar(codigoDe(wf01, 'Comparar periodos'), {
  entrada: [{}],
  nodos: {
    Configuracion: [cfg01],
    'Rango de fechas': [fechas],
    'GSC · Periodo actual': [
      {
        rows: [
          filaGsc('zapatos rojos', 'https://ej.com/a', 10, 500, 12.4), // cayo 5 posiciones
          filaGsc('botas negras', 'https://ej.com/b', 40, 900, 3.1), // mejoro 4
          filaGsc('sandalias', 'https://ej.com/c', 2, 300, 8.0), // nueva, distancia corta
          filaGsc('ruido', 'https://ej.com/d', 0, 5, 40.0), // por debajo del umbral
        ],
      },
    ],
    'GSC · Periodo anterior': [
      {
        rows: [
          filaGsc('zapatos rojos', 'https://ej.com/a', 25, 480, 7.4),
          filaGsc('botas negras', 'https://ej.com/b', 20, 850, 7.1),
        ],
      },
    ],
  },
})[0].json;

comprobar('descarta filas bajo minImpresiones', comparado.filas.length === 3);
comprobar('detecta la caida', comparado.resumen.totalCaidas === 1);
comprobar('detecta la mejora', comparado.resumen.totalMejoras === 1);
comprobar('marca distancia corta', comparado.resumen.totalDistanciaCorta === 2);
comprobar(
  'delta negativo = perdida de posiciones',
  comparado.caidas[0].keyword === 'zapatos rojos' && comparado.caidas[0].deltaPosicion === -5,
  `delta=${comparado.caidas[0].deltaPosicion}`,
);
comprobar('la keyword nueva se etiqueta como Nueva',
  comparado.filas.find((f) => f.keyword === 'sandalias').categoria === 'Nueva');

console.log('\n[01] Preparar analisis IA');
const promptIA = ejecutar(codigoDe(wf01, 'Preparar analisis IA'), {
  entrada: [comparado],
  nodos: { Configuracion: [{ ...cfg01, descripcionNegocio: 'Tienda de calzado' }] },
})[0].json;
comprobar('modelo correcto', promptIA.body.model === 'claude-opus-5', promptIA.body.model);
comprobar('usa structured outputs', promptIA.body.output_config.format.type === 'json_schema');
comprobar('sin parametros de sampling',
  !('temperature' in promptIA.body) && !('top_p' in promptIA.body));
comprobar('sin budget_tokens', JSON.stringify(promptIA.body).includes('budget_tokens') === false);
comprobar('el prompt incluye las caidas', promptIA.body.messages[0].content.includes('zapatos rojos'));

console.log('\n[01] Formatear reporte Slack');
const respuestaClaude = {
  content: [
    { type: 'thinking', thinking: '' },
    {
      type: 'text',
      text: JSON.stringify({
        titular: 'Caida puntual en calzado formal',
        diagnostico: 'Perdida de 5 posiciones en la consulta principal.',
        riesgos: ['Competidor nuevo en el top 3'],
        acciones: [
          {
            prioridad: 'Alta',
            accion: 'Actualizar la ficha de producto',
            keyword: 'zapatos rojos',
            url: 'https://ej.com/a',
            impactoEstimado: '+15 clics/semana',
          },
        ],
      }),
    },
  ],
  stop_reason: 'end_turn',
};
const slack01 = ejecutar(codigoDe(wf01, 'Formatear reporte Slack'), {
  entrada: [respuestaClaude],
  nodos: { 'Preparar analisis IA': [promptIA] },
})[0].json;
comprobar('ignora el bloque thinking y parsea el texto',
  slack01.mensaje.includes('Caida puntual en calzado formal'));
comprobar('incluye metricas', slack01.mensaje.includes('Posicion media'));

// ---------------------------------------------------------------- workflow 02
const wf02 = cargar('02-auditoria-tecnica.json');
const cfg02 = {
  sitemapUrl: 'https://ej.com/sitemap.xml',
  maxSitemaps: 5,
  maxUrls: 100,
  excluirPatron: '/tag/|/author/|\\?',
  tituloMin: 30,
  tituloMax: 60,
  descripcionMax: 160,
  palabrasMin: 300,
  maxPaginasIA: 15,
};

console.log('\n[02] Detectar sitemaps');
const indice = `<?xml version="1.0"?><sitemapindex><sitemap><loc>https://ej.com/post-sitemap.xml</loc></sitemap><sitemap><loc>https://ej.com/page-sitemap.xml</loc></sitemap></sitemapindex>`;
const hijos = ejecutar(codigoDe(wf02, 'Detectar sitemaps'), {
  entrada: [{ data: indice }],
  nodos: { Configuracion: [cfg02] },
});
comprobar('expande el indice de sitemaps', hijos.length === 2, JSON.stringify(hijos.map((h) => h.json.sitemapUrl)));

const simple = `<urlset><url><loc>https://ej.com/a</loc></url></urlset>`;
const unico = ejecutar(codigoDe(wf02, 'Detectar sitemaps'), {
  entrada: [{ data: simple }],
  nodos: { Configuracion: [cfg02] },
});
comprobar('sitemap plano devuelve un solo objetivo', unico.length === 1 && unico[0].json.esIndice === false);

console.log('\n[02] Extraer URLs');
const urls = ejecutar(codigoDe(wf02, 'Extraer URLs'), {
  entrada: [
    { data: `<urlset><url><loc>https://ej.com/a</loc></url><url><loc>https://ej.com/tag/x</loc></url><url><loc>https://ej.com/b?utm=1</loc></url></urlset>` },
    { data: `<urlset><url><loc>https://ej.com/a</loc></url><url><loc>https://ej.com/c</loc></url></urlset>` },
  ],
  nodos: { Configuracion: [cfg02] },
});
comprobar('deduplica y filtra por patron', urls.length === 2,
  urls.map((u) => u.json.url).join(', '));

console.log('\n[02] Analizar HTML');
const htmlBueno = `<html><head><title>Guia completa de botas de montana para invierno</title>
<meta name="description" content="Todo lo que necesitas saber para elegir botas de montana en invierno: materiales, tallas y mantenimiento.">
<link rel="canonical" href="https://ej.com/botas">
<script type="application/ld+json">{}</script></head>
<body><h1>Botas de montana</h1><h2>Materiales</h2><img src="a.jpg" alt="bota"><p>${'palabra '.repeat(400)}</p></body></html>`;
const htmlMalo = `<html><head><title>Hola</title><meta name="robots" content="noindex"></head><body><img src="b.jpg"><p>corto</p></body></html>`;

const analizado = ejecutar(codigoDe(wf02, 'Analizar HTML'), {
  entrada: [
    { url: 'https://ej.com/botas', statusCode: 200, body: htmlBueno },
    { url: 'https://ej.com/malo', statusCode: 200, body: htmlMalo },
    { url: 'https://ej.com/404', statusCode: 404, body: '' },
  ],
  nodos: { Configuracion: [cfg02] },
}).map((i) => i.json);

const bueno = analizado[0];
comprobar('extrae el title', bueno.titulo.startsWith('Guia completa'), bueno.titulo);
comprobar('extrae la meta description', bueno.longitudDescripcion > 100);
comprobar('extrae el H1', bueno.h1 === 'Botas de montana');
comprobar('detecta canonical y schema', bueno.canonical.includes('/botas') && bueno.tieneSchema);
comprobar('cuenta palabras del cuerpo', bueno.palabras > 300, String(bueno.palabras));
comprobar('pagina correcta puntua alto', bueno.puntuacion >= 90, String(bueno.puntuacion));

const malo = analizado[1];
comprobar('detecta noindex', malo.noindex === true);
comprobar('detecta imagen sin alt', malo.imagenesSinAlt === 1);
comprobar('acumula problemas criticos', malo.problemasCriticos >= 1, malo.problemas);

comprobar('marca el 404 como critico', analizado[2].problemasCriticos >= 1);

console.log('\n[02] Preparar auditoria IA');
const promptAudit = ejecutar(codigoDe(wf02, 'Preparar auditoria IA'), {
  entrada: analizado,
  nodos: { Configuracion: [{ ...cfg02, descripcionNegocio: 'Tienda outdoor' }] },
})[0].json;
comprobar('resumen coherente', promptAudit.resumen.paginasAuditadas === 3);
comprobar('agrupa patrones', promptAudit.body.messages[0].content.includes('PATRONES MAS FRECUENTES'));

// ---------------------------------------------------------------- workflow 03
const wf03 = cargar('03-briefs-contenido.json');
const cfg03 = {
  dominio: 'https://ej.com',
  descripcionNegocio: 'Tienda outdoor',
  tonoDeVoz: 'Cercano',
  maxBriefs: 5,
  hojaBriefs: 'Briefs',
  pais: 'mx',
  idioma: 'es',
};

console.log('\n[03] Limitar lote');
const lote = ejecutar(codigoDe(wf03, 'Limitar lote'), {
  entrada: [
    { keyword: 'botas montana', estado: 'Pendiente', prioridad: 'Alta' },
    { keyword: 'ya hecha', estado: 'Brief listo' },
    { keyword: '', estado: 'pendiente' },
  ],
  nodos: { Configuracion: [cfg03] },
});
comprobar('filtra por estado pendiente (case-insensitive) y keyword vacia', lote.length === 1,
  JSON.stringify(lote.map((l) => l.json.keyword)));

console.log('\n[03] Contexto SERP');
const contexto = ejecutar(codigoDe(wf03, 'Contexto SERP'), {
  entrada: [
    {
      organic: [{ title: 'Las 10 mejores botas', link: 'https://otro.com/1', snippet: 'Comparativa...' }],
      peopleAlsoAsk: [{ question: 'Que botas comprar?' }],
      relatedSearches: [{ query: 'botas baratas' }],
    },
  ],
  nodos: { 'Limitar lote': [lote[0].json] },
})[0].json;
comprobar('alinea SERP con la keyword', contexto.keyword === 'botas montana');
comprobar('extrae top organico y PAA',
  contexto.serp.organicos.length === 1 && contexto.serp.preguntas.length === 1);

console.log('\n[03] Preparar brief IA');
const promptBrief = ejecutar(codigoDe(wf03, 'Preparar brief IA'), {
  entrada: [contexto],
  nodos: { Configuracion: [cfg03] },
})[0].json;
comprobar('un body por keyword', promptBrief.keyword === 'botas montana');
comprobar('esquema JSON con additionalProperties false',
  promptBrief.body.output_config.format.schema.additionalProperties === false);
comprobar('effort declarado', promptBrief.body.output_config.effort === 'high');

console.log('\n[03] Parsear briefs');
const briefFalso = {
  content: [{ type: 'text', text: JSON.stringify({
    tituloPropuesto: 'Como elegir botas de montana',
    metaDescripcion: 'Guia practica',
    slug: 'como-elegir-botas-montana',
    intencionBusqueda: 'Informacional',
    publicoObjetivo: 'Senderistas principiantes',
    anguloDiferencial: 'Tabla de tallas real',
    palabrasObjetivo: 1800,
    keywordsSecundarias: ['botas trekking'],
    esquema: [{ nivel: 'H2', encabezado: 'Materiales', queCubrir: 'Gore-Tex vs cuero' }],
    preguntasFrecuentes: ['Cuanto duran?'],
    enlacesInternosSugeridos: ['/guias/calcetines'],
    llamadaALaAccion: 'Ver catalogo',
  }) }],
  stop_reason: 'end_turn',
};
const parseado = ejecutar(codigoDe(wf03, 'Parsear briefs'), {
  entrada: [briefFalso],
  nodos: { 'Preparar brief IA': [promptBrief] },
});
comprobar('genera fila de brief', parseado[0].json.keyword === 'botas montana');
comprobar('aplana el esquema a texto', parseado[0].json.esquema.startsWith('## Materiales'));

console.log('\n[03] Resumen para Slack');
const slack03 = ejecutar(codigoDe(wf03, 'Resumen para Slack'), {
  entrada: parseado.map((p) => p.json),
  nodos: { 'Parsear briefs': parseado.map((p) => p.json), Configuracion: [cfg03] },
})[0].json;
comprobar('mensaje con el conteo', slack03.mensaje.includes('1 brief(s)'));

// ---------------------------------------------------------------- workflow 99
const wf99 = cargar('99-manejo-errores.json');
console.log('\n[99] Formatear error');
const errorFmt = ejecutar(codigoDe(wf99, 'Formatear error'), {
  entrada: [
    {
      workflow: { id: 'abc', name: 'SEO 01 · Monitoreo semanal (Search Console)' },
      execution: {
        mode: 'trigger',
        lastNodeExecuted: 'GSC · Periodo actual',
        url: 'https://n8n.local/execution/1',
        error: { message: 'Request failed with status code 403' },
      },
    },
  ],
  nodos: {},
})[0].json;
comprobar('identifica el nodo que fallo', errorFmt.nodo === 'GSC · Periodo actual');
comprobar('incluye el mensaje de error', errorFmt.mensaje.includes('403'));

console.log(`\n${fallos === 0 ? '✓ Todas las comprobaciones pasaron' : `✗ ${fallos} comprobacion(es) fallaron`}`);
process.exit(fallos === 0 ? 0 : 1);
