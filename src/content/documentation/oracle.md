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

## Basic SQL Statements

### SELECT

- Specifies columns to be retrieved

```sql
SELECT
    COLUMN1,
    COLUMN2,
    ...
FROM
    TABLE_NAME;
```

### FROM

- Specifies the table from which the data will be retrieved

```sql
SELECT
    column1
FROM
    table_name;
```

### WHERE

- Filters records that fulfill a specified condition

```sql
SELECT
    column1,
    column2
FROM
    table_name
WHERE
    condition;
```

### GROUP BY

- Groups rows that have the same values in specified columns into summary rows.

```sql
SELECT
    column1,
    SUM(column2)
FROM
    table_name
GROUP BY
    column1;
```

### HAVING

- Filters groups made by GROUP BY based on a condition.

```sql
SELECT
    column1,
    COUNT(column2)
FROM
    table_name
GROUP BY
    column1
HAVING
    COUNT(column2) > 1;
```

### ORDER BY

- Sorts the results returned by the query in ascending or descending order

```sql
SELECT
    column1
FROM
    table_name
ORDER BY
    column1 ASC,
    column2 DESC;
```

### LIKE

- Used to search for a specified pattern in a column

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name LIKE 'A%';
```

### BETWEEN

- Selects values within a given inclusive range

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name BETWEEN start_value AND end_value;
```

### Join

- Combines rows from two or more tables based on a related column

```sql
SELECT
    a.column1,
    b.column2
FROM
    table_a a
    JOIN table_b b
    ON a.common_column = b.common_column;
```

### Aggregate Functions

- Performs a calculation on a set of values and returns a single value

```sql
SELECT
    COUNT(column_name),
    MAX(column_name),
    MIN(column_name),
    AVG(column_name),
    SUM(column_name)
FROM
    table_name;
```

### Self-Join

- Joining a table to itself

```sql
SELECT
    a.column_name,
    b.column_name
FROM
    table_name a,
    table_name b
WHERE
    a.common_column = b.common_column;
```

### Single-Row Sub-queries

- Returns zero or one row.

```sql
SELECT
    column1
FROM
    table_name
WHERE
    column2 = (
        SELECT
            MAX(column2)
        FROM
            table_name
    );
```

### Multiple-Row Sub-queries

- Returns zero or more rows

```sql
SELECT
    column1
FROM
    table_name
WHERE
    column2 IN (
        SELECT
            column2
        FROM
            another_table
    );
```

### IN, NOT IN, ALL, ANY

- The IN operator is used to filter the results based on a set of values in a list or returned by a subquery. This operator helps in checking if a value of a column matches any value within a list or a set returned by a subquery.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name IN (
        SELECT
            column_name
        FROM
            another_table
    );
```

- The NOT IN operator is used to ensure that the column's value does not match any value in a list or returned by a subquery. It effectively filters out the rows that match the criteria.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name NOT IN (
        SELECT
            column_name
        FROM
            another_table
    );
```

- The ALL operator is used in conditional operations, typically with comparisons like >, <, >=, <=, =. It returns true if all comparisons between a single column's value and each value returned by the subquery are true.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name >= ALL (
        SELECT
            column_name
        FROM
            another_table
    );
```

- The ANY operator is used in a similar context as ALL but returns true if any single comparison between a column's value and the values returned by the subquery is true.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name >= ANY (
        SELECT
            column_name
        FROM
            another_table
    );
```

### EXISTS

- Tests for the existence of rows in a sub-query

```sql
SELECT
    *
FROM
    table_name
WHERE
    EXISTS (
        SELECT
            1
        FROM
            another_table
        WHERE
            condition
    );
```

## SQL Database Management and Data Manipulation

### Create an Index

- Improves the speed of data retrieval operations on a database table

```sql
CREATE INDEX idx_column_name ON table_name (column_name);
```

### Remove an Index

```sql
DROP INDEX idx_column_name;
```

### Constraints

- NOT NULL, Ensures that a column cannot store NULL values

```sql
column_name datatype NOT NULL;
```

- UNIQUE, Ensures all values in a column are different

```sql
column_name datatype UNIQUE;
```

- PRIMARY KEY, Uniquely identifies each row in a table

```sql
column_name datatype PRIMARY KEY;
```

- FOREIGN KEY, Ensures a key correctly references a key in another table

```sql
FOREIGN KEY (column_name) REFERENCES other_table_name (column_name_in_other_table);
```

- CHECK, Ensures the values in a column satisfy a specific condition

```sql
column_name datatype CHECK (condition);
```

### Column Constraint vs. Table Constraint

- Column Constraint Level, Applied directly beside the column definition

```sql
CREATE TABLE table_name (
    column1 datatype PRIMARY KEY,
    column2 datatype NOT NULL
);
```

- Table Constraint Level, Declared separately within the table definition, useful for composite keys.

```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    CONSTRAINT pk_name PRIMARY KEY (column1, column2),
    CONSTRAINT fk_name FOREIGN KEY (column1) REFERENCES another_table(column)
);
```

### Adding and Dropping Constraints

- Adding a Constraint

```sql
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);
```

- Dropping a Constraint

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### The INSERT Statement

- Inserts new data into a table

```sql
INSERT INTO table_name (
    column1,
    column2
) VALUES (
    value1,
    value2
);
```

### The UPDATE Statement

- Modifies existing data in a table.

```sql
UPDATE table_name
SET
    column1 = value1
WHERE
    condition;
```

### The DELETE Statement

- Deletes existing data from a table.

```sql
DELETE FROM table_name
WHERE
    condition;
```
