const btnConsulta = document.getElementById("btnConsulta");
const btnReclamo = document.getElementById("btnReclamo");
const motivoSelect = document.getElementById("motivoSelect");

btnConsulta.addEventListener("click", () => {
  btnConsulta.classList.add("activo");
  btnReclamo.classList.remove("activo");

  motivoSelect.innerHTML = `
    <option disabled selected>Motivo de contacto</option>
    <option>Consulta general</option>
    <option>Información de modelos</option>
    <option>Solicitud de cotización</option>
  `;
});

btnReclamo.addEventListener("click", () => {
  btnReclamo.classList.add("activo");
  btnConsulta.classList.remove("activo");

  motivoSelect.innerHTML = `
    <option disabled selected>Motivo de contacto</option>
    <option>Demora en atención</option>
    <option>Problema técnico</option>
    <option>Incumplimiento de servicio</option>
  `;
});

document.getElementById("formContacto").addEventListener("submit", function (e) {
  alert("Formulario enviado correctamente.");
  e.preventDefault();
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