const checkbox = document.getElementById("switcher");
let logo = document.querySelector(".headerlogo");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      logo.setAttribute("src", "../../../assets/icons/logo.svg");
    } else {
      logo.setAttribute("src", "../../../assets/icons/blacklogo.svg");
    }
  });



/*----------------SLIDER-------------------*/

