$(function () {

  var mixer = mixitup('.direction__items');

  $('.direction__filter-btn').on('click', function () {
  $('.direction__filter-btn').removeClass('direction__filter-btn--active')
  $(this).addClass('direction__filter-btn--active')
  })

})

Fancybox.bind("[data-fancybox]", {
  src: "https://youtu.be/UIKyAKC0ab8",
  type: "video",
  // ratio: 16 / 10,
  // width: 640,
  // height: 360,
});


