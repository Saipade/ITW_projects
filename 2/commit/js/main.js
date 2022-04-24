let menuButton = document.querySelector("#menu-button");
let sideBar = document.querySelector(".sidebar-container");
let main = document.querySelector("main");

menuButton.onclick = function() {
    sideBar.classList.toggle("minimized");
    main.classList.toggle("maximalized");
}

/* Scrolling  */
const sections = document.querySelectorAll("section");
const navigationList = document.querySelectorAll(".sidebar-container-itemlist-item");

window.addEventListener('scroll', ()=> {
    let length = sections.length;
    while (--length && window.scrollY + 350 < sections[length].offsetTop) {}
    navigationList.forEach(ltx => ltx.classList.remove("active"));
    navigationList[length].classList.add("active") 
})
