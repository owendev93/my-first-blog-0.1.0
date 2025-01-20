const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("change");
});


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".education-content-left .value");
    const pages = document.querySelectorAll(".education-content-right > div");
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Quitar la clase activa de todos los botones
        buttons.forEach(btn => btn.classList.remove("active"));
        // Agregar la clase activa al botón actual
        button.classList.add("active");
  
        // Mostrar la página correspondiente
        pages.forEach(page => page.style.display = "none");
        const targetPage = pages[index];
        if (targetPage) {
          targetPage.style.display = "block";
        }
      });
    });
  
    // Mostrar la primera sección por defecto
    pages.forEach((page, index) => {
      page.style.display = index === 0 ? "block" : "none";
    });
  });
  