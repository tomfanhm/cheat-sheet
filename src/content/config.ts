import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
  }),
});
const showcaseCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
  }),
});
const resourcesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
  }),
});
const documentationCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    date: z.string(),
    datetime: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  showcase: showcaseCollection,
  resources: resourcesCollection,
  documentation: documentationCollection,
};
