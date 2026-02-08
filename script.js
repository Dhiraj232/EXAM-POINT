const dropBtn = document.querySelector(".drop-btn");
const menu = document.querySelector(".dropdown-menu");

dropBtn.addEventListener("click", () => {
  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.style.display = "none";
  }
});