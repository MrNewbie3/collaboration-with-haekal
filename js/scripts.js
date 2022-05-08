/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 10) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 174,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

const invit = document.querySelector(".invitationButton");
const head = document.querySelector("header");
const body = document.querySelector("body");
const syukur = document.querySelector(".pujaSyukur");
const imageAtas = document.querySelector(".imageAtas");
const akad = document.querySelector(".akadNikah");
invit.addEventListener("click", (e) => {
  e.preventDefault();
  head.classList.toggle("absolute");
  document.body.classList.toggle("fixed");
  head.classList.toggle("move");
  syukur.classList.add("animated-left");
  imageAtas.classList.add("slideRight");
  innerLogo.classList.toggle("play");
  iconPlay.classList.remove("d-none");
  if (innerLogo.classList.contains("play")) {
    music.play();
    iconPlay.classList.toggle("zommin");
  } else {
    music.pause();
    iconPlay.classList.toggle("zommin");
  }
  iconPlay.addEventListener("click", () => {
    innerLogo.classList.toggle("play");
    if (innerLogo.classList.contains("play")) {
      music.play();
      iconPlay.classList.toggle("zommin");
    } else {
      music.pause();
      iconPlay.classList.toggle("zommin");
    }
  });
});
$(".aboutNav").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("#about").offset().top - 40 }, 500);
});
$(".brideNav").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("#bride").offset().top }, 500);
});
$(".locationNav").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("#location").offset().top - 80 }, 500);
});
$(".contactNav").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(".contact-container").offset().top - 100 }, 500);
});
window.addEventListener("scroll", (e) => {
  let height = window.pageYOffset;
  console.log(height);
  if (height >= 555 && height <= 1255) {
    akad.classList.add("scrollUp");
  } else if (height >= 1255) {
    akad.classList.remove("scrollUp");
  }
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxt1GswWQzoEfiCkokfeB2IRbRAqJeMgG_2dtXTsLcbGkfZYXMKD47vDpKJKdrwGca5tw/exec";
const form = document.forms["submit-to-google-sheet"];
const kirim = document.querySelector(".btn-kirim");
const loading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".myAlert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.classList.toggle("d-none");
  kirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      loading.classList.toggle("d-none");
      kirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

const music = document.querySelector("#mySong");
const iconPlay = document.querySelector(".play-button");
const innerLogo = document.querySelector(".buttonMusic");
