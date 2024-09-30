import React from "react";
import { siteConfig } from "../config/site";
import { Icons } from "./Icons";
import { Button } from "./ui/button";

type Navigation = {
  name: string;
  href: string;
  icon: (props: React.HTMLAttributes<SVGElement>) => React.JSX.Element;
}[];

const navigation: Navigation = [
  {
    name: "Facebook",
    href: siteConfig.links.facebook,
    icon: (props) => <Icons.squareFacebook {...props} />,
  },
  {
    name: "Instagram",
    href: siteConfig.links.instagram,
    icon: (props) => <Icons.instagram {...props} />,
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: (props) => <Icons.xTwitter {...props} />,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: (props) => <Icons.squareGithub {...props} />,
  },
  {
    name: "YouTube",
    href: siteConfig.links.youtube,
    icon: (props) => <Icons.youtube {...props} />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              key={item.name}
            >
              <a href={item.href} className="absolute inset-0">
                <span className="sr-only">{item.name}</span>
              </a>
              <item.icon className="h-6 w-6 fill-current" aria-hidden="true" />
            </Button>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-muted-foreground">
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
