function calcularIVA(precio) {
  return precio * 1.16;
}

function esPrecioValido(precio) {
  return precio > 0;
}

function calcularPrecioFinal(precio) {
  if (!esPrecioValido(precio)) {
    return "Precio inválido";
  }
  return calcularIVA(precio);
}

function mostrarPrecio(precio) {
  console.log("Total:", precio);
}

const total = calcularPrecioFinal(100);
mostrarPrecio(total);
