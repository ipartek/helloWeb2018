// JavaScript local
//"use strict";

// variables globales
var recetas = [];
var idReceta = 0;

/*
*   Fragmeno HTML a insertar por cada receta
*   Reemplazar en cada receta:
*       #idReceta# : identificador númerico único de la receta.
*       #nombreReceta# : receta.nombre
*       #fotoReceta# : receta.foto
*       #altFotoReceta# = "foto de " + receta.nombre
*       #ingredientesReceta# : forEache(receta.ingredientes)
*
*/
/*var htmlReceta = `<div class='col-xs-12 col-sm-6 col-md-4 receta' data-index='#idReceta#'>
                    <div class='thumbnail' id='thumb-#idReceta#'>
                        <img src='#fotoReceta#' alt='#altFotoReceta#'>
                        <div class='caption'>
                            <h3>#nombreReceta#</h3>
                        </div>
                        <div class='row infoReceta'>
                            <i class='fa fa-heart' aria-hidden='true'><span id='likes-#idReceta#'> #likesReceta#</span></i>
                            <span id='cocinero-#idReceta#'>#cocineroReceta#</span>
                        </div>
                        <div class='ingredientes' data-toggle='modal' data-target='#modal-img-#idReceta#'>
                            <i class='fa fa-list' aria-hidden='true'></i><span> Ver ingredientes</span>
                        </div>
                    </div>
                </div>
                <!--Modal para ingredientes-->
                <div class='modal fade' id='modal-img-#idReceta#' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>
                    <div class='modal-dialog' role='document'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <button type='button' class='close' data-dismiss='modal' aria-label="Close"><span aria-hidden='true'>&times;</span></button>
                                <h4 class='modal-title' id='myModalLabel'>Ingredientes:</h4>
                            </div>
                            <div class='modal-body'>
                                <ul>
                                    #ingredientesReceta#
                                </ul>
                            </div>
                            <div class='modal-footer'>
                                <button type='button' class='btn btn-default' data-dismiss='modal'>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>`;*/

/* recetas de muestra */
function init() {

    var rPollo = new Receta("Pollo al chilindrón", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 72, "Robin Food");
    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindrón");
    console.log("Receta de "+ rPollo.nombre +": %o", rPollo);
    recetas.push(rPollo);

    var rBacalao = new Receta("Bacalao al pil pil", "https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg", 48, "Karlos Argiñano");
    rBacalao.addIngrediente("bacalao");
    rBacalao.addIngrediente("ajo");
    rBacalao.addIngrediente("aceite");
    rBacalao.addIngrediente("guindillas");
    console.log("Receta de "+ rBacalao.nombre +": %o", rBacalao);
    recetas.push(rBacalao);

    var rMerluza = new Receta("Merluza en salsa verde", "https://www.gallinablanca.es/files/thumbs/b873e075c3bacf6e90a083cca15571da75ef6640_r900_480_2.jpg", 27, "Arzak");
    rMerluza.addIngrediente("merluza");
    rMerluza.addIngrediente("guisantes");
    rMerluza.addIngrediente("almeja");
    rMerluza.addIngrediente("ajo");
    rMerluza.addIngrediente("perejil");
    console.log("Receta de "+ rMerluza.nombre +": %o", rMerluza);
    recetas.push(rMerluza);

    // muestra en UI las recetas del array 'recetas'
    recetas.forEach(receta => {
        mostrarReceta(receta);
    });



    // Mostar año actual junto al Copyright
    mostrarAnioActual();
}

/*
*   Función para mostrar en UI las recetas del array 'recetas'
*/
function mostrarReceta(receta) {

    // var del DOM
    var secRecetas = document.getElementById("recetas");
    var plantilla = document.getElementsByClassName("plantillaReceta")[0];
    let nuevaReceta = plantilla.cloneNode(true);

    idReceta++;

    // Insertar los atributos de la nueva receta en la plantilla para el HTML
    nuevaReceta.querySelector(".caption h3").textContent = receta.nombre;
    //nuevaReceta.querySelector(".thumbnail").setAttribute("id", "thm" + idReceta);
    nuevaReceta.querySelector(".imgReceta").setAttribute("src", receta.foto);
    nuevaReceta.querySelector(".imgReceta").setAttribute("alt", "foto " + receta.nombre);
    nuevaReceta.querySelector(".likes").textContent = receta.likes;
    nuevaReceta.querySelector(".cocinero").textContent = receta.cocinero;

    nuevaReceta.style.display = "initial";
    secRecetas.appendChild(nuevaReceta);

}

function mostrarAnioActual() {

    // variables DOM
    var spanAnio = document.getElementById("anio");


    // añadir receta al array de 'recetas'
    spanAnio.innerHTML = new Date().getFullYear();

}

function anadirReceta() {

    let inputNombre = document.getElementById("inputNombre").value;
    let inputFoto = document.getElementById("inputFoto").value;
    let inputLikes = document.getElementById("inputLikes").value;
    let inputCocinero = document.getElementById("inputCocinero").value;

    // crear nuevo objeto Receta
    var nuevaReceta = new Receta(inputNombre, inputFoto, inputLikes, inputCocinero);
    // añadirla al array de 'recetas'
    recetas.unshift(nuevaReceta);
    // mostrarla en pantalla
    mostrarReceta(nuevaReceta);
}
