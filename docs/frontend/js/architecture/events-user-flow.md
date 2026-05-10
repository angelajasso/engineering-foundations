# Events & User Flow

## 📌 Overview
This module focuses on handling user interactions through events and designing a clear user flow.

Instead of treating events as isolated actions (e.g. clicks), they are approached as signals within a system that trigger state changes and UI updates.

---

## 🧠 Core Concepts

### Event Handling
Using `addEventListener` to listen and react to user interactions.

Supported events:
- `click`
- `input`
- `submit`
- `keydown`

---

### Event Object
The `event` object provides context about the interaction:
- `event.target` → element that triggered the event
- `event.type` → type of event
- `event.preventDefault()` → prevents default browser behavior

---

### User Flow Design
A structured sequence of user actions and system responses.

**Flow:**
User action → validation → system response → feedback

---

## 🧩 Implementation Details

### Architecture

- **State** → stores current data
- **Validation** → ensures correct input
- **Render** → updates UI based on state
- **Events** → trigger changes

---

### Example Flow

1. User clicks "Contact"
2. Form is displayed
3. User types input
4. Input is validated in real time
5. User submits form
6. System validates again
7. Feedback is shown (success or error)

---

## ✅ Best Practices

- No inline events (`onclick`)
- Separate logic from UI
- Validate before acting
- Use semantic events (`submit` over `click` for forms)

---

## 🚀 Outcome

- Interactive UI driven by events
- Clear separation of concerns
- Improved user experience through feedback and validation