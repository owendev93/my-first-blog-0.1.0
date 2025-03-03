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



//Scroll Botton Up
document.getElementById("button-up").addEventListener("click", function(){
    scrollUp();
});

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
        if(currentScroll > 0){
            window.requestAnimationFrame(scrollUp);
            window.scrollTo(0, currentScroll - (currentScroll / 0.8));
        }
        
}