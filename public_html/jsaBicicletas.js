const productos = [
  {
    nombre: "Jafi RX8 – Bicicleta de ruta 700*25C",
    categoria: "Ruta",
    peso: "Ligero",
    precio: 1190,
    imagen: "Imagenes/imgBicicletas/JafiRX8.jpg",
    marca: "Jafi",
    rodado: "700x25C"
  },
  {
    nombre: "Jafi Challenger – Bicicleta de montaña 29″",
    categoria: "Montaña",
    peso: "Medio",
    precio: 699,
    imagen: "Imagenes/imgBicicletas/JafiChallenger.png",
    marca: "Jafi",
    rodado: "29"
  },
  {
    nombre: "Jafi Zeus – Bicicleta de montaña 29″",
    categoria: "Montaña",
    peso: "Medio",
    precio: 590,
    imagen: "Imagenes/imgBicicletas/JafiZeus.png",
    marca: "Jafi",
    rodado: "29"
  },
  {
    nombre: "Sunpeed One – Bicicleta MTB Aro 29",
    categoria: "Montaña",
    peso: "Medio",
    precio: 1199,
    imagen: "Imagenes/imgBicicletas/Bicicleta MTB.jpg",
    marca: "Sunpeed",
    rodado: "29"
  },
  {
    nombre: "Venzo MX7 Bicicleta Montañera Aro 29 Aluminio",
    categoria: "Montaña",
    peso: "Ligero",
    precio: 970,
    imagen: "Imagenes/imgBicicletas/VenzoMX7.jpg",
    marca: "Venzo",
    rodado: "29"
  },
  {
    nombre: "Bicicleta DH - Downhill Aro 29 Doble Suspensión",
    categoria: "Downhill",
    peso: "Pesado",
    precio: 6900,
    imagen: "Imagenes/imgBicicletas/Bicicleta DH.jpg",
    marca: "Genérica",
    rodado: "29"
  },
  {
    nombre: "BMC Trailfox TF02 – Shimano XT – carbono – pequeña",
    categoria: "Montaña",
    peso: "Ligero",
    precio: 7070,
    imagen: "Imagenes/imgBicicletas/Bicicleta BMC Trailfox.jpg",
    marca: "BMC",
    rodado: "27.5"
  },
  {
    nombre: "Bicicleta CBK MTB",
    categoria: "Montaña",
    peso: "Pesado",
    precio: 5905,
    imagen: "Imagenes/imgBicicletas/Bicicleta CBK MTB.jpg",
    marca: "CBK",
    rodado: "29"
  },
  {
    nombre: "Bicicleta Vintage Mujer aro 24\"",
    categoria: "Urbana",
    peso: "Ligero",
    precio: 750,
    imagen: "Imagenes/imgBicicletas/Bicicleta Vintage.jpg",
    marca: "Genérica",
    rodado: "24"
  },
  {
    nombre: "Freestyle Bicicleta Venzo Acrobática BMX",
    categoria: "BMX",
    peso: "Ligero",
    precio: 619,
    imagen: "Imagenes/imgBicicletas/Freestyle Bicicleta.jpg",
    marca: "Venzo",
    rodado: "20"
  },
  {
    nombre: "Bicicleta de acero libre BMX – doble pinza – 20\"",
    categoria: "BMX",
    peso: "Medio",
    precio: 879.80,
    imagen: "Imagenes/imgBicicletas/Bicicleta de acero libre BMX.jpg",
    marca: "Genérica",
    rodado: "20"
  }
];
function filtrar() {
  const categoria = document.getElementById("filtroCategoria").value;
  const precio = document.getElementById("filtroPrecio").value;
  const marca = document.getElementById("filtroMarca").value;
  const rodado = document.getElementById("filtroRodado").value;

  const filtrados = productos.filter(p => {
    const cat = !categoria || p.categoria === categoria;
    const pre =
      !precio ||
      (precio === "bajo" && p.precio < 1000) ||
      (precio === "medio" && p.precio >= 1000 && p.precio <= 3000) ||
      (precio === "alto" && p.precio > 3000);
    const mar = !marca || p.marca === marca;
    const rod = !rodado || p.rodado === rodado;

    return cat && pre && mar && rod;
  });

  mostrarProductos(filtrados);
}
function mostrarProductos(lista) {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = "";

  lista.forEach(p => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="nombre">${p.nombre}</div>
      <div class="precio">S/${p.precio.toFixed(2)}</div>
      <div class="etiqueta">Envío gratis</div>
      <button class="botn-comprar">Ver más</button>
    `;
    contenedor.appendChild(tarjeta);
  });
}

window.onload = () => {
  mostrarProductos(productos);
};

function limpiarFiltros() {
  document.getElementById("filtroCategoria").value = "";
  document.getElementById("filtroPrecio").value = "";
  document.getElementById("filtroMarca").value = "";
  document.getElementById("filtroRodado").value = "";
  filtrarPesaje();
}

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
