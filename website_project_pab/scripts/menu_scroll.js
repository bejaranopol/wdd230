const hamburger_menu = document.querySelector("#menu_toogle");
const nav_menu = document.querySelector(".nav_menu");
const preNav = document.querySelector(".link_d");
const preNav1 = document.querySelector(".link_e");
const preNav2 = document.querySelector(".link_f");

hamburger_menu.addEventListener("click",()=> {
    hamburger_menu.classList.toggle("active");
    nav_menu.classList.toggle("active");
    preNav.classList.toggle("active");
    preNav1.classList.toggle("active");
    preNav2.classList.toggle("active"); 
})
