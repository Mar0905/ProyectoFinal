document.addEventListener("DOMContentLoaded", () => {
  const btnAbrir = document.getElementById("btn-agregar-auto");
  const modal = document.getElementById("formulario-auto");
  const cerrar = modal.querySelector(".cerrar");
  const form = document.getElementById("form-agregar-auto");
  const catalogo = document.getElementById("catalogo-autos");

  // Asegurar que los elementos existen
  if (!btnAbrir || !modal || !cerrar || !form || !catalogo) {
    console.error("❌ Error: Elementos del formulario no encontrados");
    return;
  }

  btnAbrir.addEventListener("click", () => {
    modal.style.display = "block";
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre-auto").value.trim();
    const marca = document.getElementById("marca-auto").value.trim();
    const capacidad = document.getElementById("capacidad-auto").value.trim();
    const precio = document.getElementById("precio-auto").value.trim();
    const categoria = document.getElementById("categoria-auto").value;
    const imagen = document.getElementById("imagen-auto").value.trim();

    if (!nombre || !marca || !capacidad || !precio || !imagen) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.setAttribute("data-capacidad", capacidad);
    tarjeta.setAttribute("data-marca", marca);
    tarjeta.setAttribute("data-precio", precio);

    tarjeta.innerHTML = `
      <div class="imagen-con-etiqueta">
        <img src="${imagen}" alt="${nombre}">
        <span class="estado1 ${categoria === 'usado' ? 'usado' : ''}">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span>
      </div>
      <div class="nombre">${nombre}</div>
      <div class="precio">$${parseFloat(precio).toLocaleString()}</div>
      <div class="etiqueta" data-categoria="${categoria}">Auto ${categoria}</div>
      <button class="botn-comprar"><a href="#">Ver más</a></button>
    `;

    catalogo.appendChild(tarjeta);
    modal.style.display = "none";
    form.reset();
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parentItem = toggle.closest('.nav-item');

        document.querySelectorAll('.nav-item.active').forEach(item => {
          if (item !== parentItem) item.classList.remove('active');
        });

        parentItem.classList.toggle('active');
      });
    });

    document.addEventListener('click', (e) => {
      const isClickInside = e.target.closest('.nav-item');
      if (!isClickInside) {
        document.querySelectorAll('.nav-item.active').forEach(item => item.classList.remove('active'));
      }
    });
});
