// slider 1
$(".single-item").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  rows: 2,
});

// slider 2
$(".responsive").slick({
  dots: true,
  infinite: false,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 3,
        infinite: true,
        dots: true,
        rows: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesPerRow: 1,
        rows: 2,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
