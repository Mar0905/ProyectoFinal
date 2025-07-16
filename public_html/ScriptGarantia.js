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

  const formulario = document.getElementById('formulario');
  const resultado = document.getElementById('resultado');

  if (formulario) {
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();

      const marca = document.getElementById('marca').value.trim();
      const anio = parseInt(document.getElementById('anio').value);
      const km = parseInt(document.getElementById('km').value);

      const anioActual = new Date().getFullYear();
      const antiguedad = anioActual - anio;

      const garantiaPorAnio = antiguedad <= 5;
      const garantiaPorKm = km <= 100000;

      if (garantiaPorAnio && garantiaPorKm) {
        resultado.innerHTML = `<p style="color: green; font-weight: bold;">✅ La garantía para tu ${marca} está vigente.</p>`;
      } else {
        let causas = [];
        if (!garantiaPorAnio) causas.push(`antigüedad mayor a 5 años (${antiguedad} años)`);
        if (!garantiaPorKm) causas.push(`kilometraje mayor a 100,000 km (${km} km)`);

        resultado.innerHTML = `<p style="color: red; font-weight: bold;">❌ La garantía para tu ${marca} está vencida debido a: ${causas.join(" y ")}.</p>`;
      }
    });
  }
});
