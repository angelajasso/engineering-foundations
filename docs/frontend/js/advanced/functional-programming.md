# Functional Programming in JavaScript

## Introduction

Functional programming is a programming paradigm focused on:

- Predictable code
- Pure functions
- Immutability
- Data transformation

The main idea is:

> Instead of modifying data, create new data.

This approach reduces bugs and makes applications easier to maintain and test.

---

# What is a Pure Function?

A pure function follows two important rules:

1. Same input → same output
2. No side effects

---

## Pure Function Example

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

The function:

- does not modify external state,
- does not depend on external variables,
- always returns the same result.

---

# Impure Function Example

```js
let total = 0;

function add(price) {
  total += price;
}
```

This function is impure because:

- it modifies external state,
- depends on a global variable,
- behavior changes over time.

---

# Side Effects

A side effect happens when a function affects something outside itself.

Examples:

- Modifying global variables
- Changing arrays or objects
- Manipulating the DOM
- HTTP requests
- Timers
- Local storage access

---

# Immutability

Immutability means:

> Never modify the original data.

Instead of changing existing data, create a new version.

---

# Immutable Arrays

## Mutable Version

```js
const numbers = [1, 2, 3];

numbers.push(4);
```

`push()` modifies the original array.

---

## Immutable Version

```js
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

Now:

- `numbers` remains unchanged,
- `newNumbers` is a new array.

---

# Immutable Objects

## Mutable Version

```js
const user = {
  name: "Angela"
};

user.name = "Ana";
```

---

## Immutable Version

```js
const user = {
  name: "Angela"
};

const updatedUser = {
  ...user,
  name: "Ana"
};
```

This creates a completely new object.

---

# Referential Transparency

Referential transparency means:

> A function call can be replaced by its result without changing the program behavior.

Example:

```js
function double(x) {
  return x * 2;
}
```

This:

```js
double(4)
```

can always become:

```js
8
```

because the function is predictable.

---

# Data Transformation

Functional programming heavily uses transformation methods.

Important methods:

- `map()`
- `filter()`
- `reduce()`

---

# filter()

```js
const users = [
  { name: "Angela", active: true },
  { name: "Luis", active: false }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);
```

---

# map()

```js
const names = users.map(user => user.name);

console.log(names);
```

---

# reduce()

```js
const prices = [100, 200, 300];

const total = prices.reduce((acc, price) => {
  return acc + price;
}, 0);

console.log(total);
```

---

# Benefits of Functional Programming

Functional programming helps create:

- Predictable code
- Cleaner logic
- Easier testing
- Better maintainability
- Fewer bugs

---

# functional.js

```js
// ======================================
// PURE FUNCTIONS
// ======================================

function add(a, b) {
  return a + b;
}

function calculateTotal(price, tax) {
  return price + tax;
}

// ======================================
// IMMUTABLE ARRAYS
// ======================================

const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(numbers);
console.log(newNumbers);

// ======================================
// IMMUTABLE OBJECTS
// ======================================

const user = {
  name: "Angela",
  role: "Developer"
};

const updatedUser = {
  ...user,
  role: "Blockchain Engineer"
};

console.log(user);
console.log(updatedUser);

// ======================================
// DATA TRANSFORMATION
// ======================================

const users = [
  { name: "Angela", active: true },
  { name: "Luis", active: false },
  { name: "Sofia", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// ======================================
// MAP
// ======================================

const names = users.map(user => user.name);

console.log(names);

// ======================================
// REDUCE
// ======================================

const prices = [100, 200, 300];

const total = prices.reduce((acc, price) => {
  return acc + price;
}, 0);

console.log(total);
```

---

# Key Takeaways

- Pure functions are predictable.
- Avoid side effects whenever possible.
- Never mutate original data.
- Use immutable patterns.
- Think in transformations instead of modifications.

---

# Real-World Usage

Functional programming concepts are heavily used in:

- React
- Redux
- Zustand
- Reducers
- State management systems

Modern frontend development strongly depends on immutability and predictable state updates.

---

# Conclusion

Functional programming improves code quality by making applications:

- safer,
- easier to debug,
- easier to scale,
- easier to reason about.

The goal is not only writing code that works.

The goal is writing code you can trust.