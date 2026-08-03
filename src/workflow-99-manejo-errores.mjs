import { nodo, nota, workflow } from './lib.mjs';

const CODIGO_FORMATO_ERROR = `
const evento = $input.first().json;

const wf = evento.workflow || {};
const ej = evento.execution || {};
const error = ej.error || {};

const nodoFallido = ej.lastNodeExecuted || error.node?.name || 'desconocido';
const detalle = (error.message || 'Sin mensaje de error').slice(0, 900);

const mensaje = [
  '🚨 *Fallo en un workflow de SEO*',
  '',
  '• Workflow: *' + (wf.name || 'sin nombre') + '*',
  '• Nodo: ' + nodoFallido,
  '• Modo: ' + (ej.mode || 'desconocido'),
  '• Momento: ' + new Date().toISOString(),
  ej.url ? '• Ejecucion: ' + ej.url : '',
  '',
  '*Detalle*',
  '\\\`\\\`\\\`' + detalle + '\\\`\\\`\\\`',
]
  .filter(Boolean)
  .join('\\n');

return [{
  json: {
    mensaje,
    workflowNombre: wf.name || '',
    workflowId: wf.id || '',
    nodo: nodoFallido,
    error: detalle,
  },
}];
`.trim();

export default workflow({
  nombre: 'SEO 99 · Manejo de errores',
  etiquetas: ['seo', 'infraestructura'],
  nodos: [
    nota(
      'Nota 99',
      [
        '## SEO 99 · Manejo de errores',
        '',
        'Workflow de error compartido. Para activarlo:',
        '',
        '1. Abre cada workflow SEO.',
        '2. Menu `...` → **Settings** → **Error Workflow**.',
        '3. Selecciona `SEO 99 · Manejo de errores`.',
        '',
        'Cada vez que una ejecucion falle recibiras el aviso en Slack con',
        'el nodo exacto que rompio y el enlace a la ejecucion.',
      ].join('\n'),
      [-420, -60],
      { ancho: 400, alto: 300, color: 3 },
    ),

    nodo('Al fallar un workflow', 'n8n-nodes-base.errorTrigger', 1, [40, 200], {}),

    nodo('Configuracion', 'n8n-nodes-base.set', 3.4, [260, 200], {
      assignments: {
        assignments: [
          { id: 'slack', name: 'slackCanal', value: 'seo-alertas', type: 'string' },
        ],
      },
      options: {},
    }),

    nodo('Formatear error', 'n8n-nodes-base.code', 2, [480, 200], {
      mode: 'runOnceForAllItems',
      jsCode: CODIGO_FORMATO_ERROR,
    }),

    nodo('Slack · Alerta de error', 'n8n-nodes-base.slack', 2.2, [700, 200], {
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
    ['Al fallar un workflow', 'Configuracion'],
    ['Configuracion', 'Formatear error'],
    ['Formatear error', 'Slack · Alerta de error'],
  ],
});
