# CSS Grid Foundations

## 🧠 Introduction

CSS Grid is a **two-dimensional layout system**, controlling rows and columns simultaneously.  
Perfect for full-page layouts and scalable UI.

---

## 🔑 Key Concepts

- Grid container: `display: grid`  
- Grid items: children of the container  
- Rows and columns: `grid-template-rows` / `columns`  
- Fraction units (`fr`)  
- Span: `grid-column: start / end`  
- Gap: `gap`, `row-gap`, `column-gap`  
- Repeat & minmax: reusable responsive patterns

---

## ⚖️ Grid vs Flexbox

- Flexbox → 1D, internal alignment  
- Grid → 2D, layout structure  
- Rule: Grid for general layout, Flexbox for internal alignment

---

## 🧩 Example
```
.container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

header, footer {
  grid-column: 1 / 3;
}
```
---

## 🌐 Responsive Gallery
```
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```
- auto-fit → as many columns as fit  
- minmax(200px, 1fr) → min 200px, max available space  
- Responsive without media queries