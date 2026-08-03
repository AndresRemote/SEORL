import {
  MODELO_CLAUDE,
  PARSEAR_RESPUESTA_CLAUDE,
  nodo,
  nodoClaude,
  nota,
  workflow,
} from './lib.mjs';

const CODIGO_LOTE = `
const cfg = $('Configuracion').first().json;

const pendientes = $input
  .all()
  .map((i) => i.json)
  .filter((fila) => String(fila.estado || '').trim().toLowerCase() === 'pendiente')
  .filter((fila) => String(fila.keyword || '').trim().length > 0);

if (pendientes.length === 0) {
  // Sin trabajo pendiente: cortamos la ejecucion sin marcarla como error.
  return [];
}

return pendientes.slice(0, cfg.maxBriefs).map((fila) => ({
  json: {
    keyword: String(fila.keyword).trim(),
    intencion: fila.intencion || '',
    notas: fila.notas || '',
    prioridad: fila.prioridad || 'Media',
  },
}));
`.trim();

const CODIGO_CONTEXTO_SERP = `
// El nodo HTTP ejecuta una peticion por item y conserva el orden de entrada,
// asi que el indice i alinea cada respuesta SERP con su keyword original.
const entradas = $('Limitar lote').all().map((i) => i.json);

return $input.all().map((item, i) => {
  const serp = item.json;
  const entrada = entradas[i] || {};

  const organicos = (serp.organic || []).slice(0, 10).map((r, pos) => ({
    posicion: pos + 1,
    titulo: r.title || '',
    enlace: r.link || '',
    extracto: r.snippet || '',
  }));

  return {
    json: {
      ...entrada,
      serp: {
        organicos,
        preguntas: (serp.peopleAlsoAsk || []).map((p) => p.question).filter(Boolean),
        relacionadas: (serp.relatedSearches || []).map((r) => r.query).filter(Boolean),
      },
    },
  };
});
`.trim();

const CODIGO_PROMPT_BRIEF = `
const cfg = $('Configuracion').first().json;

return $input.all().map((item) => {
const entrada = item.json;
const { serp } = entrada;

const competencia = serp.organicos
  .map((r) => r.posicion + '. ' + r.titulo + '\\n   ' + r.enlace + '\\n   ' + r.extracto)
  .join('\\n');

const prompt = [
  'Marca / negocio: ' + cfg.descripcionNegocio,
  'Tono de voz: ' + cfg.tonoDeVoz,
  'Dominio propio: ' + cfg.dominio,
  '',
  'Keyword objetivo: ' + entrada.keyword,
  entrada.intencion ? 'Intencion declarada: ' + entrada.intencion : '',
  entrada.notas ? 'Notas del equipo: ' + entrada.notas : '',
  '',
  'TOP 10 ORGANICO ACTUAL',
  competencia || '(sin datos de SERP)',
  '',
  'PREGUNTAS FRECUENTES EN LA SERP',
  serp.preguntas.length ? serp.preguntas.map((p) => '- ' + p).join('\\n') : '(ninguna)',
  '',
  'BUSQUEDAS RELACIONADAS',
  serp.relacionadas.length ? serp.relacionadas.map((r) => '- ' + r).join('\\n') : '(ninguna)',
  '',
  'Genera un brief de contenido que permita superar a los resultados actuales: ' +
    'cubre los angulos que ellos cubren y anade al menos dos que ninguno cubra.',
]
  .filter(Boolean)
  .join('\\n');

const esquema = {
  type: 'object',
  properties: {
    tituloPropuesto: { type: 'string' },
    metaDescripcion: { type: 'string' },
    slug: { type: 'string' },
    intencionBusqueda: {
      type: 'string',
      enum: ['Informacional', 'Comercial', 'Transaccional', 'Navegacional'],
    },
    publicoObjetivo: { type: 'string' },
    anguloDiferencial: { type: 'string' },
    palabrasObjetivo: { type: 'integer' },
    keywordsSecundarias: { type: 'array', items: { type: 'string' } },
    esquema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          nivel: { type: 'string', enum: ['H2', 'H3'] },
          encabezado: { type: 'string' },
          queCubrir: { type: 'string' },
        },
        required: ['nivel', 'encabezado', 'queCubrir'],
        additionalProperties: false,
      },
    },
    preguntasFrecuentes: { type: 'array', items: { type: 'string' } },
    enlacesInternosSugeridos: { type: 'array', items: { type: 'string' } },
    llamadaALaAccion: { type: 'string' },
  },
  required: [
    'tituloPropuesto',
    'metaDescripcion',
    'slug',
    'intencionBusqueda',
    'publicoObjetivo',
    'anguloDiferencial',
    'palabrasObjetivo',
    'keywordsSecundarias',
    'esquema',
    'preguntasFrecuentes',
    'enlacesInternosSugeridos',
    'llamadaALaAccion',
  ],
  additionalProperties: false,
};

const body = {
  model: '${MODELO_CLAUDE}',
  max_tokens: 12000,
  output_config: {
    effort: 'high',
    format: { type: 'json_schema', schema: esquema },
  },
  system:
    'Eres un estratega de contenidos SEO. Produces briefs que un redactor puede ejecutar ' +
    'sin hacer preguntas: cada seccion del esquema indica que cubrir y por que. Basate en ' +
    'la SERP real que recibes; no inventes estadisticas ni fuentes. Responde en espanol neutro.',
  messages: [{ role: 'user', content: prompt }],
};

return { json: { body, keyword: entrada.keyword, prioridad: entrada.prioridad } };
});
`.trim();

const CODIGO_PARSEAR_BRIEF = `
${PARSEAR_RESPUESTA_CLAUDE}

const contextos = $('Preparar brief IA').all().map((i) => i.json);
const salida = [];

$input.all().forEach((item, i) => {
  const brief = parsearRespuestaClaude(item.json);
  const contexto = contextos[i] || {};

  const esquemaTexto = brief.esquema
    .map((s) => (s.nivel === 'H2' ? '## ' : '### ') + s.encabezado + ' — ' + s.queCubrir)
    .join('\\n');

  salida.push({
    json: {
      fecha: new Date().toISOString().slice(0, 10),
      keyword: contexto.keyword,
      prioridad: contexto.prioridad,
      titulo: brief.tituloPropuesto,
      slug: brief.slug,
      metaDescripcion: brief.metaDescripcion,
      intencion: brief.intencionBusqueda,
      publico: brief.publicoObjetivo,
      angulo: brief.anguloDiferencial,
      palabrasObjetivo: brief.palabrasObjetivo,
      keywordsSecundarias: brief.keywordsSecundarias.join(', '),
      esquema: esquemaTexto,
      preguntasFrecuentes: brief.preguntasFrecuentes.join(' | '),
      enlacesInternos: brief.enlacesInternosSugeridos.join(' | '),
      cta: brief.llamadaALaAccion,
      estado: 'Brief listo',
    },
  });
});

return salida;
`.trim();

const CODIGO_SLACK_BRIEFS = `
const briefs = $('Parsear briefs').all().map((i) => i.json);
const cfg = $('Configuracion').first().json;

const bloques = briefs.map((b, i) => {
  const emoji = b.prioridad === 'Alta' ? '🔴' : b.prioridad === 'Baja' ? '🟢' : '🟡';
  return [
    emoji + ' *' + (i + 1) + '. ' + b.keyword + '*',
    '   • Titulo: ' + b.titulo,
    '   • Intencion: ' + b.intencion + ' · Extension objetivo: ' + b.palabrasObjetivo + ' palabras',
    '   • Angulo: ' + b.angulo,
    '   • Secundarias: ' + b.keywordsSecundarias,
  ].join('\\n');
});

const mensaje = [
  '📝 *' + briefs.length + ' brief(s) de contenido listo(s)*',
  '_Guardados en la hoja "' + cfg.hojaBriefs + '"_',
  '',
  ...bloques,
].join('\\n\\n');

return [{ json: { mensaje, total: briefs.length } }];
`.trim();

export default workflow({
  nombre: 'SEO 03 · Briefs de contenido con IA',
  etiquetas: ['seo', 'contenido', 'automatizacion'],
  nodos: [
    nota(
      'Nota 03',
      [
        '## SEO 03 · Briefs de contenido con IA',
        '',
        'Lee keywords con estado `pendiente` desde Google Sheets, consulta la',
        'SERP real (Serper.dev) y genera un brief editorial completo con Claude.',
        'El resultado se guarda en la hoja `Briefs` y se avisa por Slack.',
        '',
        '**Hoja `Keywords` esperada** (fila 1 = cabeceras):',
        '`keyword | intencion | prioridad | notas | estado`',
        '',
        'Pon `pendiente` en la columna `estado` para encolar una keyword.',
        '',
        'Puedes sustituir Serper.dev por DataForSEO o SerpAPI cambiando el',
        'nodo `SERP · Top 10` y el nodo `Contexto SERP`.',
      ].join('\n'),
      [-460, -200],
      { ancho: 440, alto: 420, color: 4 },
    ),

    nodo('Programacion semanal', 'n8n-nodes-base.scheduleTrigger', 1.2, [-20, 120], {
      rule: {
        interval: [{ field: 'weeks', triggerAtDay: [2], triggerAtHour: 8, triggerAtMinute: 0 }],
      },
    }),

    nodo('Ejecutar manualmente', 'n8n-nodes-base.manualTrigger', 1, [-20, 300], {}),

    nodo('Configuracion', 'n8n-nodes-base.set', 3.4, [220, 200], {
      assignments: {
        assignments: [
          { id: 'dominio', name: 'dominio', value: 'https://www.ejemplo.com', type: 'string' },
          {
            id: 'descripcion',
            name: 'descripcionNegocio',
            value: 'Describe aqui a que se dedica la marca, su propuesta de valor y su publico.',
            type: 'string',
          },
          {
            id: 'tono',
            name: 'tonoDeVoz',
            value: 'Cercano, directo y practico. Sin jerga corporativa ni promesas exageradas.',
            type: 'string',
          },
          { id: 'sheet-id', name: 'sheetId', value: 'REEMPLAZA_CON_EL_ID_DEL_SPREADSHEET', type: 'string' },
          { id: 'hoja-kw', name: 'hojaKeywords', value: 'Keywords', type: 'string' },
          { id: 'hoja-briefs', name: 'hojaBriefs', value: 'Briefs', type: 'string' },
          { id: 'slack', name: 'slackCanal', value: 'seo-contenido', type: 'string' },
          { id: 'max-briefs', name: 'maxBriefs', value: 5, type: 'number' },
          { id: 'pais', name: 'pais', value: 'mx', type: 'string' },
          { id: 'idioma', name: 'idioma', value: 'es', type: 'string' },
        ],
      },
      options: {},
    }),

    nodo('Google Sheets · Keywords', 'n8n-nodes-base.googleSheets', 4.5, [440, 200], {
      documentId: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.sheetId }}",
        mode: 'id',
      },
      sheetName: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.hojaKeywords }}",
        mode: 'name',
      },
      options: {},
    }),

    nodo('Limitar lote', 'n8n-nodes-base.code', 2, [660, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_LOTE,
    }),

    nodo('SERP · Top 10', 'n8n-nodes-base.httpRequest', 4.2, [880, 200], {
      method: 'POST',
      url: 'https://google.serper.dev/search',
      authentication: 'genericCredentialType',
      genericAuthType: 'httpHeaderAuth',
      sendBody: true,
      specifyBody: 'json',
      jsonBody:
        "={{ JSON.stringify({ q: $json.keyword, gl: $('Configuracion').first().json.pais, hl: $('Configuracion').first().json.idioma, num: 10 }) }}",
      options: {
        timeout: 30000,
        batching: { batch: { batchSize: 2, batchInterval: 1000 } },
      },
    }),

    nodo('Contexto SERP', 'n8n-nodes-base.code', 2, [1100, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_CONTEXTO_SERP,
    }),

    nodo('Preparar brief IA', 'n8n-nodes-base.code', 2, [1320, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_PROMPT_BRIEF,
    }),

    nodoClaude('Claude · Brief de contenido', [1540, 200]),

    nodo('Parsear briefs', 'n8n-nodes-base.code', 2, [1760, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_PARSEAR_BRIEF,
    }),

    nodo('Google Sheets · Briefs', 'n8n-nodes-base.googleSheets', 4.5, [1980, 80], {
      operation: 'append',
      documentId: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.sheetId }}",
        mode: 'id',
      },
      sheetName: {
        __rl: true,
        value: "={{ $('Configuracion').first().json.hojaBriefs }}",
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

    nodo('Resumen para Slack', 'n8n-nodes-base.code', 2, [1980, 340], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_SLACK_BRIEFS,
    }),

    nodo('Slack · Briefs listos', 'n8n-nodes-base.slack', 2.2, [2200, 340], {
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
    ['Ejecutar manualmente', 'Configuracion'],
    ['Configuracion', 'Google Sheets · Keywords'],
    ['Google Sheets · Keywords', 'Limitar lote'],
    ['Limitar lote', 'SERP · Top 10'],
    ['SERP · Top 10', 'Contexto SERP'],
    ['Contexto SERP', 'Preparar brief IA'],
    ['Preparar brief IA', 'Claude · Brief de contenido'],
    ['Claude · Brief de contenido', 'Parsear briefs'],
    ['Parsear briefs', 'Google Sheets · Briefs'],
    ['Parsear briefs', 'Resumen para Slack'],
    ['Resumen para Slack', 'Slack · Briefs listos'],
  ],
});
