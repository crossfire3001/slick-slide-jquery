

$(".carousel").slick({
  dots: true,
  rows: 2,
  slidesPerRow: 3,
  prevArrow:
    "<i class='slick-prev pull-left fas fa-arrow-left' aria-hidden='true'></i>",
  nextArrow:
    "<i class=' slick-next pull-right fas fa-arrow-right' aria-hidden='true'></i>",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesPerRow: 1,
        rows: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesPerRow: 2,
        rows: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesPerRow: 3,
        rows: 1
      },
    },
  ],
});



