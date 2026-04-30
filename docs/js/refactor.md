# 🧠 Refactor — Architecture Improvements

## 🎯 Objective
Improve the clarity, modularity, and maintainability of the project without changing its behavior.

---

## 🧱 1. Structure (Folders)

### Problem
- Files with multiple responsibilities  
- Lack of separation between logic, state, and UI  

### Plan
Reorganize into:

/src  
  /data  
  /api  
  /state  
  /ui  
  /events  

---

## 🧩 2. Functions (SRP)

### Problem
- Long functions with multiple responsibilities  

### Plan
Split into:
- fetchData  
- updateState  
- renderUI  

---

## 🏷️ 3. Naming

### Problem
- Ambiguous variables: data, arr, x  

### Plan
Rename to:
- userList  
- songs  
- isPlaying  
- currentTrack  

---

## 🧠 4. State

### Problem
- Duplicated state  
- No single source of truth  

### Plan
Centralize state in state.js  

---

## 🔗 5. Coupling

### Problem
- Tightly coupled modules  

### Plan
- Separate logic from UI  
- Use pure functions whenever possible  