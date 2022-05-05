addEventListener ("DOMContentLoaded", function()
{
    console.log("El DOM se cargo satisfactoriamente");
    contactobtn.addEventListener("click", enviardatos)
});
function enviardatos(){
    alert(contactomail.value)
}