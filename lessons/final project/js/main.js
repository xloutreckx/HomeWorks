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

  $('.compare__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.compare__dots')
  })

  $('.compare__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.compare__slider').slick('slickPrev')
  })
  $('.compare__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.compare__slider').slick('slickNext')
  })

  $('.more__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.more__dots')
  })

  $('.more__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.more__slider').slick('slickPrev')
  })
  $('.more__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.more__slider').slick('slickNext')
  })

  $('.team__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.team__dots')
  })

  $('.team__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })
  $('.team__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  })

  $('.team__cl-slider').slick({
    centerMode: true,
    centerPadding: '-40px',
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    infinite: true,
    waitForAnimate: false,
    appendDots: $('.team__cl-dots')
  })

  $('.team__cl-arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__cl-slider').slick('slickPrev')
  })
  $('.team__cl-arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.team__cl-slider').slick('slickNext')
  })

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })

  $('.burger, .overlay, .header__inner a').on('click', function (e) {
    e.preventDefault()
    $('.header__inner').toggleClass('header__inner--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--active');
  })

  $(window).on('.scroll', function () {
    if ($(window).scrollTop() > 0 && $('.header__inner').hasClass('header__inner--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  })

  let html = document.querySelector("html")
document.querySelector(".burger").onclick = function(){
html.classList.toggle("unscroll")
}

})

function init() {
  let map = new ymaps.Map('map-test', {
    center: [56.12687506861638,47.323114499999996],
    zoom: 15
  });

  let placemark = new ymaps.Placemark([56.12687506861638,47.323114499999996], {}, {

  })

  map.geoObjects.add(placemark);
}

ymaps.ready(init);