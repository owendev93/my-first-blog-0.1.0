/*//Menu lateral
const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("change");
});*/


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

buttonUp = document.getElementById("button-up");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 200){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
};

// Color de la barra de navegación al realizar Scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");

    function setActiveNavItem() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector("a").getAttribute("href").includes(current)) {
                li.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveNavItem);
    setActiveNavItem(); // Llama a la función al cargar la página para establecer el estado activo inicial
});




//Envio de datos a traves del formulario de contacto
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_cm5n0dn';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
    this.reset();
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});
