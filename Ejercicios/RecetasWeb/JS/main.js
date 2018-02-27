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
                        <p><a href="#modal" class="btn btn-primary" role="button" data-toggle="modal" ><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a>
                    </div>
                </div>
            </div>`
    });
    contenedorRecetas.innerHTML = recetasHtml;

}

function crearRecetasMock() {

    var rPollo = new Receta("Pollo", "https://3.bp.blogspot.com/-Ie7ALdbIr_k/V969A4zAVHI/AAAAAAAADJA/Bj4LUryiH6gznb3N4liA0ueS4byfUpziwCLcB/s640/Pollo%2Bal%2Bchilindr%25C3%25B3n.jpg", 13, "Robin Food", "Pollo con chilindron");

    rPollo.addingredientes("pollo");
    rPollo.addingredientes("ajo");
    rPollo.addingredientes("tomate");
    rPollo.addingredientes("chilidron");

    //crear mas recetas
    var tortillaPatatas = new Receta("Tortilla Patatas", "https://2.bp.blogspot.com/-CsRabToZc7Q/TbvpzCJmOoI/AAAAAAAAFcs/C_T9i8gpJA4/s640/IMG_0576.JPG", 45, "Karlos Argiñano", "Tortilla de Patatas");
    tortillaPatatas.addingredientes("Patatas");
    tortillaPatatas.addingredientes("Huevos");



    //crear mas recetas
    var pastel = new Receta("Pastel con Frutas del Bosque", "http://postrestradicionales.com/wp-content/uploads/2016/04/Pastel-de-queso-con-frutas-del-bosque.png", 145, "Buddy Valastro", "Pastel de Queso con Frutas del Bosque");
    pastel.addingredientes("Nata líquida.");
    pastel.addingredientes("Frutas del bosque");
    pastel.addingredientes("Huevos");
    pastel.addingredientes("Azúcar");
    pastel.addingredientes("Café");
    pastel.addingredientes("Gelatina en polvo");
    pastel.addingredientes("Hojitas de menta");

    //añadirlas al array recetas
    recetas.push(rPollo);
    recetas.push(tortillaPatatas);
    recetas.push(pastel);
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
        var descripcion = document.getElementById("descripcion").value;
        var foto = document.getElementById("foto").value;
        var likes = document.getElementById("likes").value;
        var cocinero = document.getElementById("cocinero").value;
        var descripcion = document.getElementById("descripcion").value;
        //crear receta nueva
        var newReceta = new Receta(nombre, foto, likes, cocinero, descripcion);

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

function agregaringredientes(){

    var botonagregar= document.getElementById("btn-ingredientes");
    var nombrereceta = document.getElementById("nombre").value;

    botonagregar.innerHTML=nombrereceta;



}
