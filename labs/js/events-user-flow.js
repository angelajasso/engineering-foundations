const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");

// Estado
let state = {
  name: "",
  error: null,
};

// Validación
function validate(name) {
  if (name.trim() === "") {
    return "Nombre requerido";
  }
  return null;
}

// Render UI
function render() {
  if (state.error) {
    message.textContent = state.error;
    message.style.color = "red";
  } else if (state.name) {
    message.textContent = `Gracias, ${state.name}`;
    message.style.color = "green";
  } else {
    message.textContent = "";
  }
}

// Evento input (tiempo real)
nameInput.addEventListener("input", (event) => {
  state.name = event.target.value;
  state.error = validate(state.name);
  render();
});

// Evento submit (flujo principal)
form.addEventListener("submit", (event) => {
  event.preventDefault();

  state.error = validate(state.name);

  if (state.error) {
    render();
    return;
  }

  render();

  // limpiar
  form.reset();
  state = { name: "", error: null };
});
