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

### Installing npm

To use npm, you need Node.js installed on your computer. Why? Because npm comes bundled with Node.js.

- To check if it's installed, open your command line or terminal and type

```bash
node -v
npm -v
```

### Semantic Versioning

This is semantic versioning, and it's important for managing package updates without breaking your project. Here's a quick breakdown:

- **Major version** (1.x.x): Introduces breaking changes.
- **Minor version** (x.1.x): Adds functionality in a backwards-compatible manner.
- **Patch version** (x.x.1): Fixes bugs without adding new features.

The `^` symbol allows minor and patch updates. Using `~` would only allow patch updates.

### Package Management

- Install packages defined in the `package.json` file

```bash
npm install
```

- Install a package locally

```bash
npm install <package_name>
```

- Install a specific version of a package

```bash
npm install <package_name>@<version>
```

- Install a package globally

```bash
npm install <package_name> --global
```

- Install and save a package as a dependency

```bash
npm install --save <package_name>
```

- Install and save a package as a development dependency

```bash
npm install --save-dev <package_name>
```

- Updating Packages

```bash
npm update <package_name>
```

### Handling Global Packages

- List globally installed packages

```bash
npm list -g --depth=0
```

- Find the location of globally installed packages

```bash
npm root -g
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
npm uninstall <package_name>
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
npm run <script_name>
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
npm info <package_name>
```

- List installed packages

```bash
npm ls
```

- Get help with npm commands

```bash
npm help
```

### Reinstall

- Remove node modules

```bash
rm -rf node_modules
```

- Install

```bash
npm i
```
