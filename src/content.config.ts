import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/* ------------------------------------------------------------------ *
 *  TEXTOS LARGOS
 *  Un archivo .md por idioma. Se escriben como un documento normal:
 *  ## para los títulos, ** ** para negrita, - para las listas.
 * ------------------------------------------------------------------ */

const camposComunes = {
  titulo: z.string(),
  /** Ponlo en false mientras la traducción esté sin revisar. */
  revisado: z.boolean().default(true),
};

const perfil = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/perfil' }),
  schema: z.object({
    ...camposComunes,
    entradilla: z.string(),
  }),
});

const filosofia = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/filosofia' }),
  schema: z.object({
    ...camposComunes,
    entradilla: z.string(),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object(camposComunes),
});

export const collections = { perfil, filosofia, legal };
