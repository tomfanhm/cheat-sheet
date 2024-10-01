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

---

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

---

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

---

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

---

### Markdown Code Block

- Creates a "Copy" button for each code block in the Markdown content

```javascript
const setCopyButton = () => {
  const pres = Array.from(document.querySelectorAll("pre"));
  for (const pre of pres) {
    const wrapper = document.createElement("div");
    wrapper.className = "relative";
    const button = document.createElement("button");
    button.className =
      "absolute top-0 right-0 m-2 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs";
    button.innerHTML = "Copy";
    const code = pre.querySelector("code");

    if (code && pre && pre.parentNode) {
      pre.appendChild(button);
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      button.addEventListener("click", async () => {
        const text = code.innerText;
        try {
          await navigator.clipboard.writeText(text);
          button.innerText = "Copied";
          setTimeout(() => {
            button.innerText = "Copy";
          }, 1000);
        } catch (err) {
          console.error("Failed to copy text: ", err);
        }
      });
    }
  }
};
```

### Theme

- Toggle dark theme

```javascript
const setTheme = () => {
  const getThemePreference = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };
  const isDark = getThemePreference() === "dark";
  document.documentElement.classList[isDark ? "add" : "remove"]("dark");

  if (typeof localStorage !== "undefined") {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  }
};
```
