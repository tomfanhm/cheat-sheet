import React from "react";

export type ArticleProps = {
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
  datetime: string;
};

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative w-full">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="mt-8 flex items-center gap-x-4 text-xs">
          <time dateTime={props.datetime} className="text-gray-500">
            {props.date}
          </time>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={props.href}>
              <span className="absolute inset-0" />
              {props.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {props.description}
          </p>
        </div>
      </div>
    </article>
  );
};
export default Article;
