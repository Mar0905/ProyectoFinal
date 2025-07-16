const autos = [
    { nombre: "Toyota Corolla 2024", tipo: "Hatchback", precio: 12250, combustible: "Gasolina", gazoo: false, imagen: "Imagenes/ImgAuto1/CorollaAzul.png" },
    { nombre: "Nissan Versa 2022", tipo: "SUV",      precio: 16900, combustible: "Gasolina", gazoo: false, imagen: "Imagenes/ImgAuto1/auto3A.jpg" },
    { nombre: "Ford Ranger 2023", tipo: "SUV",       precio: 22400, combustible: "Gasolina", gazoo: false, imagen: "Imagenes/ImgAuto1/auto7B.png" },
    { nombre: "Volkswagen Jetta 2023", tipo: "SUV", precio: 26400, combustible: "Diesel",   gazoo: false, imagen: "Imagenes/ImgAuto1/auto10B.png" },
    { nombre: "Jeep Renegade 2022", tipo: "Hatchback", precio: 35000, combustible: "Gasolina", gazoo: true, imagen: "Imagenes/ImgAuto1/auto12G.jpg" }, 
  ];

const listaAutos       = document.getElementById("listaAutos");
const precioMinInput   = document.getElementById("precioMin");
const precioMaxInput   = document.getElementById("precioMax");
const precioMinValor   = document.getElementById("precioMinValor");
const precioMaxValor   = document.getElementById("precioMaxValor");
const filtrosVehiculo  = document.querySelectorAll(".filtro-vehiculo");
const filtrosCombust   = document.querySelectorAll(".filtro-combustible");
const filtroGazoo      = document.getElementById("filtroGazoo");
const btnReset         = document.getElementById("btnReset");

function renderAutos() {
  const minP = parseInt(precioMinInput.value);
  const maxP = parseInt(precioMaxInput.value);
  const tiposSel = Array.from(filtrosVehiculo).filter(c=>c.checked).map(c=>c.value);
  const combSel  = Array.from(filtrosCombust).filter(c=>c.checked).map(c=>c.value);
  const soloGazoo = filtroGazoo.checked;

  listaAutos.innerHTML = "";
  autos.forEach(auto => {
    const okPrecio   = auto.precio >= minP && auto.precio <= maxP;
    const okTipo     = tiposSel.length === 0 || tiposSel.includes(auto.tipo);
    const okComb     = combSel.length === 0 || combSel.includes(auto.combustible);
    const okGazoo    = !soloGazoo || auto.gazoo;

    if (okPrecio && okTipo && okComb && okGazoo) {
      const card = document.createElement("div");
      card.className = "auto-card";
      card.innerHTML = `
        <img src="${auto.imagen}" alt="${auto.nombre}">
        <h4>${auto.nombre}</h4>
        <span>US$ ${auto.precio.toLocaleString()}</span>
      `;
      listaAutos.appendChild(card);
    }
  });
}

function actualizarEtiquetasPrecio() {
  precioMinValor.textContent = `US$ ${parseInt(precioMinInput.value).toLocaleString()}`;
  precioMaxValor.textContent = `US$ ${parseInt(precioMaxInput.value).toLocaleString()}`;
  renderAutos();
}

precioMinInput.addEventListener("input", actualizarEtiquetasPrecio);
precioMaxInput.addEventListener("input", actualizarEtiquetasPrecio);
filtrosVehiculo.forEach(cb => cb.addEventListener("change", renderAutos));
filtrosCombust.forEach(cb => cb.addEventListener("change", renderAutos));
filtroGazoo.addEventListener("change", renderAutos);

btnReset.addEventListener("click", () => {
  precioMinInput.value = precioMinInput.min;
  precioMaxInput.value = precioMaxInput.max;
  filtrosVehiculo.forEach(c=>c.checked=false);
  filtrosCombust.forEach(c=>c.checked=false);
  filtroGazoo.checked = false;
  actualizarEtiquetasPrecio();
});

actualizarEtiquetasPrecio();
