---
id: accac230
layout: ../../layouts/MarkdownContainer.astro
title: SCSS
description: SCSS is a preprocessor scripting language that extends the capabilities of standard CSS (Cascading Style Sheets). It introduces advanced features like variables, nested rules, mixins, functions, and inheritance, which help in writing more efficient and maintainable stylesheets.
imageUrl: ../../assets/sass.png
date: Oct 1, 2024
datetime: "2024-10-01"
category: Documentation
disable: false
---

### Variables

- Variables store reusable values and help maintain consistency across your stylesheets

```scss
$primary-color: #000000;

body {
  color: $primary-color;
}
```

### Nesting

- Nesting allows you to nest selectors within other selectors, mirroring the HTML structure

```scss
.nav {
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
}
```

### Partials and Import

- Break your SCSS code into smaller, manageable files called partials and include them using `@import`

```scss
// Prefix partial filenames with an underscore (e.g., _variables.scss), SCSS won't compile these into separate CSS files
@import "variables";
```

### Mixins

- Mixins allow you to define reusable blocks of styles

```scss
@mixin mx($space) {
  margin-left: $space;
  margin-right: $space;
}

.button {
  @include mx(1rem);
}
```

### Extend/Inheritance

- Use `@extend` to share styles between selectors, reducing code duplication

```scss
%button-base {
  padding: 1rem 1.5rem;
}

.button-primary {
  @extend %button-base;
  background-color: $primary-color;
}

.button-secondary {
  @extend %button-base;
  background-color: $secondary-color;
}
```

### Operators

- Perform mathematical calculations directly in your stylesheets

```scss
.operator {
  padding-top: 1rem + 1; // 2rem
  padding-bottom: 1rem - 1; // 0rem
  padding-left: 1rem * 2; // 2rem
  padding-right: (1rem / 2); // 0.5rem
}
```
