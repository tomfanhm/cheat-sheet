---
id: 0a7f2628
layout: ../../layouts/MarkdownContainer.astro
title: NPM
description: NPM (Node Package Manager) is a package manager for JavaScript that allows developers to easily share and reuse code. It simplifies dependency management and makes it effortless to install, publish, and manage packages for Node.js projects.
imageUrl: ../../assets/npm.png
date: Feb 13, 2024
datetime: "2024-02-13"
category: Documentation
disable: false
---

### Package Management

- Install packages defined in the `package.json` file

```bash
npm install
```

- Install a package locally

```bash
npm install <package-name>
```

- Install a package globally.

```bash
npm install <package-name> --global
```

- Install and save a package as a dependency

```bash
npm install --save <package-name>
```

- Install and save a package as a development dependency

```bash
npm install --save-dev <package-name>
```

### Dependency Management

- Update installed packages

```bash
npm update
```

- Check for outdated packages

```bash
npm outdated
```

- Uninstall a package

```bash
npm uninstall <package-name>
```

- Remove packages not listed in the `package.json` file

```bash
npm prune
```

### Scripts

- Run the `start` script defined in `package.json`

```bash
npm start
```

- Run the `test` script defined in `package.json`

```bash
npm test
```

- Run a custom script defined in `package.json`

```bash
npm run <script-name>
```

### Publishing

- Initialize a new `package.json` file

```bash
npm init
```

- Publish a package to the npm registry

```bash
npm publish
```

- Update the version number in `package.json`

```bash
npm version <version>
```

### Miscellaneous

- Search for packages on the npm registry

```bash
npm search <keyword>
```

- Get detailed information about a package

```bash
npm info <package-name>
```

- List installed packages

```bash
npm ls
```

- Get help with npm commands

```bash
npm help
```
