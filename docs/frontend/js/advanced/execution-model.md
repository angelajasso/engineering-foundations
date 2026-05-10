# 🧠 JavaScript Execution Model

## 📌 Overview

JavaScript does not execute code in a simple line-by-line way.  
It uses an **execution model based on contexts**, managed through a **Call Stack** and storing data in the **Memory Heap**.

---

## 🧩 Core Concepts

### 📞 Call Stack

The Call Stack is a data structure that follows **LIFO (Last In, First Out)**. It is responsible for:

- Executing functions
- Maintaining execution order
- Managing Execution Contexts

---

### 🧠 Memory Heap

The Memory Heap is a region of memory where the following are stored:

- Objects
- Arrays
- Functions

The stack only stores **references** to these values.

---

### ⚙️ Execution Context

Every time code runs, an **Execution Context** is created.

Types:

- Global Execution Context
- Function Execution Context

Each context contains:

- Variables
- Scope
- References
- `this`

---

## 🔁 Execution Flow

Example:

```js
function greet() {
  console.log("Hello");
}

function start() {
  greet();
}

start();