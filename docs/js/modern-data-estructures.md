# Modern Data Structures in JavaScript

## Introduction

Modern JavaScript provides advanced data structures that solve
specific problems more efficiently than plain objects (`{}`)
and arrays (`[]`).

The most important modern data structures are:

- `Map`
- `Set`
- `WeakMap`

Understanding when to use each one is an important step toward
writing scalable and maintainable applications.

---

# Why Modern Data Structures Matter

A common beginner mistake is using objects and arrays for everything.

Example:

```js
const cache = {};
const items = [];
```

This works for small applications, but larger systems require
better tools for:

- performance
- memory management
- uniqueness
- dynamic storage
- architecture clarity

Choosing the correct structure improves:

- readability
- scalability
- maintainability
- efficiency

---

# Map

## What is a Map?

`Map` is a collection of key-value pairs.

Unlike objects, a `Map` is specifically designed for dynamic
data storage.

---

## Basic Syntax

```js
const map = new Map();

map.set("name", "Angela");
map.set("role", "Developer");

console.log(map.get("name"));
```

---

# Advantages of Map

## 1. Any Type Can Be a Key

Objects only allow strings or symbols as keys.

`Map` allows:

- strings
- numbers
- objects
- functions
- arrays

Example:

```js
const map = new Map();

const user = { id: 1 };

map.set(user, "Admin");

console.log(map.get(user));
```

---

## 2. Cleaner API

```js
map.set();
map.get();
map.has();
map.delete();
map.clear();
```

---

## 3. Built-in Size Property

```js
console.log(map.size);
```

---

## 4. Easy Iteration

```js
for (const [key, value] of map) {
  console.log(key, value);
}
```

---

# When to Use Map

Use `Map` when:

- data changes frequently
- keys are dynamic
- keys are not simple strings
- iteration matters
- order matters

Good use cases:

- caches
- dynamic state
- project storage
- configuration systems

---

# Set

## What is a Set?

`Set` is a collection of unique values.

Duplicate values are automatically removed.

---

## Basic Syntax

```js
const set = new Set();

set.add("js");
set.add("js");
set.add("web3");

console.log(set);
```

Output:

```js
Set(2) { 'js', 'web3' }
```

---

# Why Set is Useful

Arrays allow duplicates:

```js
const tags = ["js", "js", "frontend"];
```

`Set` prevents this problem automatically.

---

# Common Use Cases

## Remove Duplicates

```js
const numbers = [1, 2, 2, 3];

const unique = [...new Set(numbers)];

console.log(unique);
```

---

## Active Filters

```js
const activeTags = new Set();

activeTags.add("frontend");
activeTags.add("web3");
```

---

## Membership Checking

```js
console.log(activeTags.has("frontend"));
```

---

# When to Use Set

Use `Set` when:

- values must be unique
- duplicates are invalid
- membership checks are important
- filtering systems exist

Good use cases:

- tags
- selected items
- visited pages
- active users
- unique IDs

---

# WeakMap

## What is WeakMap?

`WeakMap` is a special type of map where:

- keys must be objects
- keys are weakly referenced

This means the garbage collector can remove objects from memory
if they are no longer used elsewhere.

---

# Basic Syntax

```js
const wm = new WeakMap();

const user = {};

wm.set(user, "private data");
```

---

# Why WeakMap Exists

Normal `Map` objects keep strong references.

Example:

```js
const map = new Map();

let user = { name: "Angela" };

map.set(user, "data");

user = null;
```

Even after `user = null`, the object still exists in memory
because the `Map` references it.

This can cause memory leaks.

---

# WeakMap Solves This

```js
const wm = new WeakMap();

let user = { name: "Angela" };

wm.set(user, "data");

user = null;
```

Now the object can be garbage collected.

---

# Important Characteristics

## Only Objects as Keys

Valid:

```js
wm.set({}, "data");
```

Invalid:

```js
wm.set("name", "Angela");
```

---

## Not Iterable

You cannot loop through a `WeakMap`.

This is because data may disappear at any moment due to
garbage collection.

---

# Real Use Case: Private Data

```js
const privateData = new WeakMap();

function createUser(name) {
  const user = {};

  privateData.set(user, {
    name,
  });

  return {
    getName() {
      return privateData.get(user).name;
    },
  };
}

const angela = createUser("Angela");

console.log(angela.getName());
```

Benefits:

- private internal data
- cleaner objects
- memory efficiency

---

# Comparison Table

| Structure | Purpose |
|---|---|
| `{}` | Simple entities |
| `Map` | Dynamic key-value storage |
| `Set` | Unique values |
| `WeakMap` | Private object-related data |

---

# Practical Examples

## Map Example

```js
const projectMap = new Map();

projectMap.set(1, {
  title: "Portfolio",
});

projectMap.set(2, {
  title: "Music Visualizer",
});
```

---

## Set Example

```js
const tags = [
  "frontend",
  "frontend",
  "web3",
];

const uniqueTags = [...new Set(tags)];

console.log(uniqueTags);
```

---

## WeakMap Example

```js
const privateData = new WeakMap();

function createAccount(email) {
  const account = {};

  privateData.set(account, {
    email,
  });

  return {
    getEmail() {
      return privateData.get(account).email;
    },
  };
}
```

---

# Best Practices

## Do

- choose structures intentionally
- use `Set` for unique values
- use `Map` for dynamic storage
- use `WeakMap` for private object data

---

## Avoid

- using objects for everything
- using arrays for uniqueness
- ignoring memory considerations
- choosing structures by habit

---

# Key Takeaway

> Data structures are part of software architecture.

Modern JavaScript developers must understand not only
how to write logic, but also how to model data correctly.

Choosing the right structure leads to:

- cleaner code
- fewer bugs
- better scalability
- improved performance

---
```