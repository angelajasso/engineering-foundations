function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(saludar("ana"));

function puedeComprar(edad, dinero) {
  // reglas:
  // edad >= 18
  // dinero >= 100

  // devuelve true o false
  return edad >= 18 && dinero >= 100;
}

console.log(puedeComprar(19, 500));

const productos = [
  { nombre: "Laptop", precio: 10000 },
  { nombre: "Mouse", precio: 150 },
  { nombre: "Teclado", precio: 200 },
  { nombre: "Monitor", precio: 2000 },
  { nombre: "Bocinasr", precio: 400 },
];

function contarProductos(lista) {
  // devuelve cuántos productos hay
  let total = lista.length;
  return total;
}

console.log(contarProductos(productos));

function calcularTotal(lista) {
  return lista.reduce((acc, p) => acc + p.precio, 0);
}

function promedio(lista) {
  const precioTotal = calcularTotal(lista);
  const numeroProductos = contarProductos(lista);
  return precioTotal / numeroProductos;
}

console.log(promedio(productos));
