let closeBtns = document.querySelector(".button")
let closeInner = document.querySelector(".list-view")
let closeItem = document.querySelector(".grid-view")
// let closeOpacity = document.querySelector(".opacity")
let closeSiteNav = document.querySelector(".sitenav")


closeBtns.addEventListener("click", function () {
    closeInner.classList.add("dn");
    closeItem.classList.toggle("dn")
})


