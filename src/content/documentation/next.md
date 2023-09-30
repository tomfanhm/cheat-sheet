---
id: d218b710
layout: ../../layouts/MarkdownContainer.astro
title: Next.js
description: Next.js is a React framework that provides features such as SSR (Server-Side Rendering), SSG (Static Site Generation), and ISR (Incremental Static Regeneration) out of the box. These features help us to build high performance, SEO-friendly web applications. A comprehensive guide to using Next.js effectively, featuring a collection of handy code snippets and best practices for various features.
imageUrl: ../../assets/next.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: false
---

### Dark Mode

- Update the global.css
- Define CSS variables for the background and foreground colors

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #ffffff;
    --foreground: #000000;
  }

  .dark {
    --background: #000000;
    --foreground: #ffffff;
  }
}
```

- Create theme-provider.tsx

```tsx
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

- Update layout.tsx
- Wrap the application with the ThemeProvider component

```tsx
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

- Create theme-switcher.tsx
- This component allows the user to switch between light and dark modes

```tsx
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
```

- Update tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
```

### getStaticProps

- A Next.js function that you can export from a page to fetch data at build time and pre-render the page with the fetched data

```tsx
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return {
    props: {
      repo: repo,
    },
    revalidate: 10,
  };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return repo.stargazers_count;
}
```

### getStaticPaths

- A Next.js function that you can export from a page with dynamic routes
- It specifies a list of paths that Next.js should statically pre-render

```tsx
export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await fetch("https://.../posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}
```

### getServerSideProps

- A Next.js function that you can export from a page to fetch data at request time and pre-render the page with the fetched data

```tsx
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return {
    props: {
      repo: repo,
    },
  };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return repo.stargazers_count;
}
```
