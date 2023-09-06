import React from "react";
import Article, { type ArticleProps } from "./Article";

type ContentProps = {
  data: ArticleProps[];
};

const Content: React.FC<ContentProps> = ({ data }) => {
  const title = "From the Cheat Sheet";
  const description =
    "Discover insights and handy tips to streamline your coding journey, straight from our comprehensive cheat sheet.";

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data &&
            data.map((doc: ArticleProps, i) => <Article key={i} {...doc} />)}
        </div>
      </div>
    </div>
  );
};
export default Content;
