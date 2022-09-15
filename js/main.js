var elHeader = document.querySelector(".site-header");
var elBurger = document.querySelector(".burger");
var elClose = document.querySelector(".close-btn");

elBurger.addEventListener("click", function(){
    elHeader.classList.add("show")
})

elClose.addEventListener("click", function(){
    elHeader.classList.remove("show")
})