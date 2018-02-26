/*Creamos unas recetas de pruebas*/
"use strict";


var recetas = [];




function init() {

    crearRecetasMock();

    cargarRecetas();


}




function cargarRecetas() {

    var recetasHtml = "";

 var contenedorRecetas = document.getElementById("contenedor_recetas");

    recetas.forEach((receta, index) => {

        console.log("%i receta %o", index, receta);
        recetasHtml += `<div class="col-sm-6 col-md-4 receta">

<div class="cerrar"><span onclick="borrarCaja(this, ${index} )">X</span></div>
                <div class="thumbnail text-center">
                    <img src="` + receta.foto + `" alt="..." >
                    <div class="caption">
                        <h3>` + receta.nombre + `</h3>
                        <p>` + receta.descripcion + `.</p>
                        <i class="fa fa-heart" aria-hidden="true">` + receta.likes + `</i> ` + receta.cocinero + `
                        <p><a href="#pollo" class="btn btn-primary" role="button" data-toggle="modal" data-target="#pollo"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a>
                    </div>
                </div>
            </div>`
    });
    contenedorRecetas.innerHTML = recetasHtml;

}
function crearRecetasMock() {

    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addingredientes("pollo");
    rPollo.addingredientes("ajo");
    rPollo.addingredientes("tomate");
    rPollo.addingredientes("chilidron");

    //crear mas recetas
    var tortillaPatatas = new Receta("Tortilla Patatas", "https://es.rc-cdn.community.thermomix.com/recipeimage/flz0tm0r-a2069-162740-cfcd2-zlr8kinc/733f35bb-e440-4c4f-9b87-949a0e20e384/main/tortilla-de-patatas-con-cebolla.jpg", 45, "Karlos Argiñano");
    tortillaPatatas.addingredientes("Patatas");
    tortillaPatatas.addingredientes("Huevos");



    //añadirlas al array recetas
    recetas.push(rPollo);
    recetas.push(tortillaPatatas);

    console.debug("Recetas Creadas");
}







function nuevaReceta() {
    console.log("nuevaReceta click");

    //comprobar que el formulario es correcto antes de crear
    var form = document.getElementById("formulario");

    if (form.checkValidity()) {

        console.debug('crear receta');
        //recoger values de los inputs
        var nombre = document.getElementById("nombre").value;
        var foto = document.getElementById("foto").value;
        var likes = document.getElementById("likes").value;
        var cocinero = document.getElementById("cocinero").value;
        //crear receta nueva
        var newReceta = new Receta(nombre, foto, likes, cocinero);

        //añadir al array
        recetas.unshift(newReceta);

        //pintar nueva receta
        cargarRecetas();

        //limpiar campos del formulario
        form.reset();

    } else {
        console.warn('No se puede crear porque form no correcto');
    }

}

function borrarCaja(elem, posicion) {


    console.log("eliminarReceta click posicion %i", posicion);

    elem.parentElement.parentElement.style.display = 'none';
    recetas.splice(posicion, 1);

}



function showModal(index) {

    var recetaSeleccionada = recetas[index];
    console.debug('showModal %o' + recetaSeleccionada);

    $('#modalIngredientes').modal('show');

    var ingredientes = recetaSeleccionada.ingredientes;
    var lis = "";
    ingredientes.forEach(ing => {
        lis += "<li>" + ing + "</li>";
    });
    $("#listaIngredientes").html(lis);


}
