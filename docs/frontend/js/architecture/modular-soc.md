# Modular Architecture & Separation of Concerns

## 🧠 Overview

Modular architecture is a way to structure code by dividing it into independent, reusable pieces called modules.

Each module has a single responsibility and communicates with others through explicit imports and exports.

---

## ⚙️ JavaScript Modules

To enable modules in the browser:

```html
<script type="module" src="./js/main.js"></script>

```
### Export
```js
export const projects = [];
export function renderProjects() {}
```

### Import
```js
import { projects } from "./data.js";
import { renderProjects } from "./ui.js";
```
---

## 🧩 Separation of Concerns (SoC)

Separation of concerns is a design principle where each part of the system handles a specific responsibility.

Layers
- Data → source of truth
- UI → rendering
- Logic → business rules
- Events → user interaction
- Main → entry point (orchestrator)