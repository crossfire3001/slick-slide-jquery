$('#slick1').slick({
    rows: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesPerRow: 1,
            },
        }],
});

$('.carousel2').slick({
    dots: true,
    slidesPerRow: 3,
    rows: 2,
    responsive: [
        {
            breakpoint: 478,
            settings: {
                slidesPerRow: 1,
                rows: 1,
            }
        }
    ]
});


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
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                row: 2,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});