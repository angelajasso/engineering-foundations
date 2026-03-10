# CSS Box Model

Every HTML element in the browser is rendered as a rectangular box.

The box model is composed of four layers:

- Content
- Padding
- Border
- Margin

The default CSS sizing model calculates width and height based only on the content box.

This means padding and borders increase the final rendered size of the element.

To make layouts predictable, professional projects commonly use:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
