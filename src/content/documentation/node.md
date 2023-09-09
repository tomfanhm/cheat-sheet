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

```
mkdir my-app
cd my-app
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
```

### Setting Up TypeScript

- Create a tsconfig.json file to set up TypeScript compiler options

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6"],
    "allowJs": true,
    "outDir": "build",
    "rootDir": "src",
    "strict": true,
    "noImplicitAny": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

- Create a src directory and an index.ts file as the entry point of your application

```
mkdir src
touch src/index.ts
```

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

- Update your package.json scripts to include a script for starting the application in development mode with Nodemon

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:dev": "npx nodemon"
}
```

### Running the Application

- You can start your application in development mode with the following command

```
npm run start:dev
```
