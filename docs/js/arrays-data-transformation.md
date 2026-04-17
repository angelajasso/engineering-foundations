# 📘 Arrays & Data Transformation

## 🧠 Overview

Arrays are a fundamental data structure in JavaScript used to store and manipulate collections of data.

Modern JavaScript encourages a **declarative approach** to working with arrays using built-in methods.

---

## 🎯 Core Concepts

### map()

Transforms each element of an array and returns a new array.

```js
const names = users.map(user => user.name);
```

### filter()

Returns a new array with elements that match a condition.
```js
const activeUsers = users.filter(user => user.active);
```

### reduce()

Reduces the array to a single value.
```js
const totalAge = users.reduce((acc, user) => acc + user.age, 0);
```
---
## 🔗 Data Pipelines

A pipeline is a sequence of transformations applied to data.
```js
const result = users
  .filter(user => user.active)
  .map(user => user.age)
  .reduce((acc, age) => acc + age, 0);
```

## 🧱 Principles
- Immutability (do not modify original data)
- Declarative programming
- Composition of functions