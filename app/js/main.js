$(function () {

  $('.tabs__title-item').on('click', function (e) {

    e.preventDefault();
    $('.tabs__title-item').removeClass('tabs__title-item--active');
    $(this).addClass('tabs__title-item--active');

    $('.tabs__content-wrapper').removeClass('tabs__content-wrapper--active');
    $($(this).attr('href')).addClass('tabs__content-wrapper--active');
  });


  // $('.tabs__content-wrapper').slick({
  //   arrows: true,
  //   dots: false,
  //   prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slide-left.png" alt="slide left"></button>',
  //   nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slide-right.png" alt="slide right"></button>',
  // });


  $('.header-top__lang-link').on('click', function () {
    $('.header-top__lang-link').toggleClass('header-top__lang-link--active');
  });


});