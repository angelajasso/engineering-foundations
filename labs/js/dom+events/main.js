const titulo = document.querySelector("#titulo");
const contador = document.querySelector("#contador");
const boton = document.querySelector("#btn");

let numero = 0;

boton.addEventListener("click", () =>{
    titulo.style.color = "blue";
    numero++;
    contador.textContent = numero;
    console.log("click detectado");
});