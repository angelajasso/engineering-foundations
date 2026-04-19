const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 80 },
];

function calcularIVA(precio) {
  return precio * 1.16;
}

function calcularTotal(productos) {
  return productos.reduce((acc, p) => acc + p.precio, 0);
}

function calcularTotalConIVA(productos) {
  const total = calcularTotal(productos);
  return calcularIVA(total);
}

function obtenerProductosCaros(productos) {
  return productos.filter((p) => p.precio > 100);
}

function obtenerNombres(productos) {
  return productos.map((p) => p.nombre);
}

console.log("Total:", calcularTotalConIVA(productos));
console.log("Caros:", obtenerProductosCaros(productos));
console.log("Nombres:", obtenerNombres(productos));
