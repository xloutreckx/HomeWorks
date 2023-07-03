$(function () {

  $('.services__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.services__dots')
  })

  $('.arrow__prev').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickPrev')
  })
  $('.arrow__next').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickNext')
  })

})