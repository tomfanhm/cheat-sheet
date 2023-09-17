---
id: 2f7e2194
layout: ../../layouts/MarkdownContainer.astro
title: C++
description: This concise and practical C++ programming cheat sheet provides an essential reference for both beginners and experienced programmers. It covers fundamental concepts, syntax, and code snippets, allowing you to quickly grasp and apply key concepts in C++.
imageUrl: ../../assets/cpp.png
date: Sep 17, 2023
datetime: "2023-09-17"
category: Documentation
disable: false
---

### Standard Libraries

- Include necessary libraries at the top of your code

```cpp
#include <iostream>
#include <vector>
#include <string>
```

### Standard Input/Output

- Input from the user

```cpp
cin >> variable;
```

- Output to the console

```cpp
cout << "Hello, World!";
```

### Basic Data Types

| Data Type | Description                     | Example                 |
| --------- | ------------------------------- | ----------------------- |
| `int`     | Integer                         | `int age = 25;`         |
| `float`   | Single-precision floating-point | `float pi = 3.14;`      |
| `double`  | Double-precision floating-point | `double price = 99.99;` |
| `char`    | Character                       | `char grade = 'A';`     |
| `bool`    | Boolean                         | `bool isTrue = true;`   |

### Control Flow

- `if` statement

```cpp
if (condition) {
    // Code to execute if condition is true
}
```

- `else if` and `else` clauses

```cpp
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if neither condition1 nor condition2 is true
}
```

- `for` loop

```cpp
for (int i = 0; i < 5; ++i) {
    // Code to repeat 5 times
}
```

- `while` loop

```cpp
while (condition) {
    // Code to execute while condition is true
}
```

### Functions

```cpp
// Function declaration
return_type function_name(parameter_type parameter_name) {
    // Function body
    // Use return statement if return_type is not void
}

// Function call
result = function_name(argument);
```

### Arrays

- Declaring and initializing an array

```cpp
int numbers[5] = {1, 2, 3, 4, 5};
```

- Accessing array elements

```cpp
int element = numbers[index];
```

### Pointers

- Declaring a Pointer and Assigning It to a Variable's Address

```cpp
int number = 42;
int* ptr = &number;

```

- Dereferencing a Pointer to Access the Value It Points To

```cpp
int value = *ptr;

```

### Classes and Objects

- Class definition:

```cpp
class MyClass {
public:
    // Member variables
    int myVar;

    // Member function
    void myFunction() {
        // Code here
    }
};
```

- Creating an object

```cpp
MyClass obj;
```

- Accessing class members

```cpp
obj.myVar = 42;
obj.myFunction();
```
