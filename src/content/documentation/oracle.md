---
id: 86f33293
layout: ../../layouts/MarkdownContainer.astro
title: Oracle SQL
description: Oracle SQL is a powerful relational database management system (RDBMS) language used for managing data within Oracle databases. It enables data manipulation, querying, schema creation, and control over data access with its robust, feature-rich SQL dialect, catering to both simple and complex data operations.
imageUrl: ../../assets/oracle.png
date: Mar 02, 2024
datetime: "2024-03-02"
category: Documentation
disable: false
---

## Basic Data Querying

### 1. Basic Data Querying

- **SELECT**: Retrieve data from one or more tables.
  ```sql
  SELECT column1, column2 FROM table_name;
  ```
- **WHERE**: Specify conditions to filter records.
  ```sql
  SELECT column1 FROM table_name WHERE condition;
  ```
- **JOIN** (INNER, LEFT, RIGHT, FULL OUTER): Combine rows from two or more tables.
  ```sql
  SELECT columns FROM table1 INNER JOIN table2 ON table1.column = table2.column;
  ```
- **ORDER BY**: Sort the result set.
  ```sql
  SELECT column1 FROM table_name ORDER BY column1 ASC|DESC;
  ```
- **GROUP BY**: Group rows sharing a property so that an aggregate function can be applied to each group.
  ```sql
  SELECT column, COUNT(*) FROM table_name GROUP BY column;
  ```
