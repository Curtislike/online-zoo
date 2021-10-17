/*--------------------DARK THEME---------------*/
const checkbox = document.getElementById("switcher");
let logo = document.querySelector(".headerlogo");
let map = document.querySelector(".map-image");
let payelem1 = document.querySelector(".pay-element1");
let payelem2 = document.querySelector(".pay-element2");
let payelem3 = document.querySelector(".pay-element3");
let arrowright = document.querySelector(".arrowright");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    logo.setAttribute("src", "../../assets/icons/logo.svg");
    map.setAttribute("src", "../../assets/icons/mapwhite.svg");
    payelem1.setAttribute("src", "../../assets/icons/visawhite.svg");
    payelem2.setAttribute("src", "../../assets/icons/paymentwhite.svg");
    payelem3.setAttribute("src", "../../assets/icons/pandawhite.svg");
    arrowright.setAttribute("src", "../../assets/icons/arrowrightwhite.svg");
  } else {
    logo.setAttribute("src", "../../assets/icons/blacklogo.svg");
    map.setAttribute("src", "../../assets/icons/map.svg");
    payelem1.setAttribute("src", "../../assets/icons/visa.svg");
    payelem2.setAttribute("src", "../../assets/icons/payment.svg");
    payelem3.setAttribute("src", "../../assets/icons/panda.svg");
    arrowright.setAttribute("src", "../../assets/icons/arrowright.svg");
  }
});

/*-------------SLIDER PETS IN ZOO------------------------*/

const next = document.querySelector(".btn-right");
const prev = document.querySelector(".btn-left");
const slides = document.querySelectorAll(".pets-image-wrapper");

let i = 0;

// slides.addEventListener("mouse") {

// }

slides[0].lastElementChild.classList.remove("hidden");

next.addEventListener("click", () => {
  ++i;
  if(i >= slides.length) {
    slides[i-1].classList.remove('active');
    slides[i-1].lastElementChild.classList.add("hidden");
    i = 0;
    slides.forEach(el => el.classList.remove("hidden"));
    slides[i].classList.add('active');
    slides[i].lastElementChild.classList.remove("hidden");
  } else if(i > 3) {
    slides[i-4].classList.add('hidden');
  }
  slides[i-1].classList.remove('active');
  slides[i-1].lastElementChild.classList.add("hidden");
  slides[i].classList.add('active');
  slides[i].lastElementChild.classList.remove("hidden");
  
});

prev.addEventListener("click", () => {
  --i;
  if(i < 0) {
    slides[i+1].classList.remove('active');
    slides[i+1].lastElementChild.classList.add("hidden");
    i = slides.length-1;
    slides[i-4].classList.add("hidden");
    slides[i-5].classList.add("hidden");
    slides[i-6].classList.add("hidden");
    slides[i-7].classList.add("hidden");
    slides[i].classList.add("active");
    slides[i].lastElementChild.classList.remove("hidden"); 
  } else if(i < 4) {
    slides[i].classList.remove("hidden");
  }
  slides[i+1].classList.remove('active');
  slides[i+1].lastElementChild.classList.add("hidden");
  slides[i].classList.add('active');
  slides[i].lastElementChild.classList.remove("hidden");
});

/*--------slider range------------*/
// let sliderTextValues = ['01/','02/','03/','04/','05/','06/','07/','08/'];
// const 
// const input = document.querySelector(".another-slider-pets input");

// function sliderText() {

// }