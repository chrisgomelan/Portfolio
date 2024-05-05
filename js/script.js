let menu = document.querySelector(".menu");
let subMenu = document.querySelector(".menu-list");


menu.addEventListener("click", function(){
    subMenu.classList.toggle("active");
})