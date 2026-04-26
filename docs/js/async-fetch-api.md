# Asynchronous JavaScript & Fetch API

## 🎯 Objective
Understand how JavaScript handles asynchronous operations and integrate real API data into the application.

---

## 🧠 Core Concepts

### Asynchrony
JavaScript does not block execution. It delegates tasks and reacts when they complete.

### Promises
A Promise represents a future value:
- pending
- fulfilled
- rejected

### Async/Await
Syntactic sugar over promises that allows writing asynchronous code in a linear style.

---

## 🔁 Flow

Request → Response → State → UI

---

## 🧱 Architecture

- API Layer → handles fetch
- State → stores data, loading, error
- Controller → orchestrates logic
- UI → renders based on state

---

## ⚠️ Error Handling

Always validate response:

```js
if (!response.ok) {
  throw new Error("API Error");
}
```

## 🚀 Implementation Example
```js
export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
}
```