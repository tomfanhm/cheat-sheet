import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import { siteConfig } from "../config/site";

type Navigation = {
  name: string;
  href: string;
  icon: (props: any) => React.JSX.Element;
}[];

const navigation: Navigation = [
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    icon: (props) => <BsFacebook {...props} />,
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: (props) => <BsInstagram {...props} />,
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: (props) => <BsTwitter {...props} />,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: (props) => <BsGithub {...props} />,
  },
  {
    name: "YouTube",
    href: siteConfig.links.youtube,
    icon: (props) => <BsYoutube {...props} />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            {`© ${new Date().getFullYear()} ${
              siteConfig.name
            } All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
