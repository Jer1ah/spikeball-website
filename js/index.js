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


const shopDropdownController = (function() {
  const _dropdown = document.querySelector('.shop__dropdown');
  const _shopButton = document.querySelector('.shopButton');
  
  _shopButton.addEventListener("mouseover", () => {
    _dropdown.style.visibility = "visible";
  });

  _dropdown.addEventListener("mouseleave", () => {
    _dropdown.style.visibility = "hidden";
  });
}());