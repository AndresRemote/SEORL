#!/usr/bin/env node
/**
 * Compila los workflows de `src/*.mjs` a JSON importable en `workflows/`.
 *
 * Uso: npm run build
 */
import { mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const raizProyecto = join(dirname(fileURLToPath(import.meta.url)), '..');
const directorioFuente = join(raizProyecto, 'src');
const directorioSalida = join(raizProyecto, 'workflows');

const nombreArchivo = (archivoFuente) =>
  archivoFuente.replace(/^workflow-/, '').replace(/\.mjs$/, '.json');

async function main() {
  await mkdir(directorioSalida, { recursive: true });

  const archivos = (await readdir(directorioSalida))
    .filter((f) => f.endsWith('.json'));

  const fuentes = (await readdir(directorioFuente))
    .filter((f) => f.startsWith('workflow-') && f.endsWith('.mjs'))
    .sort();

  if (fuentes.length === 0) {
    console.error('No se encontro ningun workflow en src/.');
    process.exit(1);
  }

  const generados = new Set();

  for (const fuente of fuentes) {
    const modulo = await import(pathToFileURL(join(directorioFuente, fuente)).href);
    const wf = modulo.default;

    if (!wf?.name || !Array.isArray(wf.nodes)) {
      console.error(`✗ ${fuente}: el export por defecto no es un workflow valido.`);
      process.exit(1);
    }

    const destino = nombreArchivo(fuente);
    generados.add(destino);
    await writeFile(join(directorioSalida, destino), `${JSON.stringify(wf, null, 2)}\n`, 'utf8');
    console.log(`✓ workflows/${destino}  (${wf.nodes.length} nodos)`);
  }

  const huerfanos = archivos.filter((f) => !generados.has(f));
  if (huerfanos.length) {
    console.warn(
      `\n⚠ Archivos en workflows/ sin fuente en src/: ${huerfanos.join(', ')}`,
    );
  }
}

await main();
