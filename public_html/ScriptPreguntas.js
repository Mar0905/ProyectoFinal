const preguntasFrecuentes = [
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta: "Aceptamos pagos con tarjeta de crédito, débito, transferencias bancarias y plataformas digitales como Yape y Plin."
  },
  {
    pregunta: "¿Hacen envíos a provincias?",
    respuesta: "Sí, realizamos envíos a nivel nacional a través de empresas de transporte aliadas."
  },
  {
    pregunta: "¿Los productos tienen garantía?",
    respuesta: "Todos nuestros productos cuentan con garantía mínima de 1 año. Puedes revisar los detalles en cada ficha de producto."
  },
  {
    pregunta: "¿Cómo puedo hacer una devolución?",
    respuesta: "Puedes realizar una devolución escribiéndonos al correo soporte@multimovil.com con tu número de pedido y motivo de la devolución."
  },
  {
    pregunta: "¿Puedo solicitar una prueba de manejo?",
    respuesta: "Sí, puedes agendar una prueba de manejo en nuestros concesionarios. Contáctanos mediante el formulario de consultas."
  }
];

// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-faq');

  for (let i = 0; i < preguntasFrecuentes.length; i++) {
    const item = document.createElement("div");
    item.className = "faq-item";

    const pregunta = document.createElement("div");
    pregunta.className = "faq-question";
    pregunta.textContent = preguntasFrecuentes[i].pregunta;

    const respuesta = document.createElement("div");
    respuesta.className = "faq-answer";
    respuesta.textContent = preguntasFrecuentes[i].respuesta;

    pregunta.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item.active").forEach(activo => {
        if (activo !== item) {
          activo.classList.remove("active");
          activo.querySelector(".faq-answer").style.height = "0px";
        }
      });

      if (isActive) {
        respuesta.style.height = respuesta.scrollHeight + "px";
        requestAnimationFrame(() => {
          respuesta.style.height = "0px";
        });
        item.classList.remove("active");
      } else {
        respuesta.style.height = respuesta.scrollHeight + "px";
        item.classList.add("active");
      }

      respuesta.addEventListener("transitionend", () => {
        if (item.classList.contains("active")) {
          respuesta.style.height = "auto";
        } else {
          respuesta.style.height = "";
        }
      }, { once: true });
    });

    item.appendChild(pregunta);
    item.appendChild(respuesta);
    contenedor.appendChild(item);
  }
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
