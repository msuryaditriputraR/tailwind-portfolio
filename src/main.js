/* ==================== TOGGLE MENU ===================== */
const menuButton = document.getElementById("menu-button"),
  closeButton = document.getElementById("close-button"),
  menu = document.getElementById("menu");

if (menuButton && closeButton && menu) {
  menuButton.addEventListener("click", () => menu.classList.add("active-menu"));
  closeButton.addEventListener("click", () =>
    menu.classList.remove("active-menu"),
  );
}

/* ==================== BLUR HEADER ===================== */
const blurHeader = () => {
  const header = document.getElementById("header");

  header.classList[this.scrollY >= 50 ? "add" : "remove"]("blur-header");
};

window.addEventListener("scroll", blurHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionMenu = document.querySelector(`#menu a[href*=${sectionId}]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionMenu.classList.add("active-link");
    } else {
      sectionMenu.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
