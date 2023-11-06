$(".carousel").slick({
  rows: 1,
  slidesPerRow: 4,
  prevArrow: '<button type="button" class="slick-prev"><img src="images/fork.png" alt="fork"></button>', // Custom HTML for the previous button
  nextArrow: '<button type="button" class="slick-next"><img src="images/knife.png" alt="knife"></button>', // Custom HTML for the next button
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesPerRow: 2,
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
        slidesPerRow: 2,
        rows: 1
      },
    },
  ],
});



