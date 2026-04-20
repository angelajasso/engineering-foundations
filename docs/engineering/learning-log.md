## 2026-03-30

### What I understood
Engineering is about decision-making, not just implementation.

### What changed in my thinking
I stopped focusing on "making things work" and started thinking about system structure.

### What I will never do again
Write code without a defined structure first.

---
## 2026-03-31 (retrospective)

### Focus
Web fundamentals: understanding how the web works

### What I worked on
Studied the core flow of how a website is loaded and rendered in the browser.

### What I understood
A website is not just files, but a system involving multiple steps:
- The browser sends a request to a server
- The server responds with HTML
- The browser parses HTML and builds the DOM
- CSS is applied to style the content
- JavaScript can modify the DOM dynamically

### What changed in my thinking
I stopped seeing web development as isolated files (HTML, CSS, JS) and started understanding it as a connected system with a defined flow.

### Key insight
Understanding the web flow allows me to reason about what is happening behind the scenes instead of just writing code.

### Gaps
I still need to deepen my understanding of how CSS and JavaScript interact with the rendering process.

### Next step
Apply this mental model while building real pages to reinforce the concepts.

---

## 2026-04-01 (retrospective)

### Focus
Semantic HTML and page structure (header, main, footer)

### What I worked on
Built the base structure of a portfolio project from scratch using semantic HTML elements.

### What I understood
HTML is not only about layout, but about meaning and structure. Using semantic tags improves readability and accessibility.

### Problems
I was unsure when to use <section> vs <article>, and initially relied too much on <div> elements.

### What I discovered
- <section> is used to group related content within a page
- <article> is used for independent, self-contained content
- Overusing <div> leads to poor structure and less meaningful HTML

### Improvements I made
- Replaced multiple <div> elements with <section> and <article>
- Structured the layout using header, main, and footer

### Key takeaway
Semantic HTML is essential for building scalable and accessible interfaces, not just cleaner code.

### Gaps
Some decisions were made by intuition; I still need more practice distinguishing section vs article in complex layouts.

### Next step
Practice semantic structure in more complex UI layouts and reinforce accessibility principles.

---

## 2026-04-02 (retrospective)

### Focus
Project structure and folder systems

### What I worked on
Designed a folder structure and created a base template for a web project.

### What I understood
A project is not just code files, but a system that needs organization to remain scalable and maintainable.

### What changed in my thinking
I stopped creating files randomly and started thinking about structure before implementation.

### Problems
Without a clear structure, it was easy to lose track of files and responsibilities within the project.

### What I discovered
- Folder structure should be intentional
- Separation of concerns improves clarity
- A good template accelerates future development

### Improvements I made
- Created a base project template
- Organized files into meaningful directories
- Established a clear starting point for future projects

### Key takeaway
A well-designed folder system prevents chaos and makes projects easier to scale and maintain.

### Next step
Apply this structure consistently while building real projects like my portfolio.

---

## 2026-04-03

### Accessibility issues detected
- Missing semantic structure
- Poor heading hierarchy
- Non-descriptive links
- Missing alt attributes

### Improvements applied
- Refactored HTML using semantic tags
- Fixed heading structure
- Improved link clarity
- Added descriptive alt text

### What I underestimated about accessibility
I underestimated how critical HTML structure is for non-visual users. Accessibility is not an enhancement but a fundamental part of building reliable web interfaces.

### Key takeaway
Accessibility is not a feature. It is a requirement for building inclusive and high-quality web applications.

---

## 2026-04-04 (retrospective)

### Focus
Component-based thinking

### What I worked on
Learned the concept of components and how to mentally break down a UI into reusable parts.

### What I understood
A component is a reusable and independent piece of a user interface that can be used multiple times across a project.

### What changed in my thinking
I stopped seeing a webpage as a single structure and started thinking of it as a collection of smaller, reusable pieces.

### Problems
At first, I was thinking in terms of full pages instead of breaking the UI into smaller parts.

### What I discovered
- Components help organize complexity
- Reusability reduces duplication
- Thinking in components makes systems more scalable

### Improvements I made
- Started identifying parts of a UI as components (navbar, cards, sections)
- Began mentally structuring projects in reusable blocks instead of one large layout

### Key takeaway
Breaking a UI into components makes development more scalable, maintainable, and easier to reason about.

### Gaps
I still need to practice deciding the correct boundaries of a component.

### Next step
Apply component thinking while building my portfolio structure.

---

## 2026-04-05 (retrospective)

### Focus
Applying component-based thinking to a real project

### What I worked on
Started building my portfolio (index.html) by breaking it down using the base template and component thinking.

### What I understood
A project becomes manageable when it is decomposed into smaller parts instead of building everything at once.

### What changed in my thinking
I stopped approaching the portfolio as a single page and started structuring it as a set of components (sections, layout blocks).

### Problems
Initially, it was unclear how to divide the page into meaningful parts.

### What I discovered
- Using a template provides a clear starting structure
- Breaking the UI into sections simplifies development
- Component thinking applies even in plain HTML

### Improvements I made
- Began decomposing the portfolio into sections
- Used the template structure to guide development
- Avoided building the entire page at once

### Key takeaway
Decomposing a project into smaller parts makes it easier to build, understand, and scale.

### Gaps
I still need to improve how I define component boundaries and structure complex sections.

### Next step
Continue building the portfolio by applying CSS with a clear mental model (cascade and specificity).

---

## 2026-04-06

### Focus
CSS Mental Model: Cascade, Specificity, Inheritance

### What I understood
CSS is not about styling, it is a conflict resolution system where multiple rules compete to define the final appearance of elements.

### Key concepts
- Multiple rules can target the same element
- The browser resolves conflicts using:
  - Specificity
  - Cascade
  - Inheritance
  - Source order

### What changed in my thinking
I stopped thinking of CSS as "writing styles" and started thinking in terms of rule conflicts and priority.

### Experiments
- Tested multiple rules targeting the same element
- Observed how specificity overrides order
- Compared element, class, and ID selectors

### Mistakes I made
I initially thought the last rule always wins, but now I understand that specificity has priority.

### Key takeaway
Understanding specificity and cascade allows me to predict CSS behavior instead of guessing.

### Next step
Apply this mental model when building layouts (Flexbox)

---

## 2026-04-07

### Focus
CSS Box Model: Margin, border, Padding, content

### Key Learning
The actual size of an element includes padding and border.

### Important Rule
Always use:

box-sizing: border-box;

### Common Mistake
Confusing padding with margin.

### Insight
Spacing should be intentional.

---

## 2026-04-08

### Focus
CSS Flexboxl: flex-direction, justify-content, align-items, gap

### Key Learning
Flexbox is a one-dimensional layout system used to control alignment and space distribution.

### Insight

Changing flex-direction changes how alignment works.

### Outcome
- Built a navbar with Flexbox
- Centered elements without hacks
- Improved layout predictability

---

## 2026-04-09

### Focus
CSS Grid: container, items, rows, columns, gap, fraction units (fr), Grid lines.

### key Learning
CSS Grid is a two-dimensional layout system used to control rows and columns simultaneously.

### Insight

Grid is used for layout structure, not small alignment.

### Modern CSS Architecture

Grid → handles page layout  
Flexbox → handles internal alignment  

### Best Practice

Always think in layout systems before writing CSS.

1D → Flexbox  
2D → Grid

---

## 2026-04-10

### Focus
Responsive Disign: Mobile-first, breakpoints, Layout strategy.

### key Learning
Responsive design is not about resizing, but about rethinking layouts based on available space.

### Mobile First Approach

Modern development follows a mobile-first strategy:

1. Design for small screens first
2. Enhance layouts using min-width media queries

### Breakpoints

- 768px → Tablet
- 1024px → Laptop
- 1280px → Desktop

### Layout Strategy

- Grid → Page structure
- Flexbox → Component alignment

---

## 2026-04-10

### Focus
Design System Basics: Core Elements, Tokens.

### key Learning
A design system is not about styling individual components, but about defining reusable rules.

### Core Elements

- Typography scale
- Spacing scale
- Color tokens
- Reusable components

### Tokens

Design tokens are reusable values such as colors, spacing, and typography.

They are defined using CSS variables and applied across the system.

---

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

