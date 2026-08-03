import {
  MODELO_CLAUDE,
  PARSEAR_RESPUESTA_CLAUDE,
  nodo,
  nodoClaude,
  nota,
  workflow,
} from './lib.mjs';

const CODIGO_RANGO_FECHAS = `
// Google Search Console publica datos "final" con ~3 dias de retraso.
// Comparamos los ultimos 7 dias disponibles contra los 7 anteriores.
const LAG_DIAS = 3;

const hoy = new Date();
const fin = new Date(hoy);
fin.setUTCDate(fin.getUTCDate() - LAG_DIAS);

const inicio = new Date(fin);
inicio.setUTCDate(inicio.getUTCDate() - 6);

const finPrevio = new Date(inicio);
finPrevio.setUTCDate(finPrevio.getUTCDate() - 1);

const inicioPrevio = new Date(finPrevio);
inicioPrevio.setUTCDate(inicioPrevio.getUTCDate() - 6);

const iso = (d) => d.toISOString().slice(0, 10);

return [{
  json: {
    actualInicio: iso(inicio),
    actualFin: iso(fin),
    previoInicio: iso(inicioPrevio),
    previoFin: iso(finPrevio),
    generadoEn: new Date().toISOString(),
  },
}];
`.trim();

const CODIGO_COMPARAR = `
const cfg = $('Configuracion').first().json;
const fechas = $('Rango de fechas').first().json;

const filasActual = $('GSC · Periodo actual').first().json.rows || [];
const filasPrevio = $('GSC · Periodo anterior').first().json.rows || [];

const clave = (fila) => fila.keys.join(' >>> ');
const indicePrevio = new Map(filasPrevio.map((f) => [clave(f), f]));

const redondear = (n, decimales = 2) => Math.round(n * 10 ** decimales) / 10 ** decimales;

const filas = [];
for (const fila of filasActual) {
  if (fila.impressions < cfg.minImpresiones) continue;

  const previo = indicePrevio.get(clave(fila));
  // Delta positivo = mejora (la posicion 1 es mejor que la 10).
  const deltaPosicion = previo ? redondear(previo.position - fila.position) : null;
  const deltaClics = previo ? fila.clicks - previo.clicks : fila.clicks;

  let categoria = 'Estable';
  if (!previo) {
    categoria = 'Nueva';
  } else if (deltaPosicion <= -cfg.umbralCaidaPosiciones) {
    categoria = 'Caida';
  } else if (deltaPosicion >= cfg.umbralCaidaPosiciones) {
    categoria = 'Mejora';
  }

  // "Distancia corta": ya rankea en pagina 1-2 y un empujon puede moverla al top 3.
  const distanciaCorta =
    fila.position >= cfg.distanciaCortaDesde && fila.position <= cfg.distanciaCortaHasta;

  filas.push({
    fecha: fechas.actualFin,
    periodo: fechas.actualInicio + ' a ' + fechas.actualFin,
    keyword: fila.keys[0],
    url: fila.keys[1],
    clics: fila.clicks,
    impresiones: fila.impressions,
    ctr: redondear(fila.ctr * 100),
    posicion: redondear(fila.position),
    posicionPrevia: previo ? redondear(previo.position) : null,
    deltaPosicion,
    clicsPrevios: previo ? previo.clicks : null,
    deltaClics,
    categoria,
    distanciaCorta,
  });
}

const suma = (lista, campo) => lista.reduce((acc, f) => acc + (f[campo] || 0), 0);
const promedio = (lista, campo) =>
  lista.length ? redondear(suma(lista, campo) / lista.length) : 0;

const caidas = filas
  .filter((f) => f.categoria === 'Caida')
  .sort((a, b) => a.deltaPosicion - b.deltaPosicion)
  .slice(0, cfg.maxFilasIA);

const mejoras = filas
  .filter((f) => f.categoria === 'Mejora')
  .sort((a, b) => b.deltaPosicion - a.deltaPosicion)
  .slice(0, cfg.maxFilasIA);

const oportunidades = filas
  .filter((f) => f.distanciaCorta)
  .sort((a, b) => b.impresiones - a.impresiones)
  .slice(0, cfg.maxFilasIA);

const resumen = {
  sitio: cfg.siteUrl,
  periodoActual: fechas.actualInicio + ' a ' + fechas.actualFin,
  periodoPrevio: fechas.previoInicio + ' a ' + fechas.previoFin,
  consultasAnalizadas: filas.length,
  clicsTotales: suma(filas, 'clics'),
  impresionesTotales: suma(filas, 'impresiones'),
  posicionMedia: promedio(filas, 'posicion'),
  totalCaidas: filas.filter((f) => f.categoria === 'Caida').length,
  totalMejoras: filas.filter((f) => f.categoria === 'Mejora').length,
  totalDistanciaCorta: filas.filter((f) => f.distanciaCorta).length,
};

if (filas.length === 0) {
  throw new Error(
    'GSC no devolvio filas por encima del umbral de impresiones (' +
      cfg.minImpresiones +
      '). Revisa siteUrl y los permisos de la credencial.'
  );
}

return [{ json: { resumen, filas, caidas, mejoras, oportunidades } }];
`.trim();

const CODIGO_FILAS_A_ITEMS = `
// El nodo de Google Sheets espera un item por fila.
const { filas } = $input.first().json;
return filas.map((fila) => ({ json: fila }));
`.trim();

const CODIGO_PROMPT = `
const cfg = $('Configuracion').first().json;
const { resumen, caidas, mejoras, oportunidades } = $input.first().json;

const tabla = (titulo, lista) => {
  if (!lista.length) return titulo + ': sin datos relevantes.';
  const lineas = lista.map(
    (f) =>
      '- "' + f.keyword + '" | ' + f.url +
      ' | pos ' + f.posicion + (f.posicionPrevia !== null ? ' (antes ' + f.posicionPrevia + ')' : '') +
      ' | clics ' + f.clics + ' (' + (f.deltaClics >= 0 ? '+' : '') + f.deltaClics + ')' +
      ' | impresiones ' + f.impresiones +
      ' | CTR ' + f.ctr + '%'
  );
  return titulo + ':\\n' + lineas.join('\\n');
};

const prompt = [
  'Contexto del sitio: ' + cfg.descripcionNegocio,
  '',
  'Resumen del periodo ' + resumen.periodoActual + ' comparado con ' + resumen.periodoPrevio + ':',
  '- Consultas analizadas: ' + resumen.consultasAnalizadas,
  '- Clics totales: ' + resumen.clicsTotales,
  '- Impresiones totales: ' + resumen.impresionesTotales,
  '- Posicion media: ' + resumen.posicionMedia,
  '- Consultas que cayeron: ' + resumen.totalCaidas,
  '- Consultas que mejoraron: ' + resumen.totalMejoras,
  '- Consultas en distancia corta (pos ' + cfg.distanciaCortaDesde + '-' + cfg.distanciaCortaHasta + '): ' + resumen.totalDistanciaCorta,
  '',
  tabla('CAIDAS MAS FUERTES', caidas),
  '',
  tabla('MEJORAS MAS FUERTES', mejoras),
  '',
  tabla('OPORTUNIDADES EN DISTANCIA CORTA', oportunidades),
].join('\\n');

const esquema = {
  type: 'object',
  properties: {
    titular: { type: 'string' },
    diagnostico: { type: 'string' },
    riesgos: { type: 'array', items: { type: 'string' } },
    acciones: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          prioridad: { type: 'string', enum: ['Alta', 'Media', 'Baja'] },
          accion: { type: 'string' },
          keyword: { type: 'string' },
          url: { type: 'string' },
          impactoEstimado: { type: 'string' },
        },
        required: ['prioridad', 'accion', 'keyword', 'url', 'impactoEstimado'],
        additionalProperties: false,
      },
    },
  },
  required: ['titular', 'diagnostico', 'riesgos', 'acciones'],
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
    'Eres un consultor SEO senior. Analizas datos reales de Google Search Console y ' +
    'produces diagnosticos accionables. Se concreto: cada accion debe poder ejecutarse ' +
    'esta semana por una persona sin repetir lo obvio. No inventes datos que no esten en ' +
    'la entrada. Responde siempre en espanol neutro.',
  messages: [{ role: 'user', content: prompt }],
};

return [{ json: { body, resumen } }];
`.trim();

const CODIGO_FORMATEAR_SLACK = `
${PARSEAR_RESPUESTA_CLAUDE}

const analisis = parsearRespuestaClaude($input.first().json);
const { resumen } = $('Preparar analisis IA').first().json;

const flecha = (n) => (n > 0 ? '▲' : n < 0 ? '▼' : '=');

const lineasAcciones = analisis.acciones.map((a, i) => {
  const emoji = a.prioridad === 'Alta' ? '🔴' : a.prioridad === 'Media' ? '🟡' : '🟢';
  return (
    emoji + ' *' + (i + 1) + '. ' + a.accion + '*\\n' +
    '   • Keyword: ' + a.keyword + '\\n' +
    '   • URL: ' + a.url + '\\n' +
    '   • Impacto estimado: ' + a.impactoEstimado
  );
});

const mensaje = [
  '📊 *Reporte SEO semanal* — ' + resumen.sitio,
  '_' + resumen.periodoActual + ' (vs. ' + resumen.periodoPrevio + ')_',
  '',
  '*' + analisis.titular + '*',
  '',
  '*Metricas*',
  '• Clics: ' + resumen.clicsTotales,
  '• Impresiones: ' + resumen.impresionesTotales,
  '• Posicion media: ' + resumen.posicionMedia,
  '• Caidas: ' + resumen.totalCaidas + ' ' + flecha(-resumen.totalCaidas) +
    '  |  Mejoras: ' + resumen.totalMejoras + ' ' + flecha(resumen.totalMejoras),
  '• Oportunidades en distancia corta: ' + resumen.totalDistanciaCorta,
  '',
  '*Diagnostico*',
  analisis.diagnostico,
  '',
  '*Riesgos detectados*',
  ...analisis.riesgos.map((r) => '• ' + r),
  '',
  '*Plan de accion*',
  ...lineasAcciones,
].join('\\n');

return [{ json: { mensaje, analisis, resumen } }];
`.trim();

export default workflow({
  nombre: 'SEO 01 · Monitoreo semanal (Search Console)',
  etiquetas: ['seo', 'automatizacion'],
  nodos: [
    nota(
      'Nota 01',
      [
        '## SEO 01 · Monitoreo semanal',
        '',
        'Compara los ultimos 7 dias de Google Search Console contra los 7 anteriores,',
        'guarda el historico en Google Sheets y publica en Slack un diagnostico',
        'generado con la Messages API de Claude.',
        '',
        '**Antes de activarlo**',
        '1. Ajusta el nodo `Configuracion`.',
        '2. Credencial Google OAuth2 con el scope',
        '   `https://www.googleapis.com/auth/webmasters.readonly`.',
        '3. Credencial Header Auth con `x-api-key` para Anthropic.',
        '4. Credenciales de Google Sheets y Slack.',
      ].join('\n'),
      [-460, -140],
      { ancho: 420, alto: 380, color: 4 },
    ),

    nodo('Programacion semanal', 'n8n-nodes-base.scheduleTrigger', 1.2, [-20, 200], {
      rule: {
        interval: [{ field: 'weeks', triggerAtDay: [1], triggerAtHour: 7, triggerAtMinute: 0 }],
      },
    }),

    nodo('Configuracion', 'n8n-nodes-base.set', 3.4, [200, 200], {
      assignments: {
        assignments: [
          {
            id: 'site-url',
            name: 'siteUrl',
            value: 'https://www.ejemplo.com/',
            type: 'string',
          },
          {
            id: 'descripcion',
            name: 'descripcionNegocio',
            value:
              'Describe aqui el negocio, su publico objetivo y las paginas prioritarias. Este texto se envia a la IA como contexto.',
            type: 'string',
          },
          { id: 'sheet-id', name: 'sheetId', value: 'REEMPLAZA_CON_EL_ID_DEL_SPREADSHEET', type: 'string' },
          { id: 'hoja', name: 'hojaHistorico', value: 'Historico', type: 'string' },
          { id: 'slack', name: 'slackCanal', value: 'seo-reportes', type: 'string' },
          { id: 'min-impresiones', name: 'minImpresiones', value: 20, type: 'number' },
          { id: 'umbral-caida', name: 'umbralCaidaPosiciones', value: 3, type: 'number' },
          { id: 'dc-desde', name: 'distanciaCortaDesde', value: 4, type: 'number' },
          { id: 'dc-hasta', name: 'distanciaCortaHasta', value: 20, type: 'number' },
          { id: 'max-filas-ia', name: 'maxFilasIA', value: 15, type: 'number' },
        ],
      },
      options: {},
    }),

    nodo('Rango de fechas', 'n8n-nodes-base.code', 2, [420, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_RANGO_FECHAS,
    }),

    nodo('GSC · Periodo actual', 'n8n-nodes-base.httpRequest', 4.2, [640, 200], {
      method: 'POST',
      url: "=https://www.googleapis.com/webmasters/v3/sites/{{ encodeURIComponent($('Configuracion').first().json.siteUrl) }}/searchAnalytics/query",
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'googleOAuth2Api',
      sendBody: true,
      specifyBody: 'json',
      jsonBody:
        "={{ JSON.stringify({ startDate: $json.actualInicio, endDate: $json.actualFin, dimensions: ['query', 'page'], rowLimit: 5000, dataState: 'final' }) }}",
      options: { timeout: 60000 },
    }),

    nodo('GSC · Periodo anterior', 'n8n-nodes-base.httpRequest', 4.2, [860, 200], {
      method: 'POST',
      url: "=https://www.googleapis.com/webmasters/v3/sites/{{ encodeURIComponent($('Configuracion').first().json.siteUrl) }}/searchAnalytics/query",
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'googleOAuth2Api',
      sendBody: true,
      specifyBody: 'json',
      jsonBody:
        "={{ JSON.stringify({ startDate: $('Rango de fechas').first().json.previoInicio, endDate: $('Rango de fechas').first().json.previoFin, dimensions: ['query', 'page'], rowLimit: 5000, dataState: 'final' }) }}",
      options: { timeout: 60000 },
    }),

    nodo('Comparar periodos', 'n8n-nodes-base.code', 2, [1080, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_COMPARAR,
    }),

    nota(
      'Nota 01b',
      [
        '### Dos salidas',
        '',
        'Rama superior → historico completo en Google Sheets.',
        'Rama inferior → resumen + analisis IA → Slack.',
      ].join('\n'),
      [1280, -80],
      { ancho: 320, alto: 180, color: 7 },
    ),

    nodo('Filas a items', 'n8n-nodes-base.code', 2, [1300, 80], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_FILAS_A_ITEMS,
    }),

    nodo('Google Sheets · Historico', 'n8n-nodes-base.googleSheets', 4.5, [1520, 80], {
      operation: 'append',
      documentId: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.sheetId }}",
        mode: 'id',
      },
      sheetName: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.hojaHistorico }}",
        mode: 'name',
      },
      columns: {
        mappingMode: 'autoMapInputData',
        matchingColumns: [],
        schema: [],
        attemptToConvertTypes: false,
        convertFieldsToString: false,
      },
      options: {},
    }),

    nodo('Preparar analisis IA', 'n8n-nodes-base.code', 2, [1300, 340], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_PROMPT,
    }),

    nodoClaude('Claude · Diagnostico SEO', [1520, 340]),

    nodo('Formatear reporte Slack', 'n8n-nodes-base.code', 2, [1740, 340], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_FORMATEAR_SLACK,
    }),

    nodo('Slack · Reporte semanal', 'n8n-nodes-base.slack', 2.2, [1960, 340], {
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
    ['Programacion semanal', 'Configuracion'],
    ['Configuracion', 'Rango de fechas'],
    ['Rango de fechas', 'GSC · Periodo actual'],
    ['GSC · Periodo actual', 'GSC · Periodo anterior'],
    ['GSC · Periodo anterior', 'Comparar periodos'],
    ['Comparar periodos', 'Filas a items'],
    ['Comparar periodos', 'Preparar analisis IA'],
    ['Filas a items', 'Google Sheets · Historico'],
    ['Preparar analisis IA', 'Claude · Diagnostico SEO'],
    ['Claude · Diagnostico SEO', 'Formatear reporte Slack'],
    ['Formatear reporte Slack', 'Slack · Reporte semanal'],
  ],
});
