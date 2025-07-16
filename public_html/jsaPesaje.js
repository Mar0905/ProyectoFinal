
  const productosPesaje = [
  {
    nombre: "Balanza Digital Con Visor Lcd Blanco",
    tipo: "Digital",
    capacidad: "baja",
    precio: 71.80,
    imagen: "Imagenes/imgPesaje/BalanzaDigital.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza Compacta OHAUS V12P6",
    tipo: "Comercial",
    capacidad: "media",
    precio: 1100.00,
    imagen: "Imagenes/imgPesaje/BalanzaCompacta.jpg",
    marca: "Ohaus"
  },
  {
    nombre: "Balanza Gramera Electrónica Cocina",
    tipo: "Digital",
    capacidad: "baja",
    precio: 99.00,
    imagen: "Imagenes/imgPesaje/BalanzaGrameraEco.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza Comercial Plataforma Industrial 500kg",
    tipo: "Comercial",
    capacidad: "alta",
    precio: 499.90,
    imagen: "Imagenes/imgPesaje/BalanzaIndustrial.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Mini Balanza de Precisión Portátil",
    tipo: "Portátil",
    capacidad: "baja",
    precio: 55.00,
    imagen: "Imagenes/imgPesaje/MiniBalanzaGramera.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza Retro Cocina Metálica",
    tipo: "Mecánica",
    capacidad: "baja",
    precio: 171.90,
    imagen: "Imagenes/imgPesaje/BalanzaRetro.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza Analítica de Laboratorio",
    tipo: "Analítica",
    capacidad: "baja",
    precio: 279.70,
    imagen: "Imagenes/imgPesaje/BalanzaAnalitica.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza DAHONGYNG Torre Alta 40kg",
    tipo: "Digital",
    capacidad: "media",
    precio: 214.00,
    imagen: "Imagenes/imgPesaje/BalanzaDAHONGYNG.jpg",
    marca: "DAHONGYNG"
  },
  {
    nombre: "Balanza Colgante Mini Crane Scale 200kg",
    tipo: "Portátil",
    capacidad: "alta",
    precio: 106.00,
    imagen: "Imagenes/imgPesaje/BalanzaColgante.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza para Bebés/Mascotas",
    tipo: "Portátil",
    capacidad: "media",
    precio: 158.00,
    imagen: "Imagenes/imgPesaje/BalanzaBebesMascotas.jpg",
    marca: "Genérica"
  },
  {
    nombre: "Balanza Mecánica Colgante 25 lb",
    tipo: "Mecánica",
    capacidad: "media",
    precio: 314.00,
    imagen: "Imagenes/imgPesaje/BalanzaReloj.jpg",
    marca: "Genérica"
  }
];

function filtrarPesaje() {
  const tipo = document.getElementById("filtroTipo").value;
  const capacidad = document.getElementById("filtroCapacidad").value;
  const marca = document.getElementById("filtroMarca").value;

  const filtrados = productosPesaje.filter(p => {
    const t = !tipo || p.tipo === tipo;
    const c = !capacidad || p.capacidad === capacidad;
    const m = !marca || p.marca === marca;
    return t && c && m;
  });

  mostrarPesaje(filtrados);
}

function mostrarPesaje(lista) {
  const contenedor = document.querySelector(".catalogo");
  contenedor.innerHTML = "";
  lista.forEach(p => {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${p.imagen}" alt="${p.nombre}">
        <div class="nombre">${p.nombre}</div>
        <div class="precio">S/${p.precio.toFixed(2)}</div>
        <div class="etiqueta">Envío gratis</div>
        <button class="botn-comprar">Ver más</button>
      </div>`;
  });
}

window.onload = () => {
  mostrarPesaje(productosPesaje);
};

function limpiarFiltros() {
  document.getElementById("filtroTipo").value = "";
  document.getElementById("filtroCapacidad").value = "";
  document.getElementById("filtroMarca").value = "";

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
