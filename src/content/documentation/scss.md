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

---

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

---

### Partials and Import

- Break your SCSS code into smaller, manageable files called partials and include them using `@import`

```scss
// Prefix partial filenames with an underscore (e.g., _variables.scss), SCSS won't compile these into separate CSS files
@import "variables";
```

---

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

---

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

---

### Operators

- Perform mathematical calculations directly in your stylesheets

  - Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
  - Comparison Operators: ==, `!=`, `<`, `>`, `<=`, `>=`
  - Boolean Operators: `and`, `or`, `not`

```scss
.operator {
  padding-top: 1rem + 1; // 2rem
  padding-bottom: 1rem - 1; // 0rem
  padding-left: 1rem * 2; // 2rem
  padding-right: (1rem / 2); // 0.5rem
}
```

---

### Custom Functions

- Define your own functions using `@function`

```scss
@function pow($base, $exponent) {
  $result: 1;
  @for $i from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.square {
  width: pow(4, 2) * 1px; // Returns 16px
}
```

---

### Control Directives

- Add logic to your stylesheets

#### @if, @else if, @else

```scss
$theme: "dark";

.color {
  @if $theme == "dark" {
    background-color: #000;
  } @else if $theme == "light" {
    background-color: #fff;
  } @else {
    background-color: gray;
  }
}
```

---

#### @for Loop, @each Loop, @while Loop

```scss
// For Loop
@for $i from 1 through 3 {
  .col-#{$i} {
    width: (100% / 3) * $i;
  }
}
// Each Loop
$icons: icon-home, icon-user, icon-settings;

@each $icon in $icons {
  .#{$icon} {
    background-image: url("/images/#{$icon}.png");
  }
}
// While Loop
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 100px * $i;
  }
  $i: $i - 1;
}
```

---

### Interpolation

- Inject variables into selectors and property names using `#{}`

```scss
$size: "large";

.icon-#{$size} {
  font-size: 2em;
}
```

---

### Comments

- Single-line Comments (not included in the compiled CSS)

```scss
// This comment will not appear in the CSS
```

- Multi-line Comments (included in the compiled CSS)

```scss
/* This comment will appear in the CSS */
```

---

### Maps

- Store related data in key-value pairs using maps

```scss
$breakpoints: (
  small: 576px,
  medium: 768px,
  large: 992px,
);
```

---

### Selector Functions

- Manipulate selectors for advanced styling

```scss
.button {
  background-color: #101010;

  &:hover {
    background-color: lighten(#101010, 10%);
  }
}
```

---

### Built-in Functions

SCSS provides a rich set of built-in functions categorized into several groups. The following tables summarize these functions for quick reference.

#### Color Functions

| **Function**                        | **Description**                                   | **Example**                |
| ----------------------------------- | ------------------------------------------------- | -------------------------- |
| `rgb($red, $green, $blue)`          | Creates a color from red, green, and blue values. | `rgb(255, 0, 0)`           |
| `rgba($red, $green, $blue, $alpha)` | Creates a color with opacity.                     | `rgba(255, 0, 0, 0.5)`     |
| `lighten($color, $amount)`          | Lightens a color by a percentage.                 | `lighten(#000, 50%)`       |
| `darken($color, $amount)`           | Darkens a color by a percentage.                  | `darken(#fff, 50%)`        |
| `saturate($color, $amount)`         | Increases saturation by a percentage.             | `saturate(#7f7f7f, 20%)`   |
| `desaturate($color, $amount)`       | Decreases saturation by a percentage.             | `desaturate(#7f7f7f, 20%)` |
| `adjust-hue($color, $degrees)`      | Rotates hue by specified degrees.                 | `adjust-hue(#f00, 180deg)` |
| `grayscale($color)`                 | Converts color to grayscale.                      | `grayscale(#ff0000)`       |
| `complement($color)`                | Returns the complementary color.                  | `complement(#00f)`         |
| `invert($color)`                    | Inverts the color.                                | `invert(#000)`             |
| `mix($color1, $color2, [$weight])`  | Mixes two colors together.                        | `mix(#f00, #00f, 50%)`     |

---

#### Number Functions

| **Function**          | **Description**                           | **Example**       |
| --------------------- | ----------------------------------------- | ----------------- |
| `percentage($number)` | Converts a unitless number to percentage. | `percentage(0.5)` |
| `round($number)`      | Rounds a number to the nearest whole.     | `round(4.7)`      |
| `ceil($number)`       | Rounds a number up.                       | `ceil(4.1)`       |
| `floor($number)`      | Rounds a number down.                     | `floor(4.9)`      |
| `abs($number)`        | Returns the absolute value of a number.   | `abs(-5)`         |
| `min($numbers…)`      | Returns the smallest number.              | `min(1, 2, 3)`    |
| `max($numbers…)`      | Returns the largest number.               | `max(1, 2, 3)`    |
| `random([$limit])`    | Generates a random number.                | `random(100)`     |

---

#### String Functions

| **Function**                               | **Description**                                         | **Example**                   |
| ------------------------------------------ | ------------------------------------------------------- | ----------------------------- |
| `quote($string)`                           | Adds quotes around a string.                            | `quote(hello)`                |
| `unquote($string)`                         | Removes quotes from a string.                           | `unquote("hello")`            |
| `str-length($string)`                      | Returns the length of a string.                         | `str-length("hello")`         |
| `str-insert($string, $insert, $index)`     | Inserts a substring into a string at a specified index. | `str-insert("hello", "y", 5)` |
| `str-index($string, $substring)`           | Finds the index of a substring.                         | `str-index("hello", "e")`     |
| `str-slice($string, $start-at, [$end-at])` | Extracts a substring from a string.                     | `str-slice("hello", 2, 4)`    |
| `to-upper-case($string)`                   | Converts a string to uppercase.                         | `to-upper-case("hello")`      |
| `to-lower-case($string)`                   | Converts a string to lowercase.                         | `to-lower-case("HELLO")`      |

---

#### List Functions

| **Function**                         | **Description**                         | **Example**                       |
| ------------------------------------ | --------------------------------------- | --------------------------------- |
| `length($list)`                      | Returns the number of items in a list.  | `length(1px solid red)`           |
| `nth($list, $n)`                     | Returns the nth item in a list.         | `nth((apple, banana, cherry), 2)` |
| `join($list1, $list2, [$separator])` | Joins two lists into one.               | `join((1, 2), (3, 4))`            |
| `append($list, $val, [$separator])`  | Appends a value to a list.              | `append((1, 2), 3)`               |
| `zip($lists…)`                       | Merges lists into a list of lists.      | `zip((a, b), (1, 2))`             |
| `index($list, $value)`               | Returns the index of a value in a list. | `index((a, b, c), b)`             |
| `list-separator($list)`              | Returns the separator of a list.        | `list-separator(1 2 3)`           |

---

#### Map Functions

| **Function**              | **Description**                        | **Example**                       |
| ------------------------- | -------------------------------------- | --------------------------------- |
| `map-get($map, $key)`     | Retrieves a value from a map by key.   | `map-get(("a": 1, "b": 2), "a")`  |
| `map-keys($map)`          | Returns a list of all keys in a map.   | `map-keys(("a":1,"b":2))`         |
| `map-values($map)`        | Returns a list of all values in a map. | `map-values(("a":1,"b":2))`       |
| `map-has-key($map, $key)` | Checks if a map contains a key.        | `map-has-key(("a":1,"b":2), "a")` |

---

#### Selector Functions

| **Function**                                           | **Description**                                         | **Example**                                        |
| ------------------------------------------------------ | ------------------------------------------------------- | -------------------------------------------------- |
| `selector-nest($selectors…)`                           | Nests selectors together.                               | `selector-nest('.nav', '.item')`                   |
| `selector-append($selectors…)`                         | Appends selectors together.                             | `selector-append('.btn', ':hover')`                |
| `is-superselector($super, $sub)`                       | Checks if one selector matches all elements of another. | `is-superselector('.nav', '.nav .item')`           |
| `simple-selectors($selector)`                          | Returns a list of simple selectors.                     | `simple-selectors('.nav.item')`                    |
| `selector-replace($selector, $original, $replacement)` | Replaces part of a selector.                            | `selector-replace('.nav .item', '.item', '.link')` |

---

#### Introspection Functions

| **Function**                     | **Description**                        | **Example**            |
| -------------------------------- | -------------------------------------- | ---------------------- |
| `type-of($value)`                | Returns the data type of a value.      | `type-of(100px)`       |
| `unit($number)`                  | Returns the unit of a number.          | `unit(100px)`          |
| `unitless($number)`              | Checks if a number has no unit.        | `unitless(100)`        |
| `comparable($number1, $number2)` | Checks if two numbers can be compared. | `comparable(2in, 5cm)` |

---

#### Miscellaneous Functions

| **Function**                          | **Description**                                 | **Example**           |
| ------------------------------------- | ----------------------------------------------- | --------------------- |
| `if($condition, $if-true, $if-false)` | Returns one of two values based on a condition. | `if($a > $b, $a, $b)` |
| `unique-id()`                         | Generates a unique ID each time it's called.    | `unique-id()`         |

---

### Useful Custom SCSS Functions

- Below are custom SCSS functions that extend beyond the built-in capabilities

#### strip-units

- Removes units from a number, returning a value without unit

```scss
@function strip-units($number) {
  @return $number / ($number * 0 + 1);
}
```

---

#### rem

- Converts pixel values to rem units based on the base font size

```scss
@function rem($pixels, $base-font-size: 16px) {
  @return ($pixels / $base-font-size) * 1rem;
}
```
