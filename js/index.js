addEventListener ("DOMContentLoaded", function(){
    console.log("El DOM se cargo satisfactoriamente");
    let timVine = document.getElementById("main");
    let navbar = document.getElementById("navbar");
    let navPos = navbar.getBoundingClientRect().top;
    window.addEventListener("scroll", e => {
        let scrollPos = window.scrollY;
            if (scrollPos > navPos) {
                navbar.classList.add('sticky');
                header.classList.add('navbarOffsetMargin');
            } else {
                navbar.classList.remove('sticky');
                header.classList.remove('navbarOffsetMargin');
            }
    });
    boton_1.addEventListener("click", Compraste);
    boton_2.addEventListener("click", Compraste);
    boton_3.addEventListener("click", Compraste);
    boton_4.addEventListener("click", Compraste);
});
function Compraste(){
    window.location.href="../tienda-de-indumentaria/paginas/pagos.html"
}
