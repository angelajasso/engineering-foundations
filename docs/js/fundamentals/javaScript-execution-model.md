# JavaScript Execution Model

## Concepts

### Scope
Defines where variables are accessible.

### Hoisting
JavaScript moves declarations to the top during the creation phase.

### Execution Context
Environment where code is evaluated and executed.

### Call Stack
Tracks function execution order (LIFO).

## Ejecución

```js
// ==========================
// HOISTING
// ==========================

console.log(a); // undefined
var a = 10;


// ==========================
// FUNCTION HOISTING
// ==========================

sayHi(); // "Hi"

function sayHi() {
  console.log("Hi");
}


// ==========================
// FUNCTION CONTEXT
// ==========================

function test() {
  console.log(x); // undefined
  var x = 5;
}

test();


// ==========================
// LET VS VAR
// ==========================

// console.log(b); // ReferenceError
let b = 20;


// ==========================
// SCOPE
// ==========================

if (true) {
  var c = 30;
}

console.log(c); // 30

if (true) {
  let d = 40;
}

// console.log(d); // error


// ==========================
// CALL STACK
// ==========================

function one() {
  two();
}

function two() {
  console.log("Call stack running");
}

one();
```