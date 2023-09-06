import React from "react";
import type { ArticleProps } from "./Article";

type ShowcaseProps = {
  heading: string;
  paragraph: string;
  data: ArticleProps[];
};

const Showcase: React.FC<ShowcaseProps> = ({ heading, paragraph, data }) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{paragraph}</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data &&
            data.map((el, i) => (
              <article
                key={i}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    src={el.imageUrl}
                    alt={el.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={el.datetime} className="text-gray-500">
                    {el.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={el.href}>
                      <span className="absolute inset-0" />
                      {el.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {el.description}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Showcase;
