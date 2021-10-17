const checkbox = document.getElementById("switcher");
let logo = document.querySelector(".headerlogo");
let map = document.querySelector(".map-image");
let arrowright = document.querySelector(".arrow-right");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      logo.setAttribute("src", "../../assets/icons/logo.svg");
      map.setAttribute("src", "../../assets/icons/mapwhite.svg");
      arrowright.setAttribute("src", "../../assets/icons/arrowrightwhite.svg");
    } else {
      logo.setAttribute("src", "../../assets/icons/blacklogo.svg");
      map.setAttribute("src", "../../assets/icons/map.svg");
      arrowright.setAttribute("src", "../../assets/icons/arrowright.svg");
    }
});


const next = document.querySelector(".btn-right");
const prev = document.querySelector(".btn-left");
const slides = document.querySelectorAll(".slider-img");
const slider = document.querySelector(".slider-images");
let i = 0;

slides[0].classList.add("active");

next.addEventListener("click", () => {
  ++i;
  if(i >= slides.length) {
    slides[i-1].classList.remove("active");
    i = 0;
    slides[i].classList.add("active");
  }
  slides[i-1].classList.remove("active");
  slides[i].classList.add("active");
});

prev.addEventListener("click", () => {
  --i;
  if(i < 0) {
    slides[i+1].classList.remove("active");
    i = slides.length-1;
    slides[i].classList.add("active");
  }
  slides[i+1].classList.remove("active");
  slides[i].classList.add("active");
});

slider.addEventListener("click", (el) => {
  slides.forEach((el)=> {
    el.classList.remove("active");
  })
  el.target.classList.add("active");
  for (let j = 0; j < slides.length; j++) {
    if (slides[j].classList.contains("active")) {
      i = j;
    };
  }
});

const item1 = document.querySelector(".map-item1");
const item2 = document.querySelector(".map-item2");
const item3 = document.querySelector(".map-item3");
const item4 = document.querySelector(".map-item4");
let arrItem = [item1, item2, item3, item4];

slides[0].addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item3.classList.add("active-pointer");
});
slides[1].addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item4.classList.add("active-pointer");
});
slides[2].addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item2.classList.add("active-pointer");
});
slides[3].addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item1.classList.add("active-pointer");
});

item1.addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item1.classList.add("active-pointer");
  slides.forEach((el)=> {
    el.classList.remove("active");
  });
  slides[3].classList.add("active");
  i = 3;
});

item2.addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item2.classList.add("active-pointer");
  slides.forEach((el)=> {
    el.classList.remove("active");
  });
  slides[2].classList.add("active");
  i = 2;
});

item3.addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item3.classList.add("active-pointer");
  slides.forEach((el)=> {
    el.classList.remove("active");
  });
  slides[0].classList.add("active");
  i = 0;
});

item4.addEventListener("click", () => {
  arrItem.forEach((el) => {
    el.classList.remove("active-pointer");
  });
  item4.classList.add("active-pointer");
  slides.forEach((el)=> {
    el.classList.remove("active");
  });
  slides[1].classList.add("active");
  i = 1;
});

/*----------------BUTTON------------------*/

const button = document.querySelector(".btn-watch-online");

button.addEventListener("click", () => {
  if (item1.classList.contains("active-pointer")) {
    button.setAttribute("href", "../zoos/eagle/index.html");
  } else if (item2.classList.contains("active-pointer")) {
    button.setAttribute("href", "../zoos/crocodile/index.html");
  } else if (item3.classList.contains("active-pointer")) {
    button.setAttribute("href", "../zoos/gorilla/index.html");
  } else if (item4.classList.contains("active-pointer")) {
    button.setAttribute("href", "../zoos/panda/index.html");
  }
});
