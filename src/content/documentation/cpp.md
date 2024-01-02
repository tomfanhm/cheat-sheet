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

### Standard Input/Output

- Input from the user

```cpp
cin >> variable; // Input
```

- Output to the console

```cpp
cout << "Hello, World!"; // Output
```

### Basic Data Types

- Fundamental types for storing data

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
if (condition) { /* true block */ }
```

- `else if` and `else` clauses

```cpp
if (condition) { /* true block */ }
else if (condition) { /* alternative block */ }
else { /* false block */ }
```

- `for` loop

```cpp
for (int i = 0; i < limit; ++i) { /* repeated block */ }
```

- `while` loop

```cpp
while (condition) { /* looping block */ }
```

### Functions

- Creating reusable blocks of code.

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

- Class is a blueprint for creating objects

```cpp
class MyClass {
public: // Access specifier
    // Member variables (properties)
    int myVar;

    // Default constructor
    MyClass() {
        myVar = 0;
    }

    // Parameterized constructor
    MyClass(int val) {
        myVar = val;
    }

    // Member functions (methods)
    void setMyVar(int val) {
        myVar = val;
    }

    int getMyVar() {
        return myVar;
    }
};

```

- Creating an object

```cpp
MyClass obj1; // Using default constructor, myVar will be 0
MyClass obj2(10); // Using parameterized constructor, myVar will be 10
```

- Accessing class members

```cpp
obj1.setMyVar(42); // Sets obj1's myVar to 42
int x = obj2.getMyVar(); // Gets the value of obj2's myVar
```

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

- Insertion Sort

```cpp
void insertionSort(vector < int > & vec) {
  int key, j;
  for (size_t i = 1; i < vec.size(); i++) {
    key = vec[i];
    j = i - 1;
    while (j >= 0 && vec[j] > key) {
      vec[j + 1] = vec[j];
      j = j - 1;
    }
    vec[j + 1] = key;
  }
}
```

- Selection Sort

```cpp
void selectionSort(vector < int > & vec) {
  size_t min_idx;

  for (size_t i = 0; i < vec.size() - 1; i++) {
    min_idx = i;
    for (size_t j = i + 1; j < vec.size(); j++)
      if (vec[j] < vec[min_idx])
        min_idx = j;

    swap(vec[min_idx], vec[i]);
  }
}
```

- Merge Sort

```cpp
void merge(vector < int > & vec, int const left, int const mid, int const right) {
  auto const subArrayOne = mid - left + 1;
  auto const subArrayTwo = right - mid;

  vector < int > leftArray(subArrayOne), rightArray(subArrayTwo);

  for (auto i = 0; i < subArrayOne; i++)
    leftArray[i] = vec[left + i];
  for (auto j = 0; j < subArrayTwo; j++)
    rightArray[j] = vec[mid + 1 + j];

  int indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
  int indexOfMergedArray = left;

  while (indexOfSubArrayOne < subArrayOne && indexOfSubArrayTwo < subArrayTwo) {
    if (leftArray[indexOfSubArrayOne] <= rightArray[indexOfSubArrayTwo]) {
      vec[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
      indexOfSubArrayOne++;
    } else {
      vec[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
      indexOfSubArrayTwo++;
    }
    indexOfMergedArray++;
  }

  while (indexOfSubArrayOne < subArrayOne) {
    vec[indexOfMergedArray] = leftArray[indexOfSubArrayOne];
    indexOfSubArrayOne++;
    indexOfMergedArray++;
  }

  while (indexOfSubArrayTwo < subArrayTwo) {
    vec[indexOfMergedArray] = rightArray[indexOfSubArrayTwo];
    indexOfSubArrayTwo++;
    indexOfMergedArray++;
  }
}

void mergeSort(vector < int > & vec, int
  const begin, int
  const end) {
  if (begin >= end)
    return; // Returns recursively

  auto mid = begin + (end - begin) / 2;
  mergeSort(vec, begin, mid);
  mergeSort(vec, mid + 1, end);
  merge(vec, begin, mid, end);
}
```
