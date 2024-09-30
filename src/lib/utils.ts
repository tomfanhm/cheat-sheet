import { getCollection } from "astro:content";
import { clsx, type ClassValue } from "clsx";
import Fuse from "fuse.js";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parse<
  T extends {
    slug: string;
    body: string;
    collection: string;
    data: {
      id: string;
      title: string;
      description: string;
      imageUrl: ImageMetadata;
      date: string;
      datetime: string;
      disable: boolean;
    };
  },
>(arr: T[], prefix: string) {
  return arr
    .filter((el) => !el.data.disable)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    )
    .map((el) => ({
      id: el.data.id,
      collection: el.collection,
      href: prefix + el.slug,
      title: el.data.title,
      description: el.data.description,
      body: el.body,
      imageUrl: el.data.imageUrl,
      date: el.data.date,
      datetime: el.data.datetime,
    }));
}

export async function getPosts(q: string) {
  try {
    const collections = await Promise.all([
      getCollection("blog").then((el) => parse(el, "/blog/")),
      getCollection("documentation").then((el) => parse(el, "/documentation/")),
      getCollection("resources").then((el) => parse(el, "/resources/")),
      getCollection("showcase").then((el) => parse(el, "/showcase/")),
    ]);
    const allPosts = collections.flat();

    const fuse = new Fuse(allPosts, {
      includeScore: false,
      keys: ["title", "description", "body"],
    });
    const result = fuse.search(q);
    return result.map((item) => item.item);
  } catch (error) {
    console.log("🚀 ~ file: utils.ts ~ getPosts ~ error:", error);
  }
  return [];
}
