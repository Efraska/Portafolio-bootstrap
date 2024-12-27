// Selección del botón scroll-up
const scrollUp = document.querySelector("#scroll-up");

// Función para mostrar/ocultar el botón de scroll
function toggleScrollUpButton() {
  if (window.scrollY > 200) {  // Muestra el botón si se ha desplazado más de 200px
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}

// Evento de click para el desplazamiento suave hacia arriba
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Evento de scroll para controlar la visibilidad del botón
window.addEventListener("scroll", toggleScrollUpButton);

// Inicializa la visibilidad al cargar la página
toggleScrollUpButton();
