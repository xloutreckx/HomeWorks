(function () {

  // Бургер

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {
    const burger = document.querySelector('.burger')
    const innerHeader = document.querySelector('.header__inner')
    const overlay = document.querySelector('.overlay')
    const burgerIcon = e.target.closest('.burger')
    const burgerNavLink = e.target.closest('.header__nav-link')
    const burgerLogo = e.target.closest('.header__logo-mobile')
    const burgerSocials = e.target.closest('.header__mob-social-link')
    const burgerDocs = e.target.closest('.header__mob-req-item')


    overlay.addEventListener('click', () => {
      burger.classList.remove('burger--active')
      innerHeader.classList.remove('header__inner--open')
      overlay.classList.remove('overlay--show')
      document.body.classList.remove('no-scroll')
    })

    if (!burgerIcon && !burgerNavLink && !burgerLogo && !burgerSocials && !burgerDocs) return
    if (document.documentElement.clientWidth >= 950) return

    if (!burger.classList.contains('burger--active')
      && !innerHeader.classList.contains('header__inner--open')
      && !overlay.classList.contains('overlay--show')) {
      burger.classList.add('burger--active')
      innerHeader.classList.add('header__inner--open')
      overlay.classList.add('overlay--show')
      document.body.classList.add('no-scroll')
    } else {
      burger.classList.remove('burger--active')
      innerHeader.classList.remove('header__inner--open')
      overlay.classList.remove('overlay--show')
      document.body.classList.remove('no-scroll')
    }
  }



  // Слайдер секции "services"

  const swiperServices = new Swiper('.services__slider', {

    slidesPerView: 3,
    spaceBetween: 10,
    effect: 'coverflow',
    coverflowEffect: {
      slideShadows: false,
    },

    pagination: {
      el: '.services__dots',
      clickable: true,
    },

    navigation: {
      nextEl: '.services__next',
      prevEl: '.services__prev',
    },

    slideClass: 'services__slider-item',
    wrapperClass: 'services__slider-wrapper',
  })

  // Слайдер секции "review"

  const swiperReview = new Swiper('.review__slider', {

    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,

    pagination: {
      el: '.review__dots',
      // clickable: true,
    },

    navigation: {
      nextEl: '.review__next',
      prevEl: '.review__prev',
    },

    slideClass: 'review__slide',
    wrapperClass: 'review__slider-wrapper',
  })

  // Аккордеон секции "process" и "questions"

  const accordionLists = document.querySelectorAll('.accordion-list');

  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionList = e.currentTarget
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }

    });

  });

  // Слайдер секции "compare"

  const swiperCompare = new Swiper('.compare__slider', {

    slidesPerView: 1,
    loop: true,
    effect: 'fade',

    navigation: {
      nextEl: '.compare__next',
      prevEl: '.compare__prev',
    },

    slideClass: 'compare__slide',
    wrapperClass: 'compare__slider-wrapper',
  })

  // Слайдер секции "more"

  const swiperMore = new Swiper('.more__slider', {

    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopedSlides: 3,

    navigation: {
      nextEl: '.more__next',
      prevEl: '.more__prev',
    },

    slideClass: 'more__slide',
    wrapperClass: 'more__slider-wrapper',
  })

  // Слайдер секции "team"

  const swiperTeam = new Swiper('.team__slider', {

    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
      el: '.team__dots',
      clickable: true,
    },

    navigation: {
      nextEl: '.team__next',
      prevEl: '.team__prev',
    },

    slideClass: 'team__slide',
    wrapperClass: 'team__slider-wrapper',
  })

  // Слайдер секции "team-cl"

  const swiperTeamCl = new Swiper('.team__cl-slider', {

    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,

    pagination: {
      el: '.team__cl-dots',
      // clickable: true,
    },

    navigation: {
      nextEl: '.team__cl-next',
      prevEl: '.team__cl-prev',
    },

    slideClass: 'team__cl-slide',
    wrapperClass: 'team__cl-slider-wrapper',
  })

})()

// подключение Яндекс карты

function init() {
  let map = new ymaps.Map('map-test', {
    center: [56.12687506861638, 47.323114499999996],
    zoom: 15
  });

  let placemark = new ymaps.Placemark([56.12687506861638, 47.323114499999996], {}, {

  })

  map.geoObjects.add(placemark);
}

ymaps.ready(init);