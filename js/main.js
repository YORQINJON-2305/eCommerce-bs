let closeBtns = document.querySelector(".button")
let closeInner = document.querySelector(".list-view")
let closeItem = document.querySelector(".grid-view")
// let closeOpacity = document.querySelector(".opacity")
let closeSiteNav = document.querySelector(".sitenav")


closeBtns.addEventListener("click", function () {
    closeInner.classList.add("dn");
    closeItem.classList.toggle("dn")
})


var elHeader = document.querySelector(".site-header");
var elBurger = document.querySelector(".burger");
var elClose = document.querySelector(".close-btn");

elBurger.addEventListener("click", function(){
    elHeader.classList.add("show")
})

elClose.addEventListener("click", function(){
    elHeader.classList.remove("show")
})

$('.customer__carousel').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  });

