# 🧠 Basic State Management

## 📌 Overview

This module introduces the concept of **state** as the single source of truth in a frontend application.

Instead of manipulating the DOM directly, the UI is derived from a centralized state object, ensuring consistency and predictability.

---

## 🎯 Goals

- Understand what "state" is
- Implement a single source of truth
- Synchronize UI with data
- Avoid inconsistent UI behavior

---

## 🧩 Core Concepts

### State
The complete representation of the application at a given moment.

```js
let state = {
  darkMode: false,
  menuOpen: false,
  projects: []
};
```
### Single Source of Truth

There must be only one place where the truth lives.
```js
state.darkMode // ✅ only reference
```
Avoid:
```js
let dark = false;
let theme = "light";
```
### UI Derived from State

The UI should always reflect the state.
```
State → Render → UI
```
### 🔄 Data Flow
```
User Event → setState() → render() → UI update
```
### 🛠️ Implementation
setState
```js
function setState(partialState) {
  state = { ...state, ...partialState };
  render();
}
```
Render
```js
function render() {
  renderTheme();
  renderMenu();
  renderProjects();
}
```
Example: Theme
```js
function renderTheme() {
  document.body.classList.toggle("dark", state.darkMode);
}
```