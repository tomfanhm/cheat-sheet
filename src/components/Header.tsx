import React, { useState } from "react";
import { navigation } from "../config/navigation";
import { siteConfig } from "../config/site";
import { Icons } from "./Icons";
import ModeToggle from "./ModeToggle";
import Search from "./Search";
import SearchPanel from "./SearchPanel";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{siteConfig.name}</span>
            <img
              className="h-8 w-auto"
              src={siteConfig.logo}
              alt={siteConfig.name}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground/70"
              >
                <span className="sr-only">Open main menu</span>
                <Icons.bars
                  className="h-6 w-6 fill-current"
                  aria-hidden="true"
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">{siteConfig.name}</span>
                    <img
                      className="h-8 w-auto"
                      src={siteConfig.logo}
                      alt={siteConfig.name}
                    />
                  </a>
                </div>
              </SheetHeader>
              <div className="mt-6 flow-root">
                <div className="-my-6">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.name}
                      </a>
                    ))}
                    <span className="-mx-3 block cursor-pointer rounded-lg text-base font-semibold leading-7 text-foreground hover:bg-accent hover:text-accent-foreground">
                      <Search
                        className="flex w-full items-center justify-start rounded-lg px-3 py-3"
                        setSearchOpen={setSearchOpen}
                      />
                    </span>
                    <span className="-mx-3 block cursor-pointer rounded-lg text-base font-semibold leading-7 text-foreground hover:bg-accent hover:text-accent-foreground">
                      <ModeToggle className="flex w-full items-center justify-start rounded-lg px-3 py-3" />
                    </span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground"
            >
              {item.name}
            </a>
          ))}
          <Search
            className="-my-1 flex h-8 w-8 items-center justify-center rounded-lg lg:ml-8"
            setSearchOpen={setSearchOpen}
          />
          <ModeToggle className="-my-1 flex h-8 w-8 items-center justify-center rounded-lg" />
        </div>
      </nav>
      {/* Search */}
      <SearchPanel searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </header>
  );
};
export default Header;
