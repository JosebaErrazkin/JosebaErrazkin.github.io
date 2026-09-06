/**
 * Copia a public/pdfjs/ los archivos auxiliares que necesita el visor de
 * currículums para dibujar cualquier PDF (tipografías estándar, decodificadores
 * de imagen y tablas de caracteres).
 *
 * Se ejecuta solo antes de "npm run dev" y de "npm run build"; no hay que
 * llamarlo a mano.
 */
import { cp, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const PDFJS = dirname(require.resolve('pdfjs-dist/build/pdf.mjs'), '..');
const ORIGEN = join(PDFJS, '..');
const DESTINO = join(RAIZ, 'public', 'pdfjs');

const CARPETAS = ['standard_fonts', 'wasm', 'cmaps', 'iccs'];

await rm(DESTINO, { recursive: true, force: true });
await mkdir(DESTINO, { recursive: true });

for (const carpeta of CARPETAS) {
  await cp(join(ORIGEN, carpeta), join(DESTINO, carpeta), { recursive: true });
}

console.log(`Archivos del visor de PDF copiados a public/pdfjs/ (${CARPETAS.join(', ')}).`);
