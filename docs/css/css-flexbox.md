# Flexbox Foundations

## Overview

Flexbox is a one-dimensional layout system designed to distribute space and align elements efficiently within a container.

It allows developers to build flexible and predictable layouts without relying on hacks or manual positioning.

---

## Core Concepts

### Flex Container

An element with:

display: flex;

This enables Flexbox behavior for its children.

### Flex Items

Direct children of a flex container.

---

## Axes

Flexbox operates on two axes:

* **Main Axis** → Defined by `flex-direction`
* **Cross Axis** → Perpendicular to the main axis

---

## flex-direction

Defines the direction of the main axis.

* row → horizontal (default)
* column → vertical
* row-reverse → reversed horizontal
* column-reverse → reversed vertical

---

## Alignment

### justify-content (Main Axis)

Controls how space is distributed along the main axis.

* flex-start
* center
* flex-end
* space-between
* space-around
* space-evenly

---

### align-items (Cross Axis)

Controls alignment on the cross axis.

* stretch (default)
* center
* flex-start
* flex-end

---

## Spacing

### gap

Defines spacing between flex items.

Example:

.container {
display: flex;
gap: 16px;
}

Preferred over margins for layout spacing.

---

## Flex Sizing

Flex items can grow or shrink based on available space.

### flex shorthand

flex: 1;

Equivalent to:

flex-grow: 1;
flex-shrink: 1;
flex-basis: 0;

Used to create equal-width elements.

---

## Common Patterns

### Centering (Horizontal + Vertical)

.container {
display: flex;
justify-content: center;
align-items: center;
}

---

### Navbar Layout

.navbar {
display: flex;
justify-content: space-between;
align-items: center;
}

.menu {
display: flex;
gap: 24px;
}

---

### Push Pattern

.logo {
margin-right: auto;
}

Used to push elements to the opposite side.

---

## Mental Model

Before writing CSS:

1. What is the main axis?
2. How should space be distributed?
3. How should items align?

---

## Key Insight

Flexbox is not about positioning elements.

It is about controlling how elements behave when space changes.

---

## When to Use Flexbox

* Navigation bars
* Horizontal or vertical alignment
* UI components
* Small to medium layouts

---

## Limitations

* Not ideal for two-dimensional layouts
* Complex grids should use CSS Grid instead

---

## Conclusion

Mastering Flexbox allows developers to build predictable, scalable, and clean layouts without relying on hacks or fragile positioning techniques.
