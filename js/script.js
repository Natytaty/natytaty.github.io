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
        slidesToShow: 2,
        centerPadding: "50px",
        centerMode: false,
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
