//MainSlider
var mainSlider = new Swiper(".mainSliderContainer", {
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  speed: 500,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainSliderPagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainSliderNext",
    prevEl: ".mainSliderPrev",
  },
});

// nav bar fixed up
let header = document.querySelector("header");
let heroSection = document.querySelector("main");
window.addEventListener("scroll", () => {
  if (this.scrollY > 120) {
    header.classList.add("sticky");
    heroSection.style.margin = "130px 0 0";
  } else {
    header.classList.remove("sticky");
    heroSection.style.margin = "0";
  }
});
// blogs trim text and add Read more
$(document).ready(function () {
  $(".blog p").each(function () {
    var text = $(this).text();
    if (text.length > 150) {
      var truncatedText =
        $.trim(text).substring(0, 150).split(" ").slice(0, -1).join(" ") + ".";
      var readMoreLink = $(
        '<a href="#">إقرأ المزيد <i class="fa-light fa-angle-left"></i></a>'
      );
      $(this).text(truncatedText).append(readMoreLink);
    }
  });
});
//toogler menu
let toggler = document.querySelector(".toggler");
let menu = document.querySelector(".navigation_links");
toggler.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show")) {
    toggler.classList.add("close");
  } else {
    toggler.classList.remove("close");
  }
});
//contact higlight inputs
const inputs = document.querySelectorAll(
  ".inputfield input, .inputfield textarea , .inputfield select"
);
function highlight(event) {
  const label = event.target.previousElementSibling;
  label.classList.add("h");
}
function dehighlight(event) {
  const label = event.target.previousElementSibling;
  if (event.target.value === "") {
    label.classList.remove("h");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", highlight);
  input.addEventListener("blur", dehighlight);
});
// // nav-links highlight by getting path name
// const { pathname } = window.location;
// let navLinks = document.querySelectorAll(".navigation_links a");
// for (let i = 0; i < navLinks.length; i++) {
//   navLinks[i].classList.remove("active");
// }
// for (let i = 0; i < navLinks.length; i++) {
//   const linkPathname = new URL(navLinks[i].href).pathname;
//   if (linkPathname === pathname) {
//     navLinks[i].classList.add("active");
//   }
//   if (pathname === "/") {
//     navLinks[0].classList.add("active");
//   }
// }
// testimonials slider
var swiper = new Swiper(".testimonilasSwiper", {
  loop: true,
  spaceBetween: 30,
  speed: 2000,
  centeredSlides: true,
  pagination: {
    el: ".testimonialsSwiperPagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    350: {
      slidesPerView: 1,
    },
  },
});
//partnersSlider Slider
var partnersSlider = new Swiper(".partnersSlider", {
  // centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  speed: 1000,
  pagination: {
    el: ".partnersPagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    },
  },
});
