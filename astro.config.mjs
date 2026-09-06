// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/* ------------------------------------------------------------------ *
 *  DIRECCIÓN DE LA WEB
 *
 *  Al publicar desde GitHub, la dirección se calcula sola a partir del
 *  nombre de la cuenta y del repositorio: no hay que tocar nada.
 *
 *  Si algún día se compra un dominio propio, basta con escribirlo aquí:
 *      const DOMINIO_PROPIO = 'https://josebaerrazkin.com';
 *  (y añadir un archivo public/CNAME con "josebaerrazkin.com" dentro).
 * ------------------------------------------------------------------ */
const DOMINIO_PROPIO = '';

/** GitHub Actions rellena esta variable con "cuenta/repositorio". */
const REPOSITORIO = process.env.GITHUB_REPOSITORY ?? '';
const [cuenta, repositorio] = REPOSITORIO.toLowerCase().split('/');

const sitioGitHub = cuenta ? `https://${cuenta}.github.io` : 'https://ejemplo.github.io';
const baseGitHub =
  repositorio && repositorio !== `${cuenta}.github.io` ? `/${repositorio}` : '/';

const SITIO = DOMINIO_PROPIO || process.env.SITE_URL || sitioGitHub;
const BASE = DOMINIO_PROPIO ? '/' : (process.env.BASE_PATH ?? baseGitHub);

export default defineConfig({
  site: SITIO,
  base: BASE,
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en', 'fr', 'eu', 'de'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
