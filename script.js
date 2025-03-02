const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("change");
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
  el: ".swiper-pagination",
  },
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});