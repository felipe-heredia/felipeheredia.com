import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(["Docker", "Algorítimos"]),
    publish_date: z.string().datetime(),
    image: z.string().url(),
    image_alt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
