"use strict";

var recetas = [];
var divRecetas = document.getElementById('recetas');
var formMostrado = false;


/* creamos unas recetas de prueba */
function init() {

    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");


    //console.log("1º receta %s %o", rPollo.nombre, rPollo);

    nuevoThumbnail(rPollo);
    recetas.push(rPollo);

    var rTortilla = new Receta("Tortilla de Patata", "https://cocina-casera.com/wp-content/uploads/2015/01/receta-tortilla-patatas-facil.jpg", 50, "Arzak");

    rTortilla.addIngrediente("huevos");
    rTortilla.addIngrediente("patatas");
    rTortilla.addIngrediente("aceite");
    rTortilla.addIngrediente("sal");


    console.log("1º receta %s %o", rTortilla.nombre, rTortilla);

    nuevoThumbnail(rTortilla);
    recetas.push(rTortilla);

    var rBacalao = new Receta("Bacalao al Pil Pil", "data:image/jpeg;base64,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", 98, "Arguiñano");

    rBacalao.addIngrediente("bacalao");
    rBacalao.addIngrediente("ajo");
    rBacalao.addIngrediente("acaite");



    console.log("1º receta %s %o", rBacalao.nombre, rBacalao);

    nuevoThumbnail(rBacalao);
    recetas.push(rBacalao);
    //crear mas recetas

    //añadirlas al array recetas

}

/*crea el objeto con los datos de la receta*/
function nuevaReceta() {

    var rNombre = document.getElementById('nombre');
    var rFoto = document.getElementById('foto');
    var rLikes = document.getElementById('likes');
    var rCocinero = document.getElementById('cocinero');

    var receta = new Receta(rNombre.value, rFoto.value, rLikes.value, rCocinero.value);

    recetas.push(receta);

    console.log(recetas);

    nuevoThumbnail(receta);

}

/*crea el thumbnail con la receta y lo posiciona el primero*/

function nuevoThumbnail(receta) {

    var rThumbnail = `            <!--thumbnail de la receta -->

                <div class="thumbnail box">
                    <img class="img-responsive" src="##src##" alt="##alt##">
                    <div class="caption">
                        <h3>##nombreReceta##</h3>
                        <div class="info">
                            <p class="likes"><i class="fa fa-heart" aria-hidden="true"></i>##likes##</p>
                            <p class="cocinero">##cocinero##</p>
                        </div>
                    </div>
                    <div class="ingredientes">
                        <a href="#" class="btn btn-danger" role="button" data-toggle="modal" data-target="#ingredientesModal">Ingredientes</a>
                    </div>
                    <span class="close"><i class="fa fa-times-circle" aria-hidden="true" onclick="eleminarCaja(##id##)"></i></span>
                </div>
            <!--end thumbnail-->`;

    rThumbnail = rThumbnail.replace('##src##', receta.foto);
    rThumbnail = rThumbnail.replace('##alt##', receta.nombre);
    rThumbnail = rThumbnail.replace('##nombreReceta##', receta.nombre);
    rThumbnail = rThumbnail.replace('##likes##', receta.likes);
    rThumbnail = rThumbnail.replace('##cocinero##', receta.cocinero);
    rThumbnail = rThumbnail.replace('##id##', recetas.length - 1);


    divRecetas.innerHTML = rThumbnail + divRecetas.innerHTML;

}

/*elimina el elemento del dom y del array*/
function eleminarCaja(id) {

    console.log(event.target);
    event.target.parentElement.parentElement.style.display = 'none';
    delete recetas[id];
    console.log(recetas);

}

/*
para que muerste y oculte el formulario de abajo
sin hacer*/
function toggleForm(){
    if(formMostrado){
        document.getElementById('nuevaReceta').style.bottom = '-20px';
        //ocultar
    } else {
        document.getElementById('nuevaReceta').style.bottom = '0';
        //mostrar
    }
}

/*rellenar el modal*/
function crearModal (){
    var contenido = `<div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">##receta##</h4>
                    </div>
                    <div class="modal-body">
                        ##ingredientes##
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

                    </div>`;
}
