/* CV como Página Web para Proyecto Integrador Final de #ArgentinaPrograma */

// -------------------------Armado sección Sobre MI-------------------------
// cambio de elementos
let tabLink = document.querySelectorAll(".tab-links");
let tabLinkArray = Array.from(tabLink);
let tabContents = document.querySelectorAll(".tab-contents");
let tabContentsArray = Array.from(tabContents);

const nav = document.querySelector('nav');
    window.addEventListener('scroll', function(){
        nav.classList.toggle('active', window.scrollY > 0)
    })

tabLinkArray.forEach ((ele) => {
    ele.addEventListener ("click", (e) => {
        // Removing The Active Class From All The Tab Links
        tabLinkArray.forEach ( (ele) => {
            ele.classList.remove("active");
        });
        // Adding The Active Class On The Clicked Tab Link
        e.currentTarget.classList.add("active");
        // Adding The Display NONE To All The Tabs Content
        tabContents.forEach ( (tab) => {
            tab.style.display = "none";
        });
        // Removing The Display NONE From The Selected Tab Content
        document.querySelector(e.currentTarget.dataset.showlink).style.display = "block";
    });
});
// -------------------------Fín sección Sobre MI-------------------------

// -------------------------Armado de Abrir y Cerrar Menú-------------------------
let openMenu = document.querySelector(".fa-bars");
let closeMenu = document.querySelector(".fa-times");
let navLinks = document.querySelector("#header nav ul");

openMenu.onclick = function() {
    navLinks.style.right = "0";
}
closeMenu.onclick = function () {
    navLinks.style.right = "-200px";
}
// -------------------------Fín de Abrir y Cerrar Menú-------------------------

// -------------------------Armado de Scroll hacia arriba-------------------------
let scrollBtn = document.getElementById("scroll");
window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})
// -------------------------Fín de Scroll hacia arriba------------------------- //

