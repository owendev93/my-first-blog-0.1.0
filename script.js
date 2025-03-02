const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click",()=>{
    container.classList.toggle("change");
});


var swiper = new Swiper (".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
      depth: 500,
      modifer: 1,
      sliderShadows: true,
      rotate: 0,
      stretch: 0
  }
});