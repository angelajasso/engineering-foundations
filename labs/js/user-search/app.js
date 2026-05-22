const input = document.querySelector("#input");
const boton = document.querySelector("#btn");
const lista = document.querySelector("#lista");

async function obtenerUsuarios() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}

function filtrarUsuarios(usuarios, texto) {
  return usuarios.filter(u =>
      u.name.toLowerCase().includes(texto.toLowerCase())
  );
}

function mostrarUsuarios(usuarios) {
  lista.innerHTML = "";
  usuarios.forEach(u => {
     const li = document.createElement("li");
     li.textContent = u.name;
     lista.appendChild(li);
  });
}

boton.addEventListener("click", async () => {
  const valor = input.value;
  if (!valor) {
      lista.innerHTML = "<li>Escribe algo</li>";
      return;
  }
  const usuarios = await obtenerUsuarios();
  const filtrados = filtrarUsuarios(usuarios, valor);
  if (filtrados.length === 0) {
      lista.innerHTML = "<li>No hay resultados</li>";
      return;
  }

  mostrarUsuarios(filtrados);
});