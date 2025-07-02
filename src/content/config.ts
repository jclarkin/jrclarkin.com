import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().optional(),
    keywords: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
