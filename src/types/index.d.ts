export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  author: string;
  url: string;
  favicon: string;
  ogImage: string;
  logo: string;
  links: {
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
    youtube: string;
  };
};
