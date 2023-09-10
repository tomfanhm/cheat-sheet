---
id: c026d1b3
layout: ../../layouts/MarkdownContainer.astro
title: Typescript
description: TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. The main goal of TypeScript is to enhance the productivity of developers when working with large scale JavaScript applications by adding static types to the language.
imageUrl: ../../assets/typescript.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: true
---

```typescript
function getChunks<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk: T[] = arr.slice(i, i + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}
```
