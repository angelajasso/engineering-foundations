const input = document.querySelector("#input");
const boton = document.querySelector("#btn");
const lista = document.querySelector("#lista");

boton.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);
    input.value = "";
});