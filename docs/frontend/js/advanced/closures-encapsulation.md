# Closures & Real Encapsulation in JavaScript

## 📌 Overview

Closures are one of the most powerful and misunderstood features in JavaScript.  
They enable functions to **retain access to their lexical scope**, even after the outer function has finished execution.

This behavior allows developers to create **private state**, **controlled APIs**, and **modular architectures** without relying on classes.

---

## 🧠 Core Concepts

### 1. Lexical Scope

JavaScript uses lexical (static) scoping, which means:

> The scope of a variable is determined by its position in the source code.

A function has access to:
- Its own scope
- The scope of its parent function
- The global scope

---

### 2. Closure

A **closure** is created when a function:

- Is defined inside another function
- References variables from its outer scope
- Continues to access those variables even after the outer function has finished execution

---

### 3. Why Closures Exist

Closures are a natural result of how JavaScript handles:
- Function creation
- Scope chains
- Memory references

They are not a special feature — they are a **side effect of lexical scoping + persistent references in memory**.

---

## 🔍 How Closures Work

```js
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter(); // 1
counter(); // 2
```
### Explanation
- outer() executes and creates count
- inner() is returned and assigned to counter
- Even after outer() finishes, count is not destroyed
- inner() maintains a reference to count

👉 This persistent access is a closure

## 🔐 Encapsulation with Closures

Closures allow you to create private variables:
```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getValue() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();
console.log(counter.getValue()); // 1
```
### Key Idea
- count is not accessible from outside
- It can only be modified through exposed methods

👉 This is real encapsulation