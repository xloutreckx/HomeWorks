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
    appendDots: $('.team__dots'),
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          draggable: true,
          dots: true,
        }
      }
    ]
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
    responsive: [
      {
        breakpoint: 950,
        settings: {
          draggable: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          autoplay: true,
          autoplaySpeed: 2000,
          draggable: true,
        }
      }
    ]
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  })

  $('.program__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('program__acc-link--active')) {
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
    } else {
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()
    }
  })

  $(".header__nav-list a, .header__top-btn, .header__content-btn, .footer__go-top, .footer__body-list a, .footer__logo, .header__logo").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--active');
  })
  $('.footer__body-title').on('click', function () {
    $(this).next().slideToggle()
  })

  $('.footer__body-title').on('click', function () {
    if ($(this).hasClass('footer__body-title--active')) {
      $(this).removeClass('footer__body-title--active')
      $(this).next().slideUp()
    }
    else {
      $('.footer__body-title').removeClass('footer__body-title--active')
      $('.footer__body-list').slideUp()
      $(this).addClass('footer__body-title--active')
      $(this).next().slideDown()
    }
  })
})


Fancybox.bind("[data-fancybox]", {
  src: "https://youtu.be/UIKyAKC0ab8",
  type: "video",
});


