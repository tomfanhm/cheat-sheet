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

- Specifies columns to be retrieved.

```sql
SELECT
    COLUMN1,
    COLUMN2,
    ...
FROM
    TABLE_NAME;
```

### FROM

- Specifies the table from which the data will be retrieved.

```sql
SELECT
    column1
FROM
    table_name;
```

### WHERE

- Filters records that fulfill a specified condition.

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

- Sorts the results returned by the query in ascending or descending order.

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

- Used to search for a specified pattern in a column.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name LIKE 'A%';
```

### BETWEEN

- Selects values within a given inclusive range.

```sql
SELECT
    *
FROM
    table_name
WHERE
    column_name BETWEEN start_value AND end_value;
```

### Join

- Combines rows from two or more tables based on a related column.

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

- Performs a calculation on a set of values and returns a single value.

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

- Joining a table to itself.

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

- Returns zero or more rows.

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

- Tests for the existence of rows in a sub-query.

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

- Improves the speed of data retrieval operations on a database table.

```sql
CREATE INDEX idx_column_name ON table_name (column_name);
```

### Remove an Index

```sql
DROP INDEX idx_column_name;
```

### Constraints

- NOT NULL, Ensures that a column cannot store NULL values.

```sql
column_name datatype NOT NULL;
```

- UNIQUE, Ensures all values in a column are different.

```sql
column_name datatype UNIQUE;
```

- PRIMARY KEY, Uniquely identifies each row in a table.

```sql
column_name datatype PRIMARY KEY;
```

- FOREIGN KEY, Ensures a key correctly references a key in another table.

```sql
FOREIGN KEY (column_name) REFERENCES other_table_name (column_name_in_other_table);
```

- CHECK, Ensures the values in a column satisfy a specific condition.

```sql
column_name datatype CHECK (condition);
```

### Column Constraint vs. Table Constraint

- Column Constraint Level, Applied directly beside the column definition.

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

- Adding a Constraint.

```sql
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);
```

- Dropping a Constraint.

```sql
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

### The INSERT Statement

- Inserts new data into a table.

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

## PL/SQL

### Block Structure for Anonymous PL/SQL Blocks

- Anonymous PL/SQL blocks are the basic building units in PL/SQL that do not require a name and execute immediately.

```plsql
DECLARE
 -- Optional: Declarations of variables, constants, and data types
    variable_name DATATYPE [:= INITIAL_VALUE];
BEGIN
 -- Required: Code to execute
 -- SQL statements, control structures, and PL/SQL procedures
    NULL; -- Example statement (does nothing)
EXCEPTION
 -- Optional: Exception handling part
    WHEN EXCEPTION_NAME THEN
 -- Code to handle exceptions
        NULL; -- Example statement
END;
```

### Composite Variables

- A RECORD is a composite data type that groups together multiple fields, potentially of different data types, into a single variable. It's similar to a row in a table or a structure in other programming languages.

```plsql
DECLARE
    TYPE employee_record IS RECORD (
        emp_id NUMBER,
        emp_name VARCHAR2(100),
        emp_salary NUMBER
    );
    emp_info employee_record;
BEGIN
    emp_info.emp_id := 101;
    emp_info.emp_name := 'John Doe';
    emp_info.emp_salary := 60000;
    dbms_output.put_line('ID: '
                         || emp_info.emp_id);
    dbms_output.put_line('Name: '
                         || emp_info.emp_name);
    dbms_output.put_line('Salary: '
                         || emp_info.emp_salary);
END;
```

- In PL/SQL, a TABLE (often referred to as an associative array, index-by table, or array) is a set of key-value pairs. It is useful for temporarily storing data and processing it in bulk.

```plsql
DECLARE
    TYPE num_table IS
        TABLE OF NUMBER INDEX BY BINARY_INTEGER;
    my_table num_table;
BEGIN
    my_table(1) := 100;
    my_table(2) := 200;
 -- Access elements
    dbms_output.put_line('First element: '
                         || my_table(1));
    dbms_output.put_line('Second element: '
                         || my_table(2));
END;
```

- A VARRAY (Variable-size array) is used to store an ordered set of elements, all of the same type. Unlike tables, VARRAYs have a fixed size and are dense, meaning each element has a value or is NULL.

```plsql
DECLARE
    TYPE name_array IS
        VARRAY(5) OF VARCHAR2(100);
    names name_array;
BEGIN
    names := name_array('Alice', 'Bob', 'Charlie', 'David', 'Eve');
 -- Access the first name
    dbms_output.put_line('First name: '
                         || names(1));
END;
```

### Reference Variables

- The %TYPE attribute is used to declare a variable of the same data type as that of a database column or another variable.

```plsql
DECLARE
    emp_id   employees.employee_id%type; -- Assume employee_id is a NUMBER
    emp_name employees.first_name%type;
BEGIN
    SELECT
        employee_id,
        first_name INTO emp_id,
        emp_name
    FROM
        employees
    WHERE
        employee_id = 101;
    dbms_output.put_line('Employee ID: '
                         || emp_id);
    dbms_output.put_line('Employee Name: '
                         || emp_name);
END;
```

- The %ROWTYPE attribute is used to declare a record variable that represents an entire row of a table or a view.

```plsql
DECLARE
    emp_record employees%rowtype; -- Represents a row in the 'employees' table
BEGIN
    SELECT
        * INTO emp_record
    FROM
        employees
    WHERE
        employee_id = 101;
    dbms_output.put_line('Employee: '
                         || emp_record.first_name
                         || ' '
                         || emp_record.last_name);
END;
```

### Assignment Statements

- Assignment statements are used to assign values to variables in PL/SQL.

```plsql
DECLARE
    x NUMBER;
BEGIN
    x := 10; -- Assigning value to variable x
END;
```

### Manipulating Character Strings

- PL/SQL provides several functions for manipulating character strings.

```plsql
DECLARE
    str VARCHAR2(100) := 'Hello World';
BEGIN
    dbms_output.put_line(lower(str)); -- Outputs: hello world
    dbms_output.put_line(upper(str)); -- Outputs: HELLO WORLD
    dbms_output.put_line(substr(str, 1, 5)); -- Outputs: Hello
    dbms_output.put_line(instr(str, 'W')); -- Outputs: 7
    dbms_output.put_line(length(str)); -- Outputs: 11
    dbms_output.put_line(replace(str, 'World', 'PL/SQL')); -- Outputs: Hello PL/SQL
END;
```

### SELECT Statements in PL/SQL

- To execute SQL queries within PL/SQL and store the results in PL/SQL variables.

```plsql
DECLARE
    emp_salary NUMBER;
BEGIN
    SELECT
        salary INTO emp_salary
    FROM
        employees
    WHERE
        employee_id = 101;
    dbms_output.put_line('Salary: '
                         || emp_salary);
EXCEPTION
    WHEN no_data_found THEN
        dbms_output.put_line('No employee found.');
    WHEN too_many_rows THEN
        dbms_output.put_line('More than one employee returned.');
END;
```

### IF/ELSIF/ELSE

- Conditional control in PL/SQL allows executing different code blocks based on conditions.

```plsql
DECLARE
    x NUMBER := 10;
BEGIN
    IF x = 10 THEN
        dbms_output.put_line('x is 10');
    ELSIF x = 20 THEN
        dbms_output.put_line('x is 20');
    ELSE
        dbms_output.put_line('x is neither 10 nor 20');
    END IF;
END;
```

### Loop Structures

- Basic LOOP.

```plsql
LOOP
    -- Statements
    EXIT; -- Condition to exit the loop
END LOOP;
```

- WHILE LOOP.

```plsql
WHILE condition LOOP
    -- Statements
END LOOP;
```

- FOR LOOP.

```plsql
FOR i IN 1..10 LOOP
    -- Statements
END LOOP;
```

- CURSOR FOR LOOP.

```plsql
FOR rec IN (SELECT * FROM employees) LOOP
    DBMS_OUTPUT.PUT_LINE(rec.emp_name);
END LOOP;
```

### Explicit Cursors in PL/SQL

Explicit cursors are named cursors that are declared and controlled programmatically to fetch each row and process it individually.

1. Declaration of Explicit Cursors.
2. Opening a Cursor.
3. Fetching Data from a Cursor
4. Closing a Cursor

```plsql
DECLARE
 -- Declare the cursor with a SELECT statement to retrieve employee data
    CURSOR emp_cursor IS
    SELECT
        employee_id,
        first_name,
        last_name,
        salary
    FROM
        employees;
 -- Variables to hold data fetched from the cursor
    v_emp_id                employees.employee_id%type;
    v_first_name            employees.first_name%type;
    v_last_name             employees.last_name%type;
    v_salary                employees.salary%type;
 -- Additional variable to define high salary threshold
    v_high_salary_threshold NUMBER := 10000;
BEGIN
 -- Open the cursor
    OPEN emp_cursor;
 -- Fetch each row into the variables
    LOOP
        FETCH emp_cursor INTO v_emp_id, v_first_name, v_last_name, v_salary;
 -- Exit the loop if no more rows to fetch
        EXIT WHEN emp_cursor%notfound;
 -- Display the employee data
        IF v_salary > v_high_salary_threshold THEN
            dbms_output.put_line('High earner: '
                                 || v_first_name
                                 || ' '
                                 || v_last_name
                                 || ' ('
                                 || v_emp_id
                                 || ') - $'
                                 || v_salary);
        ELSE
            dbms_output.put_line('Employee: '
                                 || v_first_name
                                 || ' '
                                 || v_last_name
                                 || ' ('
                                 || v_emp_id
                                 || ') - $'
                                 || v_salary);
        END IF;
    END LOOP;
 -- Close the cursor
    CLOSE emp_cursor;
EXCEPTION
    WHEN OTHERS THEN
 -- Error handling: close cursor if open and re-raise the error
        IF emp_cursor%isopen THEN
            CLOSE emp_cursor;
        END IF;

        raise;
END;
```

### Handling Exceptions

Exceptions are handled inside the EXCEPTION block of a PL/SQL block, which comes after the executable commands and before the END; statement.

- Predefined exceptions are automatically provided by Oracle and handle common Oracle errors.

1. NO_DATA_FOUND: Raised when a SELECT INTO statement returns no rows.
2. TOO_MANY_ROWS: Raised when a SELECT INTO statement returns more than one row.
3. VALUE_ERROR: Raised when an operation, conversion, or assignment results in a data type mismatch.

```plsql
BEGIN
    SELECT
        employee_id INTO v_emp_id
    FROM
        employees
    WHERE
        employee_name = 'John Doe';
EXCEPTION
    WHEN no_data_found THEN
        dbms_output.put_line('No employee found with the name John Doe.');
    WHEN too_many_rows THEN
        dbms_output.put_line('More than one employee found with the name John Doe.');
END;
```

- Non-predefined exceptions cover errors not predefined by Oracle.

```plsql
DECLARE
    v_invalid_number EXCEPTION;
    PRAGMA EXCEPTION_INIT(V_INVALID_NUMBER, -1722); -- Oracle error code for invalid number conversion
BEGIN
 -- Some operation that might cause an invalid number error
    DECLARE V_NUMBER NUMBER := TO_NUMBER('ABC'); -- This will fail
EXCEPTION
    WHEN V_INVALID_NUMBER THEN
        DBMS_OUTPUT.PUT_LINE('Conversion error occurred: '
                             || SQLERRM);
END;
```

- User-defined exceptions are explicitly defined by the programmer and can be raised using the RAISE statement within a PL/SQL block.

```plsql
DECLARE
    e_custom_exception exception;
BEGIN
 -- A conditional check that leads to an error
    IF 1 = 1 THEN -- Simplified condition for illustration
        RAISE e_custom_exception;
    END IF;
EXCEPTION
    WHEN e_custom_exception THEN
        dbms_output.put_line('A custom error has occurred.');
END;
```

## Procedure

A procedure in PL/SQL is a subprogram that performs a specific action. It can take parameters, perform operations, and optionally return values via OUT or IN OUT parameters.

```plsql
CREATE OR REPLACE PROCEDURE PROCEDURE_NAME (
    PARAMETERS
) AS
BEGIN
 -- procedure body
END PROCEDURE_NAME;
```

### IN Parameters

- IN parameters are used to pass values to a procedure. They are read-only within the procedure, meaning you cannot modify their values.

```plsql
CREATE OR REPLACE PROCEDURE print_employee_info (
    p_employee_id IN employees.employee_id%type
) AS
    v_name employees.name%type;
BEGIN
    SELECT
        name INTO v_name
    FROM
        employees
    WHERE
        employee_id = p_employee_id;
    dbms_output.put_line('Employee Name: '
                         || v_name);
END;
```

### OUT Parameters

- OUT parameters are used to return values from a procedure to the calling environment. They are write-only within the procedure, meaning you cannot read their initial values (unless they are explicitly assigned a value before being used).

```plsql
CREATE OR REPLACE PROCEDURE get_employee_name (
    p_employee_id IN employees.employee_id%type,
    p_name OUT employees.name%type
) AS
BEGIN
    SELECT
        name INTO p_name
    FROM
        employees
    WHERE
        employee_id = p_employee_id;
END get_employee_name;
```

### IN OUT Parameters

- IN OUT parameters can both receive values from the calling environment and send values back. They are both readable and writable within the procedure.

```plsql
CREATE OR REPLACE PROCEDURE update_salary (
    p_employee_id IN employees.employee_id%type,
    p_salary IN OUT employees.salary%type
) AS
BEGIN
    UPDATE employees
    SET
        salary = p_salary
    WHERE
        employee_id = p_employee_id;
    SELECT
        salary INTO p_salary
    FROM
        employees
    WHERE
        employee_id = p_employee_id; -- Get updated salary
END update_salary;
```

### Methods for Passing Parameters

- Position: Values are associated with formal parameters in the order they are defined.
- Name: Values are associated with formal parameters by explicitly stating the parameter name. This is useful for clarity and when skipping optional parameters.

```plsql
BEGIN
 -- Passing by position
    update_salary(101, 50000);
 -- Passing by name
    update_salary(
        p_employee_id => 101,
        p_salary => 50000
    );
END;
```

### Removing Procedures

- To remove a procedure from the database, use the DROP PROCEDURE statement.

```plsql
DROP PROCEDURE calculate_bonus;
```

## Function

A function in PL/SQL is a type of subprogram that returns a single value.

```plsql
CREATE OR REPLACE FUNCTION function_name (
   parameters
) RETURN return_type IS
-- variable declarations
BEGIN
-- function body
   RETURN value;
END function_name;

CREATE OR REPLACE FUNCTION calculate_annual_salary(
    p_monthly_salary IN NUMBER
) RETURN NUMBER IS
    v_annual_salary NUMBER;
BEGIN
    v_annual_salary := p_monthly_salary * 12;
    RETURN v_annual_salary;
END calculate_annual_salary;
```

### Executing Functions

- Functions can be executed within PL/SQL blocks, or called from SQL statements.

```plsql
DECLARE
    v_monthly_salary NUMBER := 5000;
    v_annual_salary  NUMBER;
BEGIN
    v_annual_salary := calculate_annual_salary(v_monthly_salary);
    dbms_output.put_line('Annual Salary: '
                         || v_annual_salary);
END;
```

### Removing Functions

- To remove a function from the database, use the DROP FUNCTION command.

```plsql
DROP FUNCTION calculate_annual_salary;
```

## Packages

Packages in Oracle SQL allow you to group together related procedures, functions, variables, and other package elements, facilitating organized and reusable code. Packages consist of two parts: the specification and the body.

### Creating the Package Specification

- The package specification acts as the interface to the package. It defines what is visible to the application.

```plsql
CREATE OR REPLACE PACKAGE package_name IS
 -- Function/Procedure signatures
    FUNCTION function_name(
        parameters
    ) return return_type;

    PROCEDURE procedure_name(
        parameters
    );
END package_name;
```

### Creating the Package Body

- The package body provides implementations for the SQL functions and procedures declared in the specification.

```plsql
CREATE OR REPLACE PACKAGE BODY PACKAGE_NAME IS

    FUNCTION FUNCTION_NAME(
        PARAMETERS
    ) RETURN RETURN_TYPE IS
    BEGIN
 -- Implementation code
        RETURN RESULT;
    END FUNCTION_NAME;

    PROCEDURE PROCEDURE_NAME(
        PARAMETERS
    ) IS
    BEGIN
 -- Implementation code
    END PROCEDURE_NAME;
END PACKAGE_NAME;
```

### Invoking Package Constructs

- Once defined, you can invoke the procedures and functions in the package.

```plsql
BEGIN
    package_name.procedure_name(arguments);
    variable := package_name.function_name(arguments);
END;
```

### Removing Packages

- To remove a package, use the DROP statement.

```plsql
DROP PACKAGE package_name;
```

## Triggers

Triggers are procedures that are automatically executed in response to certain events on a particular table or view in a database.

```plsql
CREATE OR REPLACE TRIGGER TRIGGER_NAME BEFORE
    INSERT ON TABLE_NAME FOR EACH STATEMENT
BEGIN
 -- Trigger logic
END;
```

### Creating DML Statement Triggers

- Statement triggers execute once for each transaction. They do not depend on the number of rows being inserted, updated, or deleted.

```plsql
CREATE OR REPLACE TRIGGER TRIGGER_NAME BEFORE
    INSERT ON TABLE_NAME FOR EACH STATEMENT
BEGIN
 -- Trigger logic
END;
```

### Creating a DML Row Trigger

- Row triggers execute once for each row that is inserted, updated, or deleted.

```plsql
CREATE OR REPLACE TRIGGER TRIGGER_NAME AFTER
    UPDATE ON TABLE_NAME FOR EACH ROW
BEGIN
    IF :NEW.COLUMN_NAME <> :OLD.COLUMN_NAME THEN
 -- Trigger logic
    END IF;
END;
```

### Using Conditional Predicates

- Oracle provides predicates like INSERTING, UPDATING, and DELETING to specify the trigger action based on the type of DML operation.

```plsql
CREATE OR REPLACE TRIGGER TRIGGER_NAME BEFORE
    UPDATE ON TABLE_NAME FOR EACH ROW WHEN (NEW.COLUMN_NAME IS NOT NULL)
BEGIN
    IF UPDATING THEN
 -- Logic specific to update operation
    END IF;
END;
```

### DROP TRIGGER

- To remove a trigger, use the DROP TRIGGER statement.

```plsql
DROP TRIGGER trigger_name;
```
