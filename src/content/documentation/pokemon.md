---
id: faed546c
layout: ../../layouts/MarkdownContainer.astro
title: Pokemon API
description: The Pokemon API is a free and open-source API that provides information about the Pokemon universe, including details about different Pokemon, their abilities, types, and much more. This guide focuses on TypeScript usage with Pokemon API v2.
imageUrl: ../../assets/pokemon.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: false
---

### Get All Pokemon

```typescript
const schema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z
    .object({
      name: z.string(),
      url: z.string(),
    })
    .array(),
});

export async function getAllPokemon() {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const result = await res.json();
    const parse = schema.parse(result);
    return parse;
  } catch (error) {
    console.error(`Failed to fetch Pokemon data: ${error}`);
  }
  return null;
}
```

### Get Pokemon Details

```typescript
const schema = z.object({
  id: z.number(),
  name: z.string(),
  weight: z.number(),
});

async function getPokemonDetails(nameOrId: string | number) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

    const result = await res.json();
    const parse = schema.parse(result);
    return parse;
  } catch (error) {
    console.error(`Failed to fetch Pokemon details: ${error}`);
  }
  return null;
}
```
