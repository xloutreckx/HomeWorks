$(function () {

  var mixer = mixitup('.direction__items');

  $('.direction__filter-btn').on('click', function () {
    $('.direction__filter-btn').removeClass('direction__filter-btn--active')
    $(this).addClass('direction__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
  })
  $('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.testimonials__slider').slick({
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: false,
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })
})


Fancybox.bind("[data-fancybox]", {
  src: "https://youtu.be/UIKyAKC0ab8",
  type: "video",
  // ratio: 16 / 10,
  // width: 640,
  // height: 360,
});



