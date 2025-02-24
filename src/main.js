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
