---
id: c026d1b3
layout: ../../layouts/MarkdownContainer.astro
title: Typescript
description: TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. The main goal of TypeScript is to enhance the productivity of developers when working with large scale JavaScript applications by adding static types to the language.
imageUrl: ../../assets/typescript.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: false
---

### Inline Type

```typescript
const obj: { [x: string]: string } = {};
```

---

### Interface

```typescript
interface T {
  [x: string]: string;
}

const obj: T = { key: "string" };
```

---

### Type

```typescript
type T = {
  [x: string]: string;
};

const obj: T = { key: "string" };
```

---

### Class

```typescript
class Obj {
  key: string;

  constructor(key: string) {
    this.key = key;
  }
}
```

---

### Record

```typescript
const obj: Record<string, string> = {};
```

---

### Partial

- It means that every property in the resulting type can be either present or omitted, making it useful when you want to define an object type with optional properties.

```typescript
type T = Partial<Record<string, string[]>>;

const obj: T = {};
obj.foo.push(""); // Error: 'obj.foo' is possibly 'undefined'.
if (obj.foo) {
  obj.foo.push("string");
}
```

---

### Required

```typescript
type T = {
  str: string;
  num: number;
};

const invalid: Required<T> = { str: "string" }; // Error: Property 'num' is missing in type '{ str: string; }' but required in type 'Required<T>'.
const valid: Required<T> = { str: "string", num: 0 };
```

---

### Extends

```typescript
interface Vehicle {
  brand: string;
}

// Generic function with a type constraint
function displayBrand<T extends Vehicle>(vehicle: T): void {
  console.log(vehicle.brand);
}

const car = { brand: "Toyota", year: 2000 };
displayBrand(car); // Output: Toyota
displayBrand(""); // Error: Argument of type 'string' is not assignable to parameter of type 'Vehicle'.
```

---

### Object Key

```typescript
const likes = {
  tom: true,
  mary: true,
};

const objectKeys = <T extends Record<string, any>>(obj: T): (keyof T)[] => {
  return Object.keys(obj);
};

const users = objectKeys(likes); // const users: ("tom" | "mary")[]
```
