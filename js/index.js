const sliderController = (function() {
  $('.quotes__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.quotes__nav'
  });
  $('.quotes__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.quotes__list',
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    prevArrow: "<img src='../images/prev-arrow.svg' class='prevButton'/>",
    nextArrow: "<img src='../images/next-arrow.svg' class='nextButton'/>",
    variableWidth: true
  });
}());     