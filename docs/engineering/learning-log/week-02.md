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