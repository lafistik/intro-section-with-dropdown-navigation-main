const mobileNav = document.querySelector(".mobile-nav");
const features = document.querySelector(".features");
const featuresList = document.querySelector(".features-list");
const company = document.querySelector(".company");
const companyList = document.querySelector(".company-list");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

mobileNav.addEventListener("click", function () {
  console.log("CLICK");
  this.querySelector(".menu-opened").classList.toggle("active");
  this.querySelector(".menu-closed").classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

features.addEventListener("click", function () {
  this.querySelector(".arrow-d").classList.toggle("active");
  this.querySelector(".arrow-u").classList.toggle("active");
  featuresList.classList.toggle("active");
  // if (featuresList.classList.contains("active")) {
  //   featuresList.style.height = "176px";
  // } else {
  //   featuresList.style.height = "0px";
  // }
});

company.addEventListener("click", function () {
  this.querySelector(".arrow-d").classList.toggle("active");
  this.querySelector(".arrow-u").classList.toggle("active");
  companyList.classList.toggle("active");

  // if (companyList.classList.contains("active")) {
  //   companyList.style.height = "123px";
  // } else {
  //   companyList.style.height = "0px";
  // }
});
