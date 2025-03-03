//Menu lateral
const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("change");
});



//descarga de CV
document.getElementById("downloadcv").addEventListener("click", function() {
    let link = document.createElement("a");
    link.href = "src/docs/cv-ingdev.pdf"; // Ruta del archivo
    link.download = "cv-ingdev.pdf"; // Nombre del archivo al descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});