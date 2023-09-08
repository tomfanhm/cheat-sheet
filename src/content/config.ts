import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      datetime: z.string(),
      category: z.string(),
      disable: z.boolean(),
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});
const showcaseCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      datetime: z.string(),
      category: z.string(),
      disable: z.boolean(),
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});
const resourcesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      datetime: z.string(),
      category: z.string(),
      disable: z.boolean(),
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});
const documentationCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.string(),
      datetime: z.string(),
      category: z.string(),
      disable: z.boolean(),
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});

export const collections = {
  blog: blogCollection,
  showcase: showcaseCollection,
  resources: resourcesCollection,
  documentation: documentationCollection,
};
