let homeMenu = document.getElementById("home-menu");
let shopMenu = document.getElementById("shop-menu");
let aboutUsMenu = document.getElementById("about-us-menu");
let contactMenu = document.getElementById("contact-menu");

homeMenu.addEventListener("mouseenter", () => {
  let el = document.getElementsByClassName("main-title home-select")[0];
  el.classList.add("title-open");
});
homeMenu.addEventListener("mouseleave", () => {
  let el = document.getElementsByClassName("main-title home-select")[0];
  el.classList.remove("title-open");
});

shopMenu.addEventListener("mouseenter", () => {
  let el = document.getElementsByClassName("main-title shop-select")[0];
  el.classList.add("title-open");
});
shopMenu.addEventListener("mouseleave", () => {
  let el = document.getElementsByClassName("main-title shop-select")[0];
  el.classList.remove("title-open");
});

aboutUsMenu.addEventListener("mouseenter", () => {
  let el = document.getElementsByClassName("main-title about-us-select")[0];
  el.classList.add("title-open");
});
aboutUsMenu.addEventListener("mouseleave", () => {
  let el = document.getElementsByClassName("main-title about-us-select")[0];
  el.classList.remove("title-open");
});

contactMenu.addEventListener("mouseenter", () => {
  let el = document.getElementsByClassName("main-title contact-select")[0];
  el.classList.add("title-open");
});
contactMenu.addEventListener("mouseleave", () => {
  let el = document.getElementsByClassName("main-title contact-select")[0];
  el.classList.remove("title-open");
});
