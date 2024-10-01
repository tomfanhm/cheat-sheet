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

- Essential for using various functionalities in C++

```cpp
#include <iostream> // For Input/Output
#include <vector> // For Dynamic Arrays
#include <string> // For String Operations
#include <map> // For Map Collections
#include <cmath> // For Mathematical Functions
#include <fstream> // For File I/O
#include <cstdlib> // For General Purpose Functions, including rand() and srand()
#include <ctime> // For Time-related Functions
```

---

### Standard Input/Output

- Input from the user

```cpp
cin >> variable; // Input
```

- Output to the console

```cpp
cout << "Hello, World!"; // Output
```

---

### Basic Data Types

- Fundamental types for storing data

| Data Type | Description                     | Example                 |
| --------- | ------------------------------- | ----------------------- |
| `int`     | Integer                         | `int age = 25;`         |
| `float`   | Single-precision floating-point | `float pi = 3.14;`      |
| `double`  | Double-precision floating-point | `double price = 99.99;` |
| `char`    | Character                       | `char grade = 'A';`     |
| `bool`    | Boolean                         | `bool isTrue = true;`   |

---

### Control Flow

- `if` statement

```cpp
if (condition) { /* true block */ }
```

---

- `else if` and `else` clauses

```cpp
if (condition1) {
    // Code block 1
} else if (condition2) {
    // Code block 2
} else {
    // Code block 3
}
```

---

- `for` loop

```cpp
for (int i = 0; i < 10; ++i) {
    // Code to execute
}
```

---

- `while` loop

```cpp
while (condition) {
    // Code to execute
}
```

- `do-while` loop

```cpp
do {
    // Code to execute
} while (condition);
```

- Range-Based For Loop

```cpp
for (const auto& item : container) {
    // Use item
}
```

---

### Functions

- Creating reusable blocks of code.

```cpp
// Declaration
return_type function_name(parameter_list);

// Definition
return_type function_name(parameter_list) {
    // Function body
    return value;
}
```

---

### Function Overloading

- Functions can have the same name but different parameters

```cpp
int multiply(int a, int b);
double multiply(double a, double b);

```

---

### Arrays

- Declaring and initializing an array

```cpp
int numbers[5] = {1, 2, 3, 4, 5};

```

- Accessing array elements

```cpp
int element = numbers[index];
```

---

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

---

### Classes and Objects

- Class is a blueprint for creating objects

```cpp
class ClassName {
public:
    // Constructors
    ClassName();

    // Member functions
    void method();

private:
    // Member variables
    int attribute;
};
```

---

### Inheritance

- Inheritance allows a class to inherit attributes and methods from another class

```cpp
class Base {
public:
    void display();
};

class Derived : public Base {
    // Inherits display()
};
```

---

### Exception Handling

- Exceptions handle runtime errors gracefully

```cpp
try {
    // Code that may throw an exception
} catch (exception_type& e) {
    // Exception handling code
}
```

---

### C-style Strings and Functions

- Handling C-style strings

```cpp
#include <cstring>
#include <iostream>
using namespace std;

// Length of a CString
int lengthOfCString(const char* str) {
    return strlen(str);
}

// Copy CString
void copyCString(char* destination, const char* source) {
    strcpy(destination, source);
}

// Concatenate CStrings
void concatenateCStrings(char* destination, const char* source) {
    strcat(destination, source);
}

// Compare CStrings
int compareCStrings(const char* str1, const char* str2) {
    return strcmp(str1, str2); // Returns 0 if equal
}

// Find Substring in CString
const char* findSubstring(const char* str, const char* substr) {
    return strstr(str, substr);
}

// Convert CString to Integer
int cstringToInt(const char* str) {
    return atoi(str);
}

// Convert CString to Double
double cstringToDouble(const char* str) {
    return atof(str);
}

```

---

### Random Number Generation

- Utilize rand() and srand() for generating random numbers

```cpp
#include <cstdlib> // Include for rand() and srand()
#include <ctime> // Include for time()

void initializeRandomSeed() {
  srand(static_cast < unsigned int > (time(0))); // Initialize random seed
}

int getRandomNumber(int min, int max) {
  // Returns a random number between min and max (inclusive)
  return rand() % (max - min + 1) + min;
}

// Example Usage
initializeRandomSeed();
int randomNum = getRandomNumber(1, 100); // Random number between 1 and 100

```

---

### Sorting Methods

- Quick and easy sorting with C++ Standard Library.

```cpp
#include <algorithm>
#include <vector>
using namespace std;

void standardSort(vector < int > & vec) {
  sort(vec.begin(), vec.end());
}

```

---

- Bubble Sort

```cpp
void bubbleSort(vector < int > & vec) {
  for (size_t i = 0; i < vec.size() - 1; ++i) {
    for (size_t j = 0; j < vec.size() - i - 1; ++j) {
      if (vec[j] > vec[j + 1]) {
        swap(vec[j], vec[j + 1]);
      }
    }
  }
}
```
