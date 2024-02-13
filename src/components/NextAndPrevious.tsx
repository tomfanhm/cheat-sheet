import React from "react";

type Item = {
  href: string;
  title: string;
};

type NextAndPreviousProps = {
  next: Item | null | undefined;
  previous: Item | null | undefined;
};

const NextAndPrevious: React.FC<NextAndPreviousProps> = ({
  next,
  previous,
}) => {
  if (!next && !previous) return <></>;

  return (
    <div className="mb-10 flex items-center font-semibold text-slate-700">
      {previous && (
        <a
          className="group flex items-center hover:text-slate-900 dark:hover:text-white"
          href={previous.href}
        >
          <svg
            viewBox="0 0 3 6"
            className="mr-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          {previous.title}
        </a>
      )}
      {next && (
        <a
          className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
          href={next.href}
        >
          {next.title}
          <svg
            viewBox="0 0 3 6"
            className="ml-3 h-1.5 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>
      )}
    </div>
  );
};
export default NextAndPrevious;
