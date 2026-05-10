## 2026-04-13

### Focus
JavaScript Mental Model: Data types, Conditionals, Logical operators

## Key Learning

JavaScript evaluates values and executes decisions.

## Common Mistake

Confusing `==` with `===`

## Insight

The power of JavaScript lies in **controlling the flow of the program**, not just writing code.

---

## 2026-04-14

### Focus
JavaScript Functions and Single Responsibility

## What I Learned

Today I understood that a function is not just about reusing code, but about encapsulating logic with a single responsibility.

I learned:
- The difference between parameters and arguments
- The importance of return
- What pure vs impure functions are
- How to apply the SRP principle

## Key Insight

Breaking functions down makes code more maintainable, scalable, and easier to understand.

---

## 2026-04-16

### Focus
JavaScript Arrays and Data Transformation

### What I Learned

Today I understood that arrays are not just collections of data, but a powerful way to transform and process information using a declarative approach.

I learned:

- How to use `map()` to transform data
- How to use `filter()` to select specific elements
- How to use `reduce()` to accumulate values

### Key Insight

Thinking in terms of data transformation changes how I approach problems.

Instead of focusing on *how* to iterate step by step, I focus on *what* result I want to achieve.

Using methods like `map`, `filter`, and `reduce` allows me to build clear and expressive data pipelines.

---

## 2026-04-17

### What I Learned
Today I learned that objects are not just code structures, but representations of real-world entities.

I understood:
- The difference between data and logic
- How to design clear object structures
- How destructuring and spread improve code readability

### Challenges
- Avoiding adding logic inside objects
- Thinking in terms of models instead of implementation

### Improvements
- My code is now more structured and readable
- I think more about scalability and clarity
---

## 2026-04-18

### 🎯 Goal

Understand the DOM as a system and learn how to connect JavaScript with real user interaction.

### 🔍 What I Learned

- The DOM is not just for selecting elements, but a **live system**
- JavaScript interacts with **nodes in memory**
- Events are the bridge between user actions and system behavior
- UI updates happen through DOM manipulation

### ⚡ Key Insights

- "JavaScript does not draw UI — it modifies the DOM"
- "Events are inputs, functions are reactions"
- "The DOM behaves like a state container for the interface"

### 🧩 Mental Model

Interaction flow:

1. Select element
2. Listen to event
3. Trigger function
4. Update DOM
5. UI reflects change

### 🛠️ What I Built

- A simple interactive UI:
  - Button click updates text
  - DOM manipulation in real time
  - Clean separation between HTML and JS

### 🧠 Challenges

- Understanding the difference between `textContent` and `innerHTML`
- Avoiding inline event handlers
- Thinking in terms of system flow instead of isolated code

### 💡 Improvements

- Add validation for missing elements
- Decouple logic into reusable functions
- Structure code for scalability

### 🔁 What I Would Do Next

- Build a toggle system (dark/light mode)
- Create reusable UI handlers
- Explore event delegation
- Combine DOM + state patterns

---

## 2026-04-20

### Focus
- Scope
- Hoisting
- Execution Context
- Call Stack

### What changed in my thinking
I stopped seeing JavaScript as line-by-line execution and started understanding its two-phase model (creation and execution).

### Hardest concept
Understanding hoisting vs temporal dead zone.

### What I can now build that I couldn't before
I can debug unpredictable behavior and structure code with better control over scope and execution.

---
