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

/* ==================== THEME ===================== */
const body = document.documentElement;
const btnTheme = document.getElementById("theme-button");

if (localStorage.getItem("darkTheme")) {
  body.classList.add("dark");
  btnTheme.classList.add("ri-moon-line");
  btnTheme.classList.remove("ri-sun-line");
}

btnTheme.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    btnTheme.classList.add("ri-sun-line");
    btnTheme.classList.remove("ri-moon-line");
    localStorage.removeItem("darkTheme");
  } else {
    body.classList.add("dark");
    btnTheme.classList.add("ri-moon-line");
    btnTheme.classList.remove("ri-sun-line");
    localStorage.setItem("darkTheme", true);
  }
});
