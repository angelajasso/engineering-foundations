
## 2026-05-03

### 🎯 Topic
JavaScript Execution Model (Call Stack + Memory Heap)

### 🧠 What I understood

- JavaScript executes code using a Call Stack
- Every function creates an Execution Context
- The stack follows a LIFO model
- Complex data lives in the Memory Heap
- The stack stores references, not full objects
- The real flow is: context → stack → execution

### 😵 What was harder than expected

- Visualizing the Call Stack in real time
- Understanding the difference between stack and heap
- Tracking execution flow without running the code

### 🚀 What I improved

- My mental model of how JavaScript runs
- My ability to debug function execution
- Understanding errors like stack overflow

### 🔥 Key Insight

JavaScript does not execute lines of code,  
it executes contexts within a stack.

---

## 2026-05-04

### What I understood
Closures allow functions to retain access to their lexical scope, enabling true data encapsulation.

### What was harder than expected
Understanding why variables persist in memory after execution.

### What I improved
Ability to design functions with private state and controlled APIs.

---

## 2026-05-05

### 🎯 Topic
Prototypes & Inheritance in JavaScript

### 🧠 What I understood

- JavaScript uses prototype-based inheritance
- Objects delegate behavior through the prototype chain
- The engine searches properties up the chain until null
- Constructor functions link instances to prototypes
- `class` is only syntactic sugar over prototypes

### 😵 What was harder than expected

- Understanding the difference between:
  - `prototype`
  - `__proto__`
  - `[[Prototype]]`
- Visualizing the prototype chain mentally

### 🚀 What I improved

- Stronger mental model of how JavaScript really works
- Better understanding of memory optimization using prototypes
- Ability to explain inheritance without relying on "classes"

### 🔥 Next Step

- Implement `new` manually
- Recreate `Object.create`
- Practice explaining prototype chain out loud

---

## 2026-05-06

### What I understood

Functional programming focuses on predictable code.

Pure functions always return the same output for the same input.

Immutability helps avoid accidental bugs caused by shared references.

### What was harder than expected

Detecting hidden mutations in arrays and objects.

### What I improved

I started thinking in data transformations instead of direct mutations.

I improved code clarity and predictability.

---

## 2026-05-07


### What I Learned

Today I learned how modern JavaScript data structures
solve specific problems more efficiently than plain
objects and arrays.

I understood:

- When to use Map instead of objects
- Why Set is ideal for unique values
- How WeakMap helps with private data
  and garbage collection

### What Was Difficult

Understanding the real difference between
Map and regular objects.

WeakMap was also harder because it involves
memory management concepts.

### What Improved

- Better data modeling
- Cleaner architecture decisions
- More efficient JavaScript patterns
- Stronger understanding of modern JS

---

## 2026-05-08

### What I Understood

I learned how ES Modules work in real applications and how
frontend architecture depends on clear responsibilities
between modules.

I understood that modularization is not just splitting files,
but designing the flow of the entire system.

### What Was Harder Than Expected

Defining clean responsibilities between modules without
creating unnecessary dependencies.

Avoiding circular dependencies also required more planning
than expected.

### What I Improved

- Project architecture
- ES Modules usage
- Separation of concerns
- State organization
- Application scalability mindset

---