//quotes slider functionality
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


//searchbar dropdown functionality
const searchbarController = (function() {
  const _searchbar = document.querySelector('.searchbar');
  const _searchButton = document.querySelector('.searchButton');
  const _nav = document.querySelector('.navigation');
 
  _searchButton.addEventListener("click", () => {
    if(window.getComputedStyle(_searchbar).getPropertyValue("visibility") === "hidden") {
      _searchbar.style.visibility = "visible";
      _searchButton.style.background = "black";
      _nav.style.boxShadow = "none";
      _searchButton.childNodes[0].src = "../images/close.svg";
    } else {
      _searchbar.style.visibility = "hidden";
      _searchButton.style.background = "inherit";
      _nav.style.boxShadow = "0px 0px 15px 0px rgba(167,167,167,1)";
      _searchButton.childNodes[0].src = "../images/magnifying-glass.svg";
    }
  });
}());


//shopping cart slide-out functionality
const shoppingcartSlideController = (function() {
  const _cart = document.querySelector(".shoppingCart");
  const _overlay = document.querySelector(".overlay");
  const _closeButton = document.querySelector(".shoppingCart__heading img");
  const _cartButton = document.querySelector(".shoppingCartButton");

  _closeButton.addEventListener("click", () => {
    _cart.style.display = "none";
    _overlay.style.display = "none";
  });

  _cartButton.addEventListener("click", () => {
    _cart.style.display = "flex";
    _overlay.style.display = "block";
  });
}());


//spikeball rules slider
$('.gameBasics__list').slick({
  arrows: true,
  prevArrow: "<img src='../images/prev-arrow.svg' class='prevButton'/>",
  nextArrow: "<img src='../images/next-arrow.svg' class='nextButton'/>"
});


//rules accordion functionality
const rulesAccoridionController = (function() {
  const _buttons = [...document.querySelectorAll(".rules__button")];
  const _contentList = [...document.querySelectorAll(".rules__content")];

  for (let i = 0; i < _buttons.length; i++) {
    _buttons[i].addEventListener("click", function() {
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}());

