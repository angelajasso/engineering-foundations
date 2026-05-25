const input = document.querySelector("#input");
const boton = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// =========================
// ESTADOS UI
// =========================

function mostrarLoading() {
  lista.innerHTML = "<li>🔄 Buscando usuarios...</li>";
}

function mostrarError() {
  lista.innerHTML = "<li>❌ Error al cargar datos</li>";
}

function mostrarVacio() {
  lista.innerHTML = "<li>😐 No hay resultados</li>";
}

// =========================
// API
// =========================

async function obtenerUsuarios() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!res.ok) {
    throw new Error("Error API");
  }

  return await res.json();
}

// =========================
// FILTRAR USUARIOS
// =========================

function filtrarUsuarios(usuarios, texto) {
  return usuarios.filter((u) =>
    u.name.toLowerCase().includes(texto.toLowerCase())
  );
}

// =========================
// MOSTRAR USUARIOS
// =========================

function mostrarUsuarios(usuarios) {
  lista.innerHTML = "";

  usuarios.forEach((u) => {
    const li = document.createElement("li");

    li.textContent = u.name;

    lista.appendChild(li);
  });
}

// =========================
// EVENTO PRINCIPAL
// =========================

boton.addEventListener("click", async () => {
  // quitar espacios vacíos
  const valor = input.value.trim();

  // validar input vacío
  if (!valor) {
    mostrarVacio();
    return;
  }

  // mostrar loading
  mostrarLoading();

  try {
    // obtener usuarios
    const usuarios = await obtenerUsuarios();

    // filtrar usuarios
    const filtrados = filtrarUsuarios(usuarios, valor);

    // validar resultados
    if (filtrados.length === 0) {
      mostrarVacio();
      return;
    }

    // mostrar resultados
    mostrarUsuarios(filtrados);

    // limpiar input
    input.value = "";

  } catch (error) {
    // mostrar error
    mostrarError();

    console.error(error);
  }
});