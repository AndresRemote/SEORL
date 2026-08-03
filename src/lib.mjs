/**
 * Utilidades compartidas para construir workflows de n8n.
 *
 * Los workflows se escriben en JavaScript (en `src/`) y se compilan a JSON
 * importable (en `workflows/`) con `npm run build`. Esto permite escribir el
 * codigo de los nodos "Code" como template literals legibles en vez de
 * cadenas JSON con escapes.
 */

/** Hash determinista (FNV-1a de 32 bits). */
function hash32(texto, semilla = 0x811c9dc5) {
  let h = semilla;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/**
 * Genera un UUID v4 determinista a partir del nombre del nodo, para que
 * recompilar el proyecto no produzca diffs ruidosos.
 */
export function idDesdeNombre(nombre) {
  const partes = [];
  for (let i = 0; i < 4; i++) {
    partes.push(hash32(`${nombre}#${i}`).toString(16).padStart(8, '0'));
  }
  const hex = partes.join('');
  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    `4${hex.slice(13, 16)}`,
    `8${hex.slice(17, 20)}`,
    hex.slice(20, 32),
  ].join('-');
}

/** Crea un nodo de n8n. */
export function nodo(nombre, tipo, typeVersion, posicion, parameters = {}, extra = {}) {
  return {
    parameters,
    id: idDesdeNombre(nombre),
    name: nombre,
    type: tipo,
    typeVersion,
    position: posicion,
    ...extra,
  };
}

/** Nota adhesiva (documentacion visible en el canvas de n8n). */
export function nota(nombre, contenido, posicion, { ancho = 380, alto = 240, color = 4 } = {}) {
  return nodo(nombre, 'n8n-nodes-base.stickyNote', 1, posicion, {
    content: contenido,
    height: alto,
    width: ancho,
    color,
  });
}

/**
 * Construye el objeto `connections` a partir de una lista de aristas.
 * Cada arista es `[origen, destino]` o `[origen, destino, indiceSalida]`.
 */
export function conexiones(aristas) {
  const salida = {};
  for (const [origen, destino, indiceSalida = 0] of aristas) {
    salida[origen] ??= { main: [] };
    while (salida[origen].main.length <= indiceSalida) salida[origen].main.push([]);
    salida[origen].main[indiceSalida].push({ node: destino, type: 'main', index: 0 });
  }
  return salida;
}

/** Ensambla el workflow completo en el formato que espera la importacion de n8n. */
export function workflow({ nombre, nodos, aristas, etiquetas = [] }) {
  return {
    name: nombre,
    nodes: nodos,
    connections: conexiones(aristas),
    settings: {
      executionOrder: 'v1',
      saveManualExecutions: true,
      callerPolicy: 'workflowsFromSameOwner',
    },
    active: false,
    pinData: {},
    tags: etiquetas.map((t) => ({ name: t })),
    meta: { templateCredsSetupCompleted: false },
  };
}

/**
 * Nodo HTTP Request preconfigurado para la Messages API de Anthropic.
 *
 * El cuerpo de la peticion se construye en un nodo Code previo y se expone en
 * `$json.body`; asi el JSON queda legible y versionable en `src/`.
 *
 * Autenticacion: credencial generica "Header Auth" con
 *   Nombre : x-api-key
 *   Valor  : <tu clave de api.anthropic.com>
 */
export function nodoClaude(nombre, posicion) {
  return nodo(nombre, 'n8n-nodes-base.httpRequest', 4.2, posicion, {
    method: 'POST',
    url: 'https://api.anthropic.com/v1/messages',
    authentication: 'genericCredentialType',
    genericAuthType: 'httpHeaderAuth',
    sendHeaders: true,
    headerParameters: {
      parameters: [{ name: 'anthropic-version', value: '2023-06-01' }],
    },
    sendBody: true,
    specifyBody: 'json',
    jsonBody: '={{ JSON.stringify($json.body) }}',
    options: {
      timeout: 180000,
      response: { response: { neverError: false } },
    },
  });
}

/**
 * Fragmento reutilizable: extrae el primer bloque de texto de una respuesta de
 * la Messages API y lo parsea como JSON.
 *
 * Es importante buscar por `type === 'text'` en vez de usar `content[0]`:
 * con el razonamiento activado (por defecto en Claude Opus 5) la respuesta
 * puede empezar con un bloque `thinking`.
 */
export const PARSEAR_RESPUESTA_CLAUDE = `
function parsearRespuestaClaude(respuesta) {
  if (!respuesta || !Array.isArray(respuesta.content)) {
    throw new Error('Respuesta inesperada de la API de Claude: ' + JSON.stringify(respuesta).slice(0, 500));
  }
  if (respuesta.stop_reason === 'refusal') {
    throw new Error('La API rechazo la solicitud (stop_reason: refusal).');
  }
  const bloque = respuesta.content.find((b) => b.type === 'text');
  if (!bloque) {
    throw new Error('La respuesta no incluye ningun bloque de texto.');
  }
  return JSON.parse(bloque.text);
}
`.trim();

/** Modelo por defecto para todas las llamadas a la Messages API. */
export const MODELO_CLAUDE = 'claude-opus-5';
