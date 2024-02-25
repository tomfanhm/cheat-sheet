---
id: b730026d
layout: ../../layouts/MarkdownContainer.astro
title: Astro.js
description: Astro.js is a modern front-end framework for building static websites and web applications. It allows you to write modular HTML, CSS, and JavaScript components and compile them into a static site.
imageUrl: ../../assets/astrojs.png
date: Sep 10, 2023
datetime: "2023-09-10"
category: Documentation
disable: false
---

### File Structure

- `src/*` - This is where your source code lives
- `public/*` - Any files here will be served as-is to the root URL of your site
- `src/assets/*` - Any static files that you want to reference in your HTML/JS
- `src/components/*` - This is where your shared components (React, Vue, Svelte, etc.) live
- `src/config/*` - This is where you can keep configuration files
- `src/content/*` - This is where you can keep your content files like markdown for blogs
- `src/layouts/*` - This is where your layout components live
- `src/pages/*` - Any `.astro` file in this directory will be built as a page
- `src/styles/*` - This is where you can keep your style files
- `src/utils/*` - This is where you can keep your utility files
- `astro.config.mjs` - Configure Astro
- `package.json` - Lists package dependencies and contains other metadata
- `tailwind.config.cjs` - Configuration file for Tailwind CSS
- `tsconfig.json` - Configuration file for TypeScript

```
.
└── my-app/
    ├── public/
    │   ├── images/
    │   │   ├── opengraph-image.png
    │   │   └── favicon.ico
    │   └── robots.txt
    ├── src/
    │   ├── assets/
    │   │   └── pokemon.png
    │   ├── conpoments/
    │   │   ├── Button.astro
    │   │   └── Header.tsx
    │   ├── config/
    │   │   └── config.ts
    │   ├── content/
    │   │   ├── blog/
    │   │   │   └── post1.md
    │   │   └── config.ts
    │   ├── layouts/
    │   │   └── layout.astro
    │   ├── pages/
    │   │   ├── blog/
    │   │   │   ├── index.astro
    │   │   │   └── [...slug].astro
    │   │   ├── 404.astro
    │   │   └── index.astro
    │   ├── styles/
    │   │   └── global.css
    │   └── utils/
    │       └── utils.ts
    ├── astro.config.mjs
    ├── package.json
    ├── tailwind.config.cjs
    └── tsconfig.json
```

### Astro Layouts

- Layout.astro, Layouts in Astro are just regular `.astro` components that can be reused across different pages

```astro
---
import { ViewTransitions } from "astro:transitions";
import "../styles/global.css";

export interface Props {
  title?: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <ViewTransitions />
  </head>
  <body class="bg-background min-h-screen font-sans antialiased">
    <main>
      <slot />
    </main>
  </body>
</html>
```

### Astro Pages

- Astro pages are .astro files located in the src/pages/ directory
- Each .astro file corresponds to a route based on its file name

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout>
  <h1>Hello, world!</h1>
</Layout>
```

### Hydrating Interactive Components

- `client:load` - The component will hydrate once the page has loaded
- `client:visible` - The component will hydrate once it's visible in the viewport
- `client:idle` - The component will hydrate once the browser is idle
- `client:only` - The component will only be sent to the client and won't render on the server

```astro
---
import InteractiveButton from "../components/InteractiveButton.tsx";
import InteractiveCounter from "../components/InteractiveCounter.tsx";
import InteractiveModal from "../components/InteractiveModal.tsx";
---

<InteractiveButton client:load />
<InteractiveButton client:visible />
<InteractiveButton client:only="react" />
```

### Optimized Images

- Define a collection with a schema

```typescript
// content/config.ts
import { defineCollection, z } from "astro:content";

// content/blog
const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      // Other properties
      imageUrl: image().refine((img) => img.width >= 600, {
        message: "Image must be at least 600 px width.",
      }),
    }),
});

export const collections = {
  blog: blog,
};
```

- Image component optimizes the image by converting it to the AVIF format

```astro
---
import { Image } from "astro:assets";

export interface Props {
  imageUrl: ImageMetadata;
}

const { imageUrl } = Astro.props;
---

<Image
  format="avif"
  src={imageUrl}
  alt=""
  class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
/>
```

### Markdown Code Block

- Creates a "Copy" button for each code block in the Markdown content

```astro
---
// MarkdownLayout.astro
---

<article class="prose mt-10 lg:prose-xl">
  <slot />
</article>

<script is:inline>
  function main() {
    const codeBlocks = Array.from(document.querySelectorAll("pre"));
    for (const codeBlock of codeBlocks) {
      const wrapper = document.createElement("div");
      wrapper.className = "relative";
      const copyButton = document.createElement("button");
      copyButton.className =
        "absolute top-0 right-0 m-2 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      copyButton.innerHTML = "Copy";

      const code = codeBlock.querySelector("code");

      if (code && codeBlock && codeBlock.parentNode) {
        codeBlock.appendChild(copyButton);
        codeBlock.parentNode.insertBefore(wrapper, codeBlock);
        wrapper.appendChild(codeBlock);

        copyButton.addEventListener("click", async () => {
          const text = code.innerText;
          await navigator.clipboard.writeText(text).then(() => {
            copyButton.innerText = "Copied";

            setTimeout(() => {
              copyButton.innerText = "Copy";
            }, 1000);
          });
        });
      }
    }
  }

  main();
</script>
```

### Theme

- Toggle **data-theme** Attribute

```tsx
import React, { useEffect, useState } from "react";
import { siteConfig } from "../config/site";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"night" | "fantasy">("night");

  useEffect(() => {
    const getDefaultTheme = (): "night" | "fantasy" => {
      const storedTheme = localStorage?.getItem("theme");
      if (!storedTheme) return "night";
      if (storedTheme === "night" || storedTheme == "fantasy") {
        return storedTheme;
      } else {
        return "night";
      }
    };
    const defaultTheme = getDefaultTheme();
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
  }, []);

  function handleTheme(theme: "night" | "fantasy") {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl normal-case" href="/">
          <span className="sr-only">{siteConfig.name}</span>
          <img className="h-8 w-auto" src={siteConfig.logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-end">
        <div className={theme === "night" ? "hidden" : ""}>
          <button
            className="btn btn-circle btn-ghost"
            aria-label="hidden"
            onClick={() => handleTheme("night")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-5 w-5 fill-current"
            >
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
            </svg>
          </button>
        </div>
        <div className={theme === "night" ? "" : "hidden"}>
          <button
            className="btn btn-circle btn-ghost"
            aria-label="hidden"
            onClick={() => handleTheme("fantasy")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-5 w-5 fill-current"
            >
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
```
