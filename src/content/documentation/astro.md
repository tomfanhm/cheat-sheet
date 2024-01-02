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
  <body class="min-h-screen bg-background font-sans antialiased">
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
import InteractiveButton from '../components/InteractiveButton.tsx';
import InteractiveCounter from '../components/InteractiveCounter.tsx';
import InteractiveModal from "../components/InteractiveModal.tsx"
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
  imageUrl: ImageMetadata
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
<article class="mt-10 prose lg:prose-xl">
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
