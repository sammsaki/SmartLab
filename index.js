const nav = document.querySelector(".menu"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
const swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper1 .swiper-button-next",
    prevEl: ".swiper1 .swiper-button-prev",
  },
});
// products slider
const swiper2 = new Swiper('.card-slider', {
  // Optional parameters
  slidesPerview:1,
  spaceBetween:30,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper2 .swiper-pagination',
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>';
    },
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper2 .swiper-button-next',
      prevEl: '.swiper2 .swiper-button-prev',
    },
  breakpoints: {
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});

const hoverImages = document.querySelectorAll('.hover-image');

hoverImages.forEach((img) => {
  const originalSrc = img.getAttribute('src');
  const hoverSrc = img.getAttribute('data-hover-src');

  img.addEventListener('mouseover', () => {
    if (hoverSrc) img.setAttribute('src', hoverSrc).classList('overlay').add;
  });

  img.addEventListener('mouseout', () => {
    img.setAttribute('src', originalSrc);
  });
});