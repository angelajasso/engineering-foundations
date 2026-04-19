# DOM Interaction 

## 📌 Overview

This module explores the DOM (Document Object Model) as an **interaction system**, not just a way to select elements.

The focus is on:
- Understanding the DOM as a structure in memory
- Connecting JavaScript with real UI
- Handling user events
- Updating the interface dynamically

---

## 🧠 Core Concepts

### What is the DOM?

The DOM is a **tree-like representation of HTML in memory**.

- Each element is a **node**
- JavaScript interacts with these nodes
- Changes in the DOM reflect immediately in the UI

---

### Nodes

A node is any part of the DOM:
- Elements (`<h1>`, `<div>`)
- Text content
- Comments

---

### Selecting vs Manipulating

**Selecting**
```js
const title = document.querySelector("#title");
```

**Manipulating**
```js
title.textContent = "New text";
```
- Selecting = accessing the node
- Manipulating = modifying the node