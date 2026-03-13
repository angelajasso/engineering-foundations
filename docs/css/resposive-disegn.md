# Responsive Design

Responsive design allows interfaces to adapt to different screen sizes and devices.

Modern frontend development follows a **Mobile-First approach**, where layouts are designed for small screens first and progressively enhanced for larger screens.

---

## Mobile-First Principle

1. Start with base styles optimized for mobile devices.
2. Expand layouts using media queries for larger screens.

Example:
```css
.container {
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 32px;
  }
}
```
---

## Common Breakpoints

These breakpoints are widely used in modern frontend development.

Mobile  
0 – 767px

Tablet  
768px

Laptop  
1024px

Desktop  
1280px

---

## Responsive Layout with CSS Grid

Mobile layout:
```css
.layout {
  display: grid;
  grid-template-columns: 1fr;
}
```

Tablet layout:
```css
@media (min-width: 768px) {
  .layout {
    grid-template-columns: 200px 1fr;
  }
}
```
Desktop layout:
```css
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 250px 1fr 250px;
  }
}
```
---

## Responsive Layout with Flexbox

Flexbox is commonly used for navigation and small components.

Mobile:
```css
.nav {
  display: flex;
  flex-direction: column;
}
```
Desktop:
```css
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
  }
}
```
---

## Best Practices

• Design mobile layouts first  
• Use **min-width media queries**  
• Avoid excessive breakpoints  
• Use Grid for layout structure  
• Use Flexbox for alignment and components

---

## HTML Requirement

Responsive layouts require the viewport meta tag.
```html
<meta name="viewport" content="width=device-width, initial-scale=1">```