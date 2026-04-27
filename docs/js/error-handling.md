# Error Handling & Robust UI

## 🎯 Objective

Build resilient applications that handle failures gracefully and provide clear feedback to users.

---

## 🧠 Core Concept

Errors are not exceptions — they are part of the system.

A professional app is not one that never fails, but one that **handles failure well**.

---

## 🔄 UI State Model

idle → loading → success | error

---

## ⚠️ Types of Errors

### 1. Network Error
- No internet connection
- Request fails before reaching server

### 2. Server Error
- Server responds with error status (4xx, 5xx)

### 3. Data Error
- Response is successful but data is invalid or empty

---

## 🎨 UI States

### Loading
- Show spinner or skeleton
- Prevent empty screen

### Success
- Render data

### Empty State
- Show message: "No data available"

### Error
- Show friendly message
- Provide retry option

---

## 🧠 UX Principles

- Never leave the user without feedback
- Translate technical errors into human language
- Always allow recovery (retry)

---

## 🛠️ Implementation Pattern

State:

```js
{
  data: [],
  status: "idle",
  error: null
}
```