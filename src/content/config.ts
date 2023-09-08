import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
    category: z.string(),
    disable: z.boolean(),
  }),
});
const showcaseCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
    category: z.string(),
    disable: z.boolean(),
  }),
});
const resourcesCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
    category: z.string(),
    disable: z.boolean(),
  }),
});
const documentationCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
    category: z.string(),
    disable: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
  showcase: showcaseCollection,
  resources: resourcesCollection,
  documentation: documentationCollection,
};
