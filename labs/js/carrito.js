const productos = [
  { nombre: "Laptop", precio: 10000 },
  { nombre: "Mouse", precio: 150 },
  { nombre: "Teclado", precio: 180 },
  { nombre: "Monitor", precio: 3000 },
];

// VALIDACIÓN
function esPrecioValido(precio) {
  return precio > 0;
}

// FILTRO
function filtrarProductosValidos(productos) {
  return productos.filter((producto) => esPrecioValido(producto.precio));
}

// CÁLCULO
function calcularTotalProductos(productos) {
  return productos.reduce((total, producto) => {
    return total + producto.precio;
  }, 0);
}

// IMPUESTO
function aplicarIVA(total) {
  return total * 1.16;
}

// TRANSFORMACIÓN
function obtenerNombresProductos(productos) {
  return productos.map((producto) => producto.nombre);
}

// FILTRO AVANZADO
function filtrarProductosCaros(productos) {
  return productos.filter((producto) => producto.precio > 100);
}

// ORQUESTADOR
function generarResumenCarrito(productos) {
  const productosValidos = filtrarProductosValidos(productos);
  const total = calcularTotalProductos(productosValidos);
  const totalConIVA = aplicarIVA(total);
  const nombres = obtenerNombresProductos(productosValidos);
  const productosCaros = filtrarProductosCaros(productosValidos);

  return {
    nombres,
    total,
    totalConIVA,
    productosCaros,
  };
}

// OUTPUT
function mostrarResumen(resumen) {
  console.log("Productos:", resumen.nombres);
  console.log("Total:", resumen.total);
  console.log("Total con IVA:", resumen.totalConIVA);
  console.log("Productos caros:", resumen.productosCaros);
}

// EJECUCIÓN
const resumen = generarResumenCarrito(productos);
mostrarResumen(resumen);
