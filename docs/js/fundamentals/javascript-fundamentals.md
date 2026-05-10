# 🧠 JavaScript Fundamentals — Mental Model, Data Types & Control Flow

## 📌 Overview

This document covers the foundational concepts of JavaScript:
- Mental model
- Data types
- Control flow

Understanding these concepts is essential to writing predictable and scalable code.

---

## 🧠 JavaScript Mental Model

JavaScript is a:

- Interpreted language
- Dynamically typed
- Single-threaded

It runs in:
- The browser (client-side)
- Node.js (server-side)

### 💡 Core Idea

> JavaScript evaluates values and executes decisions.

---

## 🧩 Key Concepts

- **Variables** → store data
- **Expressions** → produce values
- **Statements** → perform actions

```js
let age = 24;        // declaration (statement)
age + 1;             // expression
```
## 📦 Data Types

JavaScript has two main categories of data types:

🔹 Primitive Types
- string → "Hello"
- number → 10
- boolean → true / false
- undefined
- null

```js
let name = "Angela";
let age = 24;
let isDev = true;
```
🔸 Complex Types
- object
- array
```js
let user = {
  name: "Angela",
  age: 28
};

let numbers = [1, 2, 3];
```
## 🔍 Type Checking

Use typeof to inspect data types:
```js
typeof "hello"; // string
typeof 10;      // number
typeof true;    // boolean
```
## 🔀 Control Flow

Control flow allows JavaScript to make decisions and execute different paths of code.

🔹 Conditional Statements
```js
if (condition) {
  // code if true
} else {
  // code if false
}
```
🔹 Example
```js
let age = 18;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```
🔹 Logical Operators
- === → strict equality
- !== → strict inequality
- < > >= <=
- && → AND
- || → OR
```js
let hasAccount = true;
let balance = 100;

if (hasAccount && balance > 0) {
  console.log("Purchase allowed");
}
```

## 🚨 Common Mistake

Avoid using loose equality:
```js
==  // ❌ avoid
=== // ✅ use this
```
## 💡 Key Insight

> The real power of JavaScript is not just writing code,
but controlling how and when that code executes.

## 🚀 Conclusion

Mastering:

- Data types
- Logical thinking
- Control flow

...is the foundation for becoming a strong JavaScript developer.