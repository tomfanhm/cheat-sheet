---
id: d218b710
layout: ../../layouts/MarkdownContainer.astro
title: Next.js
description: A comprehensive guide to using Next.js effectively, featuring a collection of handy code snippets and best practices for various features.
imageUrl: ../../assets/next.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: true
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
    --background: "#ffffff";
    --foreground: "#000000";
  }

  .dark {
    --background: "#000000";
    --foreground: "#ffffff";
  }
}
```

- Create theme-provider.tsx

```typescript
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

- Update layout.tsx
- Wrap the application with the ThemeProvider component

```typescript
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

```typescript
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
};
```
