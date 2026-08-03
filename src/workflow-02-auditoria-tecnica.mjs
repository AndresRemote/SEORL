import {
  MODELO_CLAUDE,
  PARSEAR_RESPUESTA_CLAUDE,
  nodo,
  nodoClaude,
  nota,
  workflow,
} from './lib.mjs';

const CODIGO_DETECTAR_SITEMAPS = `
const cfg = $('Configuracion').first().json;
const xml = $input.first().json.data || '';

if (!xml.includes('<loc>')) {
  throw new Error('El sitemap no contiene etiquetas <loc>. Revisa la URL: ' + cfg.sitemapUrl);
}

const locs = [...xml.matchAll(/<loc>\\s*([^<]+?)\\s*<\\/loc>/gi)].map((m) => m[1]);

// Si es un indice de sitemaps, devolvemos los hijos; si no, el propio sitemap.
const esIndice = /<sitemapindex/i.test(xml);
const objetivos = esIndice ? locs.slice(0, cfg.maxSitemaps) : [cfg.sitemapUrl];

return objetivos.map((sitemapUrl) => ({ json: { sitemapUrl, esIndice } }));
`.trim();

const CODIGO_EXTRAER_URLS = `
const cfg = $('Configuracion').first().json;

const vistas = new Set();
const urls = [];

for (const item of $input.all()) {
  const xml = item.json.data || '';
  for (const match of xml.matchAll(/<loc>\\s*([^<]+?)\\s*<\\/loc>/gi)) {
    const url = match[1].trim();
    if (url.endsWith('.xml')) continue;          // sitemaps anidados
    if (vistas.has(url)) continue;               // duplicados entre sitemaps
    if (cfg.excluirPatron && new RegExp(cfg.excluirPatron, 'i').test(url)) continue;
    vistas.add(url);
    urls.push(url);
  }
}

if (urls.length === 0) {
  throw new Error('No se encontro ninguna URL auditable en el sitemap.');
}

return urls.slice(0, cfg.maxUrls).map((url) => ({ json: { url } }));
`.trim();

const CODIGO_ANALIZAR_HTML = `
const cfg = $('Configuracion').first().json;

const texto = (html, regex) => {
  const m = html.match(regex);
  return m ? m[1].replace(/\\s+/g, ' ').trim() : '';
};

const resultados = [];

for (const item of $input.all()) {
  const respuesta = item.json;
  const url = respuesta.url || item.json.url || '';
  const estado = respuesta.statusCode ?? 0;
  const html = typeof respuesta.body === 'string' ? respuesta.body : '';

  const titulo = texto(html, /<title[^>]*>([\\s\\S]*?)<\\/title>/i);
  const metaDescripcion = texto(
    html,
    /<meta[^>]+name=["']description["'][^>]*content=["']([\\s\\S]*?)["']/i
  );
  const canonical = texto(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  const metaRobots = texto(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  const ogTitulo = texto(html, /<meta[^>]+property=["']og:title["'][^>]*content=["']([\\s\\S]*?)["']/i);

  const h1s = [...html.matchAll(/<h1[^>]*>([\\s\\S]*?)<\\/h1>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\\s+/g, ' ').trim()
  );
  const h2s = [...html.matchAll(/<h2[^>]*>([\\s\\S]*?)<\\/h2>/gi)].length;

  const imagenes = [...html.matchAll(/<img\\b[^>]*>/gi)];
  const imagenesSinAlt = imagenes.filter((m) => !/\\balt\\s*=\\s*["'][^"']+["']/i.test(m[0])).length;

  const cuerpo = html
    .replace(/<script[\\s\\S]*?<\\/script>/gi, ' ')
    .replace(/<style[\\s\\S]*?<\\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim();
  const palabras = cuerpo ? cuerpo.split(' ').length : 0;

  const tieneSchema = /application\\/ld\\+json/i.test(html);
  const noindex = /noindex/i.test(metaRobots);

  const problemas = [];
  if (estado >= 500) problemas.push({ gravedad: 'critica', detalle: 'Error de servidor ' + estado });
  else if (estado >= 400) problemas.push({ gravedad: 'critica', detalle: 'Error de cliente ' + estado });
  else if (estado >= 300) problemas.push({ gravedad: 'media', detalle: 'Redireccion ' + estado + ' desde el sitemap' });

  if (noindex) problemas.push({ gravedad: 'critica', detalle: 'La pagina tiene meta robots noindex' });
  if (!titulo) problemas.push({ gravedad: 'critica', detalle: 'Falta la etiqueta <title>' });
  else if (titulo.length < cfg.tituloMin) problemas.push({ gravedad: 'media', detalle: 'Title demasiado corto (' + titulo.length + ' caracteres)' });
  else if (titulo.length > cfg.tituloMax) problemas.push({ gravedad: 'baja', detalle: 'Title demasiado largo (' + titulo.length + ' caracteres)' });

  if (!metaDescripcion) problemas.push({ gravedad: 'media', detalle: 'Falta la meta description' });
  else if (metaDescripcion.length > cfg.descripcionMax) problemas.push({ gravedad: 'baja', detalle: 'Meta description demasiado larga (' + metaDescripcion.length + ' caracteres)' });

  if (h1s.length === 0) problemas.push({ gravedad: 'media', detalle: 'La pagina no tiene H1' });
  if (h1s.length > 1) problemas.push({ gravedad: 'baja', detalle: 'Hay ' + h1s.length + ' etiquetas H1' });
  if (!canonical) problemas.push({ gravedad: 'media', detalle: 'Falta el enlace canonical' });
  if (palabras < cfg.palabrasMin && estado < 300) problemas.push({ gravedad: 'media', detalle: 'Contenido escaso (' + palabras + ' palabras)' });
  if (imagenesSinAlt > 0) problemas.push({ gravedad: 'baja', detalle: imagenesSinAlt + ' imagenes sin atributo alt' });
  if (!tieneSchema) problemas.push({ gravedad: 'baja', detalle: 'Sin datos estructurados JSON-LD' });

  const criticos = problemas.filter((p) => p.gravedad === 'critica').length;
  const medios = problemas.filter((p) => p.gravedad === 'media').length;
  const bajos = problemas.filter((p) => p.gravedad === 'baja').length;
  const puntuacion = Math.max(0, 100 - criticos * 25 - medios * 8 - bajos * 3);

  resultados.push({
    fecha: new Date().toISOString().slice(0, 10),
    url,
    estado,
    titulo,
    longitudTitulo: titulo.length,
    metaDescripcion,
    longitudDescripcion: metaDescripcion.length,
    h1: h1s[0] || '',
    numeroH1: h1s.length,
    numeroH2: h2s,
    canonical,
    metaRobots,
    ogTitulo,
    palabras,
    imagenes: imagenes.length,
    imagenesSinAlt,
    tieneSchema,
    noindex,
    problemasCriticos: criticos,
    problemasMedios: medios,
    problemasBajos: bajos,
    puntuacion,
    problemas: problemas.map((p) => p.gravedad.toUpperCase() + ': ' + p.detalle).join(' | '),
  });
}

return resultados.map((json) => ({ json }));
`.trim();

const CODIGO_PROMPT_AUDITORIA = `
const cfg = $('Configuracion').first().json;
const paginas = $input.all().map((i) => i.json);

const totalCriticos = paginas.reduce((a, p) => a + p.problemasCriticos, 0);
const totalMedios = paginas.reduce((a, p) => a + p.problemasMedios, 0);
const totalBajos = paginas.reduce((a, p) => a + p.problemasBajos, 0);
const puntuacionMedia = Math.round(
  paginas.reduce((a, p) => a + p.puntuacion, 0) / (paginas.length || 1)
);

const peores = [...paginas]
  .sort((a, b) => a.puntuacion - b.puntuacion)
  .slice(0, cfg.maxPaginasIA);

// Agrupamos por tipo de problema para que la IA vea patrones, no casos sueltos.
const frecuencias = {};
for (const p of paginas) {
  for (const problema of (p.problemas ? p.problemas.split(' | ') : [])) {
    const tipo = problema.replace(/\\d+/g, 'N');
    frecuencias[tipo] = (frecuencias[tipo] || 0) + 1;
  }
}
const patrones = Object.entries(frecuencias)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20)
  .map(([tipo, veces]) => '- ' + tipo + ' → ' + veces + ' paginas');

const detallePeores = peores.map(
  (p) =>
    '- ' + p.url + ' (puntuacion ' + p.puntuacion + ', HTTP ' + p.estado + ', ' + p.palabras + ' palabras)\\n' +
    '  problemas: ' + (p.problemas || 'ninguno')
);

const resumen = {
  sitio: cfg.sitemapUrl,
  paginasAuditadas: paginas.length,
  puntuacionMedia,
  totalCriticos,
  totalMedios,
  totalBajos,
};

const prompt = [
  'Contexto del sitio: ' + cfg.descripcionNegocio,
  '',
  'Auditoria tecnica on-page de ' + paginas.length + ' paginas.',
  'Puntuacion media: ' + puntuacionMedia + '/100.',
  'Problemas criticos: ' + totalCriticos + ' | medios: ' + totalMedios + ' | bajos: ' + totalBajos,
  '',
  'PATRONES MAS FRECUENTES',
  ...patrones,
  '',
  'PAGINAS CON PEOR PUNTUACION',
  ...detallePeores,
].join('\\n');

const esquema = {
  type: 'object',
  properties: {
    titular: { type: 'string' },
    diagnostico: { type: 'string' },
    correccionesPrioritarias: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prioridad: { type: 'string', enum: ['Alta', 'Media', 'Baja'] },
          problema: { type: 'string' },
          solucion: { type: 'string' },
          paginasAfectadas: { type: 'string' },
          esfuerzo: { type: 'string', enum: ['Bajo', 'Medio', 'Alto'] },
        },
        required: ['prioridad', 'problema', 'solucion', 'paginasAfectadas', 'esfuerzo'],
        additionalProperties: false,
      },
    },
    gananciasRapidas: { type: 'array', items: { type: 'string' } },
  },
  required: ['titular', 'diagnostico', 'correccionesPrioritarias', 'gananciasRapidas'],
  additionalProperties: false,
};

const body = {
  model: '${MODELO_CLAUDE}',
  max_tokens: 8000,
  output_config: {
    effort: 'medium',
    format: { type: 'json_schema', schema: esquema },
  },
  system:
    'Eres un especialista en SEO tecnico. Recibes el resultado de un rastreo on-page y ' +
    'devuelves un plan de correccion priorizado por impacto/esfuerzo. Agrupa problemas ' +
    'repetidos en una sola correccion sistemica en lugar de listar pagina por pagina. ' +
    'No inventes datos. Responde en espanol neutro.',
  messages: [{ role: 'user', content: prompt }],
};

return [{ json: { body, resumen } }];
`.trim();

const CODIGO_SLACK_AUDITORIA = `
${PARSEAR_RESPUESTA_CLAUDE}

const analisis = parsearRespuestaClaude($input.first().json);
const { resumen } = $('Preparar auditoria IA').first().json;

const semaforo = resumen.totalCriticos > 0 ? '🔴' : resumen.puntuacionMedia < 80 ? '🟡' : '🟢';

const correcciones = analisis.correccionesPrioritarias.map((c, i) => {
  const emoji = c.prioridad === 'Alta' ? '🔴' : c.prioridad === 'Media' ? '🟡' : '🟢';
  return (
    emoji + ' *' + (i + 1) + '. ' + c.problema + '*\\n' +
    '   • Solucion: ' + c.solucion + '\\n' +
    '   • Alcance: ' + c.paginasAfectadas + '\\n' +
    '   • Esfuerzo: ' + c.esfuerzo
  );
});

const mensaje = [
  semaforo + ' *Auditoria tecnica SEO* — ' + resumen.sitio,
  '',
  '*' + analisis.titular + '*',
  '',
  '*Estado general*',
  '• Paginas auditadas: ' + resumen.paginasAuditadas,
  '• Puntuacion media: ' + resumen.puntuacionMedia + '/100',
  '• Problemas criticos: ' + resumen.totalCriticos,
  '• Problemas medios: ' + resumen.totalMedios,
  '• Problemas menores: ' + resumen.totalBajos,
  '',
  '*Diagnostico*',
  analisis.diagnostico,
  '',
  '*Correcciones prioritarias*',
  ...correcciones,
  '',
  '*Ganancias rapidas*',
  ...analisis.gananciasRapidas.map((g) => '⚡ ' + g),
].join('\\n');

return [{ json: { mensaje, analisis, resumen } }];
`.trim();

export default workflow({
  nombre: 'SEO 02 · Auditoria tecnica on-page',
  etiquetas: ['seo', 'automatizacion'],
  nodos: [
    nota(
      'Nota 02',
      [
        '## SEO 02 · Auditoria tecnica on-page',
        '',
        'Lee el sitemap (soporta indices de sitemaps), rastrea cada URL,',
        'evalua title, meta description, H1, canonical, robots, contenido,',
        'imagenes sin alt y datos estructurados, y publica un plan de',
        'correccion priorizado.',
        '',
        '**Cuidado con el volumen:** ajusta `maxUrls` y el `batching` del',
        'nodo `Rastrear paginas` para no saturar el servidor auditado.',
      ].join('\n'),
      [-460, -160],
      { ancho: 420, alto: 340, color: 4 },
    ),

    nodo('Programacion diaria', 'n8n-nodes-base.scheduleTrigger', 1.2, [-20, 200], {
      rule: { interval: [{ field: 'days', triggerAtHour: 6, triggerAtMinute: 0 }] },
    }),

    nodo('Configuracion', 'n8n-nodes-base.set', 3.4, [200, 200], {
      assignments: {
        assignments: [
          { id: 'sitemap', name: 'sitemapUrl', value: 'https://www.ejemplo.com/sitemap.xml', type: 'string' },
          {
            id: 'descripcion',
            name: 'descripcionNegocio',
            value: 'Describe aqui el negocio y las plantillas de pagina mas importantes del sitio.',
            type: 'string',
          },
          { id: 'sheet-id', name: 'sheetId', value: 'REEMPLAZA_CON_EL_ID_DEL_SPREADSHEET', type: 'string' },
          { id: 'hoja', name: 'hojaAuditoria', value: 'Auditoria', type: 'string' },
          { id: 'slack', name: 'slackCanal', value: 'seo-reportes', type: 'string' },
          { id: 'max-urls', name: 'maxUrls', value: 100, type: 'number' },
          { id: 'max-sitemaps', name: 'maxSitemaps', value: 5, type: 'number' },
          { id: 'excluir', name: 'excluirPatron', value: '/tag/|/author/|\\\\?', type: 'string' },
          { id: 'titulo-min', name: 'tituloMin', value: 30, type: 'number' },
          { id: 'titulo-max', name: 'tituloMax', value: 60, type: 'number' },
          { id: 'desc-max', name: 'descripcionMax', value: 160, type: 'number' },
          { id: 'palabras-min', name: 'palabrasMin', value: 300, type: 'number' },
          { id: 'max-paginas-ia', name: 'maxPaginasIA', value: 15, type: 'number' },
        ],
      },
      options: {},
    }),

    nodo('Descargar sitemap raiz', 'n8n-nodes-base.httpRequest', 4.2, [420, 200], {
      url: '={{ $json.sitemapUrl }}',
      options: {
        timeout: 30000,
        response: { response: { responseFormat: 'text' } },
      },
    }),

    nodo('Detectar sitemaps', 'n8n-nodes-base.code', 2, [640, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_DETECTAR_SITEMAPS,
    }),

    nodo('Descargar sitemaps', 'n8n-nodes-base.httpRequest', 4.2, [860, 200], {
      url: '={{ $json.sitemapUrl }}',
      options: {
        timeout: 30000,
        response: { response: { responseFormat: 'text' } },
        batching: { batch: { batchSize: 3, batchInterval: 1000 } },
      },
    }),

    nodo('Extraer URLs', 'n8n-nodes-base.code', 2, [1080, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_EXTRAER_URLS,
    }),

    nodo('Rastrear paginas', 'n8n-nodes-base.httpRequest', 4.2, [1300, 200], {
      url: '={{ $json.url }}',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          { name: 'User-Agent', value: 'n8n-seo-audit/1.0 (+auditoria interna)' },
        ],
      },
      options: {
        timeout: 20000,
        redirect: { redirect: { followRedirects: true, maxRedirects: 5 } },
        response: {
          response: { fullResponse: true, neverError: true, responseFormat: 'text' },
        },
        batching: { batch: { batchSize: 5, batchInterval: 1000 } },
      },
    }),

    nodo('Analizar HTML', 'n8n-nodes-base.code', 2, [1520, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_ANALIZAR_HTML,
    }),

    nodo('Google Sheets · Auditoria', 'n8n-nodes-base.googleSheets', 4.5, [1740, 80], {
      operation: 'append',
      documentId: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.sheetId }}",
        mode: 'id',
      },
      sheetName: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.hojaAuditoria }}",
        mode: 'name',
      },
      columns: {
        mappingMode: 'autoMapInputData',
        matchingColumns: [],
        schema: [],
        attemptToConvertTypes: false,
        convertFieldsToString: true,
      },
      options: {},
    }),

    nodo('Preparar auditoria IA', 'n8n-nodes-base.code', 2, [1740, 340], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_PROMPT_AUDITORIA,
    }),

    nodoClaude('Claude · Plan de correccion', [1960, 340]),

    nodo('Formatear auditoria Slack', 'n8n-nodes-base.code', 2, [2180, 340], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_SLACK_AUDITORIA,
    }),

    nodo('Slack · Auditoria', 'n8n-nodes-base.slack', 2.2, [2400, 340], {
      select: 'channel',
      channelId: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.slackCanal }}",
        mode: 'name',
      },
      text: '={{ $json.mensaje }}',
      otherOptions: { includeLinkToWorkflow: false },
    }),
  ],
  aristas: [
    ['Programacion diaria', 'Configuracion'],
    ['Configuracion', 'Descargar sitemap raiz'],
    ['Descargar sitemap raiz', 'Detectar sitemaps'],
    ['Detectar sitemaps', 'Descargar sitemaps'],
    ['Descargar sitemaps', 'Extraer URLs'],
    ['Extraer URLs', 'Rastrear paginas'],
    ['Rastrear paginas', 'Analizar HTML'],
    ['Analizar HTML', 'Google Sheets · Auditoria'],
    ['Analizar HTML', 'Preparar auditoria IA'],
    ['Preparar auditoria IA', 'Claude · Plan de correccion'],
    ['Claude · Plan de correccion', 'Formatear auditoria Slack'],
    ['Formatear auditoria Slack', 'Slack · Auditoria'],
  ],
});
