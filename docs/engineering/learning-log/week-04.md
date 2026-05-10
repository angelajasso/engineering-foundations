## 2026-04-21

### What I understood
Events are not just actions like clicks, but signals that drive the interaction between the user and the system.  
Designing the user flow before coding makes the implementation clearer and more structured.

### What was harder than expected
Thinking in terms of state and flow instead of directly writing event logic.

### What I improved
Separation between logic, state, and UI.  
Better understanding of how to control form behavior using events.

---

## 2026-04-23

### 🎯 Topic
Modularization and Separation of Responsibilities

### 🧠 What I understood

- How to divide a system into independent modules  
- Real usage of import/export in JavaScript  
- The importance of separating UI, logic, data, and events  
- How to structure a project for scalability  

### 😵 What was harder than expected

- Correctly deciding the responsibility of each module  
- Avoiding mixing logic with UI  

### 🚀 What I improved

- Architectural thinking  
- Code organization  
- Clarity in project structure  

### 🔥 Key insight

I don’t organize files...

I design maintainable systems.

---

## 2026-04-24

### 🎯 Topic
Basic State Management

### 🧠 What I understood

- State is the source of truth of the application
- The UI is just a representation of the state
- The correct flow is: state → render → UI
- Directly manipulating the DOM breaks consistency

### 😵 What was harder than expected

- Stopping thinking in terms of the DOM and starting to think in terms of data
- Understanding that events should not modify the UI directly

### 🚀 What I improved

- I centralized my application logic
- My UI is now predictable and easier to debug
- I started to understand how modern frameworks work

### 🔥 Key insight

The problem is not updating the UI  
The problem is maintaining a single source of truth

---

## 2026-04-25

### 🎯 Topic
Asynchronous JavaScript: Promises & Fetch API

### 🧠 What I understood

- JavaScript is non-blocking and event-driven
- Promises represent future values, not immediate data
- async/await improves readability but does not change behavior
- The real control is in state management, not in fetch itself
- UI should react to state: loading, success, error

### 😵 What was harder than expected

- Thinking in non-linear flow
- Understanding that code execution continues while waiting
- Structuring logic without mixing responsibilities

### 🚀 What I improved

- Separation between API, state, and UI
- Error handling with try/catch
- Cleaner async flow using async/await

### 🔥 Key insight

You don't wait for data —  
you design how your system reacts when it arrives.

### 🧩 Next step

Integrate a real music API and render dynamic content in the landing page

---

## 2026-04-26

### 🎯 Tema
Error Handling & Robust UI

### 🧠 What I understood

- Errors are part of the normal flow
- UI must represent system state (loading, success, error)
- Not all errors are the same (network, server, data)
- Empty data is not always an error

### 😵 What was harder than expected

- Designing clear UI states
- Differentiating error vs empty state
- Translating technical errors into user-friendly messages

### 🚀 What I improved

- Built a more resilient UI
- Improved user experience during failures
- Implemented retry logic

### 🔥 Insight

A professional app is not the one that never fails…

but the one that **handles failure gracefully**

---

## 2026-04-30

### 🎯 Topic
Refactoring and Architecture Improvement

### 🧠 What I improved
- Separation of concerns  
- Modular structure  
- Clearer naming  

### 💡 What I learned
Refactoring is not rewriting, it’s clarifying.

### ⚠️ What still needs work
- Detecting hidden coupling  
- Improving naming consistency  

---

## 2026-05-01

### 🎯 Topic
Frontend Technical Audit

### 🧠 What I understood

- Thinking like a senior developer means looking for problems, not validating code
- State is the most critical part of any frontend application
- Asynchronous handling defines the user experience
- Architecture matters more than individual pieces of code

### 😵 What was challenging

- Identifying real issues in my own code
- Evaluating without the bias of “I built this”
- Detecting weaknesses in state management and async handling

### 💡 Key insights

- UI should depend on state, not the DOM
- Without error handling, the app is not robust
- Clean code is not enough without solid architecture

### 🚀 What I improved

- Better identification of state-related issues
- Improved approach to asynchronous logic
- More critical thinking about UX

### 🔁 What I would do differently

- Design state from the beginning
- Think about edge cases before implementing
- Separate responsibilities more clearly from the start

### 🧠 Reflection

I now think in terms of systems, not just individual components.  
The quality of an application depends more on its architecture than on its UI.

---