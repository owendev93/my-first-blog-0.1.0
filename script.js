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
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("DVybbFwDyFF6dX9DV"); // Reemplaza con tu Public Key de EmailJS

    document.querySelector(".contact-btn").addEventListener("click", function (e) {
        e.preventDefault();

        // Capturar los valores del formulario
        let name = document.querySelector("input[name='name']").value;
        let email = document.querySelector("input[email='email']").value;
        let subject = document.querySelector("input[subject='subject']").value;
        let message = document.querySelector("textarea[message='message']").value;

        // Validar que los campos no estén vacíos
        if (!name || !email || !subject || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Parámetros para enviar el email
        let params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs.send("service_z5wdh92", "template_cm5n0dn", params)
            .then(function (response) {
                alert("¡Mensaje enviado con éxito!");
                document.querySelector("form").reset();
            }, function (error) {
                alert("Error al enviar el mensaje. Inténtalo de nuevo.");
                console.error("Error:", error);
            });
    });
});
