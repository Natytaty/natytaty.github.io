// Slider
$(".clients-slider").slick({
  arrows: false,
  slidesToShow: 2,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 500,
  /* fade: true, */
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 1090,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px",
      },
    },
  ],
});

// Slider
$(".news-slider").slick({
  arrows: false,
  slidesToShow: 1,
  dots: true,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 500,
  centerMode: true,
  centerPadding: "400px",
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        centerPadding: "580px",
      },
    },
    {
      breakpoint: 1800,
      settings: {
        centerPadding: "520px",
      },
    },
    {
      breakpoint: 1620,
      settings: {
        slidesToShow: 1,
        centerPadding: "300px",
        centerMode: true,
      },
    },
    {
      breakpoint: 1230,
      settings: {
        centerPadding: "200px",
      },
    },
    {
      breakpoint: 1030,
      settings: {
        centerPadding: "150px",
      },
    },
    {
      breakpoint: 780,
      settings: {
        centerPadding: "100px",
      },
    },
    {
      breakpoint: 630,
      settings: {
        centerPadding: "10px",
      },
    },
  ],
});

//Accordion
var acc = document.getElementsByClassName("features-item-btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//Burger-menu
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-item");
const menuShadow = document.querySelector(".menu-shadow");

burger.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  burger.classList.toggle("burger-active");
  document.body.classList.toggle("no-scroll");
  menuShadow.classList.toggle("active");
});

menuItem.forEach((item) => {
  item.addEventListener("click", function () {
    menu.classList.toggle("menu-active");
    burger.classList.toggle("burger-active");
    menuShadow.classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  if (
    e.target.closest(".menu") === null &&
    e.target.closest(".burger") === null
  ) {
    menu.classList.remove("menu-active");
    burger.classList.remove("burger-active");
    document.body.classList.remove("no-scroll");
    menuShadow.classList.remove("active");
  }
});
