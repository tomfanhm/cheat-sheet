import React, { Fragment, useState, useTransition } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

interface Post {
  href: string;
  title: string;
  description: string;
  collection: string;
}

type SearchPanelProps = {
  searchOpen: boolean;
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchPanel: React.FC<SearchPanelProps> = ({
  searchOpen,
  setSearchOpen,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Post[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = async (value: string) => {
    setSearchValue(value);
    const { getPosts } = await import("../lib/utils");
    const result = await getPosts(value);
    startTransition(() => {
      setSearchResult(result);
    });
  };

  return (
    <Dialog open={searchOpen} onOpenChange={(el) => setSearchOpen(el)}>
      <DialogContent className="max-w-lg border-0 bg-transparent px-4 py-0">
        <div className="overflow-hidden rounded-lg border border-border bg-background shadow-md">
          <div className="relative">
            <input
              className="block w-full appearance-none bg-transparent py-4 pl-4 pr-12 text-base text-foreground placeholder:text-muted-foreground focus:outline-none sm:text-sm sm:leading-6"
              placeholder="Find anything..."
              aria-label="Search components"
              role="combobox"
              type="text"
              value={searchValue}
              style={{ caretColor: "rgb(107, 114, 128)" }}
              onChange={async (e) => handleSearch(e.target.value)}
            />
            {isPending ? (
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 h-6 w-6 animate-spin fill-current"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <svg
                className="pointer-events-none absolute right-4 top-4 h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
              </svg>
            )}
          </div>
          {searchResult.length > 0 && (
            <Fragment>
              <ul className="max-h-[18.375rem] divide-y divide-border overflow-y-auto rounded-b-lg border-t border-border text-sm leading-6">
                {searchResult.map((post, i) => (
                  <a href={post.href} key={i}>
                    <li className="flex items-center justify-between bg-accent p-4">
                      <span className="text-overflow-ellipsis block max-w-xs overflow-hidden whitespace-nowrap font-semibold text-primary">
                        {post.title}
                      </span>
                      <span className="ml-4 text-right text-xs text-accent-foreground/70">
                        {post.collection}
                      </span>
                    </li>
                  </a>
                ))}
              </ul>
            </Fragment>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SearchPanel;
