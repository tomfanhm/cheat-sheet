import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { MdMenu } from "react-icons/md";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
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
              src={siteConfig.favicon}
              alt={siteConfig.name}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Header;
