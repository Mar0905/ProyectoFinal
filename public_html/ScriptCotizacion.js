document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.querySelector(".btnEnviar button");
  const modal = document.getElementById("modalResumen");
  const cerrar = document.getElementById("cerrarModal");
  const resumen = document.getElementById("resumenDatos");
  const confirmarEnvio = document.getElementById("confirmarEnvio");
  const formulario = document.querySelector(".FormularioTop form");

  btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const campos = formulario.querySelectorAll("input, select");
    let valido = true;

    campos.forEach((campo) => {
      if (campo.hasAttribute("required") && campo.value.trim() === "") {
        campo.style.border = "2px solid red";
        valido = false;
      } else {
        campo.style.border = "";
      }
    });

    const radioClausu = formulario.querySelector("input[name='Clausu']:checked");
    const radioTermyCon = formulario.querySelector("input[name='TermyCon']:checked");

    if (!radioClausu || !radioTermyCon) {
      alert("Debes aceptar ambas condiciones antes de continuar.");
      return;
    }

    if (!valido) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const getText = (name) => {
      const sel = formulario.querySelector(`select[name='${name}']`);
      return sel.options[sel.selectedIndex].text;
    };

    const datos = {
      tipoDoc: getText("tipoDocumento"),
      documento: formulario.querySelector("#Documento").value,
      nombre: formulario.querySelector("#nombre").value,
      apellido: formulario.querySelector("#apellido").value,
      email: formulario.querySelector("#email").value,
      codCiudad: getText("codCiudad"),
      telefono: formulario.querySelector("input[name='telefono']").value,
      celular: formulario.querySelector("input[name='celular']").value,
      departamento: getText("departamento"),
      modelo: formulario.querySelector("#Model").value,
      version: getText("version"),
      color: getText("color")
    };

    resumen.innerHTML = `
      <p><strong>Tipo de documento:</strong> ${datos.tipoDoc}</p>
      <p><strong>Documento:</strong> ${datos.documento}</p>
      <p><strong>Nombre completo:</strong> ${datos.nombre} ${datos.apellido}</p>
      <p><strong>Email:</strong> ${datos.email}</p>
      <p><strong>Teléfono:</strong> ${datos.codCiudad} ${datos.telefono}</p>
      <p><strong>Celular:</strong> ${datos.celular}</p>
      <p><strong>Departamento:</strong> ${datos.departamento}</p>
      <p><strong>Modelo:</strong> ${datos.modelo}</p>
      <p><strong>Versión:</strong> ${datos.version}</p>
      <p><strong>Color:</strong> ${datos.color}</p>
    `;

    modal.classList.remove("hidden");
  });

  cerrar.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  confirmarEnvio.addEventListener("click", () => {
  const confirmacion = confirm("¿Estás seguro de enviar el formulario?");

  if (confirmacion) {
    modal.classList.add("hidden");
    alert("Enviado correctamente");
  } else {
    alert("El envío fue cancelado.");
  }
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




