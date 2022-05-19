addEventListener ("DOMContentLoaded", function(){
    console.log("El DOM se cargo satisfactoriamente");
    boton_1.addEventListener("click", Compraste);
    boton_2.addEventListener("click", Compraste);
    boton_3.addEventListener("click", Compraste);
    boton_4.addEventListener("click", Compraste);
});
function Compraste(){
    window.location.href="../tienda-de-indumentaria/paginas/pagos.html"
}
