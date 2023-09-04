export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  favicon: string;
  ogImage: string;
  links: {
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
    youtube: string;
  };
};
