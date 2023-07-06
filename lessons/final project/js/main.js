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

  $('.services__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickPrev')
  })
  $('.services__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.services__slider').slick('slickNext')
  })

  $('.review__slider').slick({
    centerMode: true,
    centerPadding: '-40px',
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.review__dots')
  })

  $('.review__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickPrev')
  })
  $('.review__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.review__slider').slick('slickNext')
  })

  $('.process__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('process__acc-link--active')) {
      $(this).removeClass('process__acc-link--active')
      $(this).children('.process__acc-list').slideUp()
    } else {
      $('.process__acc-link').removeClass('process__acc-link--active')
      $('.process__acc-list').slideUp()
      $(this).addClass('process__acc-link--active')
      $(this).children('.process__acc-list').slideDown()
    }
  })


})