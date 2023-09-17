export function parse<
  T extends {
    slug: string;
    data: {
      id: string;
      title: string;
      description: string;
      imageUrl: {
        src: string;
        width: number;
        height: number;
        format: "png" | "jpg" | "jpeg" | "tiff" | "webp" | "gif" | "svg";
      };
      date: string;
      datetime: string;
      disable: boolean;
    };
  }
>(arr: T[], prefix: string) {
  return arr
    .filter((el) => !el.data.disable)
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
    )
    .map((el, i) => ({
      id: el.data.id,
      href: prefix + el.slug,
      title: el.data.title,
      description: el.data.description,
      imageUrl: el.data.imageUrl,
      date: el.data.date,
      datetime: el.data.datetime,
    }));
}
