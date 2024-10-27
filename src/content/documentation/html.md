---
id: f637466c
layout: ../../layouts/MarkdownContainer.astro
title: HTML
description: HTML, which stands for Hypertext Markup Language, is a standard markup language used for creating web pages. It provides the structure of a webpage, allowing for the inclusion of text, images, and other types of media. HTML elements, represented by tags, denote different parts of the content and instruct the web browser on how to display them.
imageUrl: ../../assets/html.png
date: Sep 10, 2023
datetime: "2023-09-10"
category: Documentation
disable: false
---

### Meta Tags

- Meta tags provide metadata about your webpage that helps search engines understand your content better

```html
<meta charset="UTF-8" />
<meta name="keywords" content="Your keywords" />
<meta name="description" content="Your description" />
<meta name="robots" content="index, follow" />
<meta name="author" content="Your name" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="Thumbnail Image Here" />
<meta name="twitter:title" content="Title Here" />
<meta name="twitter:description" content="Description Here" />
<meta name="twitter:image" content="Thumbnail Image Here" />
<meta
  name="google-site-verification"
  content="Your google search console token"
/>
```

---

### Text Formatting

- HTML tags for formatting text

```html
<b>Bold text</b>
<i>Italicized text</i>
<u>Underlined text</u>
<strong>Strong emphasis</strong>
<em>Emphasized text</em>
<s>Strikethrough text</s>
<sub>Subscript text</sub>
<sup>Superscript text</sup>
```

---

### Lists

- Unordered, Ordered and Description Lists

```html
<ul>
  <li>Unordered list item</li>
  <li>Another unordered list item</li>
</ul>

<ol>
  <li>Ordered list item</li>
  <li>Another ordered list item</li>
</ol>

<dl>
  <dt>Description Term</dt>
  <dd>Description for the term</dd>
</dl>
```

---

### Tables

- HTML tables for displaying tabular data

```html
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1 Data 1</td>
    <td>Row 1 Data 2</td>
  </tr>
  <tr>
    <td>Row 2 Data 1</td>
    <td>Row 2 Data 2</td>
  </tr>
</table>
```

---

### Picture

- The Picture element for responsive image loading

```html
<picture>
  <source media="(min-width: 650px)" srcset="pink_flowers.jpg" />
  <source media="(min-width: 465px)" srcset="white_flower.jpg" />
  <img src="orange_flowers.jpg" alt="Flowers" style="width:auto;" />
</picture>
```

---

### Form

- Form elements for user inputs

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" required></textarea>

  <button type="submit">Submit</button>
</form>
```

---

### Input

- The input element is versatile, used for various types of user input such as text, numbers, emails, dates, etc.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username" required />

<label for="email">Email:</label>
<input type="email" id="email" name="email" required />

<label for="age">Age:</label>
<input type="number" id="age" name="age" min="1" max="100" />
```

#### Summary Table for Types

| Type       | Description                              | Example                     |
| ---------- | ---------------------------------------- | --------------------------- |
| `text`     | Single-line text input                   | `<input type="text" />`     |
| `password` | Password input (masked text)             | `<input type="password" />` |
| `email`    | Email input with basic validation        | `<input type="email" />`    |
| `number`   | Numeric input                            | `<input type="number" />`   |
| `date`     | Date picker                              | `<input type="date" />`     |
| `file`     | File upload                              | `<input type="file" />`     |
| `checkbox` | Checkbox (multiple selections allowed)   | `<input type="checkbox" />` |
| `radio`    | Radio button (single selection in group) | `<input type="radio" />`    |

---

### Select

- The select element is used to create a dropdown list, allowing users to choose one or more options from a predefined set.

```html
<label for="colors">Choose a color:</label>
<select id="colors" name="colors" multiple>
  <option value="red">Red</option>
  <option value="green">Green</option>
  <option value="blue">Blue</option>
  <option value="yellow">Yellow</option>
</select
```

---

### Semantic Elements

- HTML5 semantic elements that provide meaning to the structure of web content

```html
<body>
  <header>
    <nav>
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
      </ul>
    </nav>
    <h1>Page Heading</h1>
  </header>
  <main>
    <article>
      <section id="section1">
        <h2>Section 1</h2>
        <p>This is <mark>important</mark> content for section 1.</p>
      </section>
      <section id="section2">
        <h2>Section 2</h2>
        <details>
          <summary>More info about Section 2</summary>
          <p>Additional details about section 2.</p>
        </details>
      </section>
    </article>
    <aside>
      <h3>Additional Information</h3>
      <p>
        This is supplementary information not directly linked to the main
        content.
      </p>
    </aside>
  </main>
  <footer>
    <p>Published on: <time datetime="2023-09-10">September 10, 2023</time></p>
  </footer>
</body>
```
