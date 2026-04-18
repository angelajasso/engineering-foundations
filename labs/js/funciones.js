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
