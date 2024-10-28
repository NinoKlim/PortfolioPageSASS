const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");

    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));
    showMenu = false;
  }
}

function changeIconColors() {
  let icons = document.querySelectorAll(".stackIcons i");

  icons.forEach((icon) => {
    if (icon.classList.contains("fa-html5")) {
      icon.style.color = "#fff";
    } else if (icon.classList.contains("fa-css3-alt")) {
      icon.style.color = "#1472b6";
    } else if (icon.classList.contains("fa-js")) {
      icon.style.color = "#efd81a";
    } else if (icon.classList.contains("fa-react")) {
      icon.style.color = "#54BED5";
    } else if (icon.classList.contains("fa-bootstrap")) {
      icon.style.color = "#513b76";
    } else if (icon.classList.contains("fa-sass")) {
      icon.style.color = "#c76394";
    }
  });
}
changeIconColors();
