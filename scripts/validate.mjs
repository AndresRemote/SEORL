#!/usr/bin/env node
/**
 * Valida los workflows generados en `workflows/` antes de importarlos a n8n.
 *
 * Comprueba:
 *  - JSON parseable y estructura minima (name, nodes, connections, settings)
 *  - nombres e IDs de nodo unicos
 *  - conexiones que apuntan a nodos existentes
 *  - al menos un nodo trigger por workflow
 *  - nodos sin conectar (aviso, no error) y notas adhesivas fuera de conexiones
 *  - codigo de los nodos Code sintacticamente valido
 *  - expresiones `$('Nodo')` que referencian nodos existentes
 *
 * Uso: npm run validate
 */
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const raizProyecto = join(dirname(fileURLToPath(import.meta.url)), '..');
const directorio = join(raizProyecto, 'workflows');

const TIPOS_TRIGGER = [
  'scheduleTrigger',
  'manualTrigger',
  'webhook',
  'errorTrigger',
  'executeWorkflowTrigger',
  'cron',
  'emailReadImap',
];

const esTrigger = (tipo) => TIPOS_TRIGGER.some((t) => tipo.endsWith(`.${t}`));

function validarWorkflow(nombreArchivo, wf) {
  const errores = [];
  const avisos = [];

  const err = (m) => errores.push(m);
  const avi = (m) => avisos.push(m);

  for (const campo of ['name', 'nodes', 'connections', 'settings']) {
    if (wf[campo] === undefined) err(`falta el campo obligatorio "${campo}"`);
  }
  if (!Array.isArray(wf.nodes)) {
    err('"nodes" no es un array');
    return { errores, avisos };
  }

  const nombres = new Set();
  const ids = new Set();
  const nodosReales = new Set(); // excluye notas adhesivas

  for (const n of wf.nodes) {
    if (!n.name) err('hay un nodo sin nombre');
    if (nombres.has(n.name)) err(`nombre de nodo duplicado: "${n.name}"`);
    nombres.add(n.name);

    if (!n.id) err(`el nodo "${n.name}" no tiene id`);
    if (ids.has(n.id)) err(`id de nodo duplicado en "${n.name}": ${n.id}`);
    ids.add(n.id);

    if (!n.type) err(`el nodo "${n.name}" no tiene type`);
    if (n.typeVersion === undefined) err(`el nodo "${n.name}" no tiene typeVersion`);
    if (!Array.isArray(n.position) || n.position.length !== 2) {
      err(`el nodo "${n.name}" no tiene una posicion valida`);
    }

    if (n.type !== 'n8n-nodes-base.stickyNote') nodosReales.add(n.name);

    // Los nodos Code deben contener JavaScript sintacticamente valido.
    if (n.type === 'n8n-nodes-base.code' && typeof n.parameters?.jsCode === 'string') {
      try {
        new vm.Script(`(async () => {\n${n.parameters.jsCode}\n})`);
      } catch (e) {
        err(`el nodo Code "${n.name}" tiene un error de sintaxis: ${e.message}`);
      }
    }
  }

  const triggers = wf.nodes.filter((n) => esTrigger(n.type || ''));
  if (triggers.length === 0) err('el workflow no tiene ningun nodo trigger');

  // Conexiones
  const conectados = new Set();
  for (const [origen, salidas] of Object.entries(wf.connections || {})) {
    if (!nombres.has(origen)) err(`la conexion parte de un nodo inexistente: "${origen}"`);
    conectados.add(origen);
    for (const rama of salidas.main || []) {
      for (const destino of rama || []) {
        if (!nombres.has(destino.node)) {
          err(`"${origen}" conecta con un nodo inexistente: "${destino.node}"`);
        }
        conectados.add(destino.node);
      }
    }
  }

  for (const nombre of nodosReales) {
    if (!conectados.has(nombre)) avi(`el nodo "${nombre}" no esta conectado a nada`);
  }

  // Referencias $('Nodo') dentro de codigo y expresiones.
  const serializado = JSON.stringify(wf);
  for (const match of serializado.matchAll(/\$\(\\?['"]([^'"\\]+)\\?['"]\)/g)) {
    const referido = match[1];
    if (!nombres.has(referido)) {
      err(`hay una expresion que referencia el nodo inexistente "${referido}"`);
    }
  }

  return { errores: [...new Set(errores)], avisos: [...new Set(avisos)] };
}

async function main() {
  const archivos = (await readdir(directorio)).filter((f) => f.endsWith('.json')).sort();

  if (archivos.length === 0) {
    console.error('No hay workflows en workflows/. Ejecuta primero: npm run build');
    process.exit(1);
  }

  let totalErrores = 0;
  let totalAvisos = 0;

  for (const archivo of archivos) {
    const crudo = await readFile(join(directorio, archivo), 'utf8');
    let wf;
    try {
      wf = JSON.parse(crudo);
    } catch (e) {
      console.error(`✗ ${archivo}: JSON invalido — ${e.message}`);
      totalErrores++;
      continue;
    }

    const { errores, avisos } = validarWorkflow(archivo, wf);
    totalErrores += errores.length;
    totalAvisos += avisos.length;

    const estado = errores.length ? '✗' : '✓';
    console.log(`${estado} ${archivo} — ${wf.nodes.length} nodos, "${wf.name}"`);
    for (const e of errores) console.log(`    ERROR  ${e}`);
    for (const a of avisos) console.log(`    aviso  ${a}`);
  }

  console.log(
    `\n${archivos.length} workflow(s) revisados · ${totalErrores} error(es) · ${totalAvisos} aviso(s)`,
  );
  if (totalErrores > 0) process.exit(1);
}

await main();
