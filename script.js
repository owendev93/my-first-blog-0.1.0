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
/*const btn = document.getElementById('button');
let notification = document.querySelector('.notification');

function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
    <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark"
            onclick="(this.parentElement).remove()"
            ></i>
        </div>`;
    notification.appendChild(newToast);
    newToast.timeOut = setTimeout(
        () => newToast.remove(), 5000
    );
}

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
});*/

const btn = document.getElementById('button');
let notification = document.querySelector('.notification');

function createToast(type, icon, title, text) {
let newToast = document.createElement('div');
newToast.innerHTML = `
    <div class="toast ${type}">
    <i class="${icon}"></i>
    <div class="content">
        <div class="title">${title}</div>
        <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
    </div>`;
notification.appendChild(newToast);
newToast.timeOut = setTimeout(() => newToast.remove(), 5000);
}

document.getElementById('form').addEventListener('submit', function(event) {
event.preventDefault();

  // Validación personalizada de campos requeridos
const requiredFields = this.querySelectorAll('[required]');
let emptyField = false;

requiredFields.forEach(field => {
    if (!field.value.trim()) {
    emptyField = true;
    }
});

if (emptyField) {
    createToast('warning', 'fa-solid fa-triangle-exclamation', 'Campos incompletos', 'Por favor, completa todos los campos obligatorios.');
    return; // Evita el envío si hay campos vacíos
}

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_cm5n0dn';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    createToast('success', 'fa-solid fa-check-circle', '¡Éxito!', 'El correo fue enviado correctamente.');
    this.reset();
    }, (err) => {
    btn.value = 'Send Email';
    createToast('error', 'fa-solid fa-circle-exclamation', 'Error', 'Ocurrió un problema al enviar el correo.');
    console.error(err);
    });
});





// Cambiar el idioma de la página
/*
const langButton = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

langButton.forEach((button) => {
    button.addEventListener("click", () => {
        fetch(`src/languages/${button.dataset.language}.json`)
        .then(res => res.json())
        .then(data => {
            textsToChange.forEach((el) => {
                const section = el.dataset.section;
                const value = el.dataset.value;

                // Usar textContent en lugar de innerHTML para evitar perder estilos
                if (data[section] && data[section][value]) {
                    const span = el.querySelector("span"); // Selecciona un elemento interno
                    if (span) {
                        span.textContent = data[section][value]; // Actualiza solo el texto del span
                    }
                }
            });
        })
        console.log("Elementos encontrados:", textsToChange);
    });
});*/
