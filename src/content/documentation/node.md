---
id: d93a148c
layout: ../../layouts/MarkdownContainer.astro
title: Node.js
description: A comprehensive cheat sheet for Node.js, providing a handy reference for setting up, developing, and optimizing Node.js applications. Ideal for both beginners and experienced developers who want to keep key concepts and commands at their fingertips.
imageUrl: ../../assets/node.png
date: Sep 9, 2023
datetime: "2023-09-09"
category: Documentation
disable: false
---

### Initialization

- Install TypeScript and the TypeScript definitions for Node.js as development dependencies

```bash
mkdir my-app
cd my-app
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
```

---

### Setting Up TypeScript

- Create a tsconfig.json file to set up TypeScript compiler options

```bash
tsc --init
```

---

- Create a src directory and an index.ts file as the entry point of your application

```bash
mkdir src
touch src/index.ts
```

---

### Nodemon Configuration

- Create a nodemon.json file to configure Nodemon to work with TypeScript

```json
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/index.ts"
}
```

---

- Update your package.json scripts to include a script for starting the application in development mode with Nodemon

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "npx nodemon"
}
```

---

### Running the Application

- You can start your application in development mode with the following command

```bash
npm run start:dev
```

---

### Creating a Simple HTTP Server

- Add Express.js as a dependency

```bash
npm install express
```

- Create an Express application in src/index.ts

```typescript
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```
