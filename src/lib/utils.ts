import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes where necessary.
 *
 * @param inputs - The class names to combine.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type LinkedContentList = Array<{
  id: string;
  slug: string;
  collection: string;
  href: string;
  title: string;
  description: string;
  body: string;
  imageUrl: ImageMetadata;
  date: string;
  datetime: string;
  previous: { title: string; href: string } | null;
  next: { title: string; href: string } | null;
}>;

/**
 * Generates a list of linked content objects from an array of content items.
 * The resulting list is sorted by date and includes previous and next links for navigation.
 *
 * @param arr - The array of content items.
 * @param prefix - The prefix to add to the slug to generate the href.
 */
export function generateLinkedContentList<
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
>(arr: T[], prefix: string): LinkedContentList {
  const temp = arr
    .filter((el) => !el.data.disable)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    )
    .map((el) => ({
      id: el.data.id,
      slug: el.slug,
      collection: el.collection,
      href: prefix + el.slug,
      title: el.data.title,
      description: el.data.description,
      body: el.body,
      imageUrl: el.data.imageUrl,
      date: el.data.date,
      datetime: el.data.datetime,
    }));
  return temp.map((el, i) => ({
    ...el,
    previous:
      i > 0
        ? {
            title: temp[i - 1].title,
            href: temp[i - 1].href,
          }
        : null,
    next:
      i < temp.length - 1
        ? {
            title: temp[i + 1].title,
            href: temp[i + 1].href,
          }
        : null,
  }));
}

type ContentNavigation = {
  previous: {
    title: string;
    href: string;
  } | null;
  next: {
    title: string;
    href: string;
  } | null;
};

/**
 * Retrieves the navigation information (previous and next content) for a given slug.
 *
 * @param arr - The array of linked content objects.
 * @param slug - The slug to find the corresponding content.
 */
export function getContentNavigation(
  arr: LinkedContentList,
  slug: string,
): ContentNavigation {
  const content = arr.find((el) => el.slug === slug);
  if (!content) {
    return { previous: null, next: null };
  }
  const { previous, next } = content;
  return { previous, next };
}
