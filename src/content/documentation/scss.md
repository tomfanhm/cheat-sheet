---
id: accac230
layout: ../../layouts/MarkdownContainer.astro
title: SCSS
description: SCSS (Sassy CSS) is a preprocessor scripting language that extends the capabilities of standard CSS (Cascading Style Sheets). It introduces advanced features like variables, nested rules, mixins, functions, and inheritance, which help in writing more efficient and maintainable stylesheets.
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

### Built-in Functions

- SCSS provides a rich set of built-in functions categorized into several groups

#### Color Functions

- Manipulate and retrieve information about colors

```scss
$base-color: #3498db;
$sub-color: #e74c3c;
// lighten($color, $amount)
.lighten-color {
  background-color: lighten($base-color, 20%); // Lightens the base color by 20%
}
// darken($color, $amount)
.darken-color {
  background-color: darken($base-color, 20%); // Darkens the base color by 20%
}
// saturate($color, $amount)
.saturate-color {
  background-color: saturate(
    $base-color,
    20%
  ); // Increases the saturation by 20%
}
// desaturate($color, $amount)
.desaturate-color {
  background-color: desaturate(
    $base-color,
    20%
  ); // Decreases the saturation by 20%
}
// adjust-hue($color, $degrees)
.adjust-hue-color {
  background-color: adjust-hue(
    $base-color,
    90deg
  ); // Shifts the hue by 90 degrees
}
// grayscale($color)
.grayscale-color {
  background-color: grayscale(
    $base-color
  ); // Converts the base color to grayscale
}
// complement($color)
.complement-color {
  background-color: complement(
    $base-color
  ); // Generates the complementary color
}
// invert($color)
.invert-color {
  background-color: invert($base-color); // Inverts the base color
}
// mix($color1, $color2, [$weight])
.mix-color {
  background-color: mix($base-color, $sub-color, 50%);
}
```

#### Number Functions

- Perform operations on numeric values

```scss
// percentage($number)
.percentage-value {
  width: percentage(0.5); // Converts 0.5 to 50%
}
// round($number)
.round-value {
  width: round(4.7px); // Rounds 4.7px to 5px
}
// ceil($number)
.ceil-value {
  width: ceil(4.1px); // Rounds up 4.1px to 5px
}
// floor($number)
.floor-value {
  width: floor(4.9px); // Rounds down 4.9px to 4px
}
// abs($number)
.abs-value {
  width: abs(-10px); // Converts -10px to 10px
}
// min($numbers…)
.min-value {
  width: min(10px, 20px, 5px); // Returns the minimum value (5px)
}
// max($numbers…)
.max-value {
  width: max(10px, 20px, 5px); // Returns the maximum value (20px)
}
// random([$limit])
.random-value {
  width: random(100px); // Generates a random number between 1px and 100px
}
```

#### String Functions

- Manipulate strings and extract information

```scss
// quote($string)
.quote-string {
  content: quote(Hello); // Adds quotes around the string, resulting in "Hello"
}
// unquote($string)
.unquote-string {
  content: unquote(
    "Hello"
  ); // Removes quotes from the string, resulting in Hello
}
// str-length($string)
.str-length-string {
  content: str-length("Hello World"); // Returns the length of the string (11)
}
// str-insert($string, $insert, $index)
.str-insert-string {
  content: str-insert(
    "Hello",
    " World",
    6
  ); // Inserts " World" into "Hello" at position 6, resulting in "Hello World"
}
// str-index($string, $substring)
.str-index-string {
  content: str-index(
    "Hello World",
    "World"
  ); // Finds the starting position of "World" in the string (7)
}
// str-slice($string, $start-at, [$end-at])
.str-slice-string {
  content: str-slice(
    "Hello World",
    1,
    5
  ); // Extracts the slice from index 1 to 5, resulting in "Hello"
}
// to-upper-case($string)
.upper-case-string {
  content: to-upper-case(
    "hello"
  ); // Converts the string to uppercase, resulting in "HELLO"
}
// to-lower-case($string)
.lower-case-string {
  content: to-lower-case(
    "HELLO"
  ); // Converts the string to lowercase, resulting in "hello"
}
```
