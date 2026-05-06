# 🧠 Prototypes & Inheritance in JavaScript

## 📌 Overview

JavaScript does not use classical inheritance like other languages.

Instead, it uses a **prototype-based inheritance system**, where objects inherit behavior from other objects.

---

## 🔗 Prototype Chain

Every object in JavaScript has an internal property called:

- `[[Prototype]]`

This can be accessed using:

- `__proto__` (not recommended for production)
- `Object.getPrototypeOf(obj)`

---

### 🔍 How property lookup works

When accessing a property:

1. JavaScript looks in the object itself
2. If not found → looks in its prototype
3. Continues up the chain
4. Ends at `null`

```js
obj → obj.__proto__ → Object.prototype → null