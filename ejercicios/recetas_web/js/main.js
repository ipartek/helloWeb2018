// JavaScript local
"use strict";

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
    recetas.push(rPollo);

    var rBacalao = new Receta("Bacalao al pil pil", "https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg", 48, "Karlos Argiñano");
    rBacalao.addIngrediente("bacalao");
    rBacalao.addIngrediente("ajo");
    rBacalao.addIngrediente("aceite");
    rBacalao.addIngrediente("guindillas");
    recetas.push(rBacalao);

    var rMerluza = new Receta("Merluza en salsa verde", "https://www.gallinablanca.es/files/thumbs/b873e075c3bacf6e90a083cca15571da75ef6640_r900_480_2.jpg", 27, "Arzak");
    rMerluza.addIngrediente("merluza");
    rMerluza.addIngrediente("guisantes");
    rMerluza.addIngrediente("almeja");
    rMerluza.addIngrediente("ajo");
    rMerluza.addIngrediente("perejil");
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
    nuevaReceta.querySelector(".likes").textContent = " " +receta.likes;
    nuevaReceta.querySelector(".cocinero").textContent = receta.cocinero;

    nuevaReceta.style.display = "initial";
    secRecetas.appendChild(nuevaReceta);

}

/*
*   Función que muestra el año actual en las etiquetas HTML con clase .anio
*/
function mostrarAnioActual() {

    // variables DOM
    var spanAnio = document.getElementById("anio");


    // añadir receta al array de 'recetas'
    spanAnio.innerHTML = new Date().getFullYear();

}

function borrarReceta(elem) {

    // borrar la receta de la lista
    var nombreReceta = elem.querySelector("div>h3").textContent;
    var recetaBorrar = recetas.filter(receta => receta.nombre == nombreReceta);
    var resultado = borrarElemento(recetas, recetaBorrar[0]);
    if(!resultado) {
        alert("No se ha podido borrar el elemento");
        console.warn("No se ha podido borrar el elemento");
    } else {
        // borrar la receta de la UI
        elem.style.display = "none";
    }
}


/*
*   Función para borrar un elemento de un array
*   @array: el array que contiene el elemento
*   @element: el elemento que se desea borrar
*   POST: @array sin el @element
*/
function borrarElemento(array, element) {
    /*let index = findWithAttr(array, nombre, element[0].nombre);*/
    let index = array.indexOf(element);
    let borrado = false;

    if (index !== -1) {
        array.splice(index, 1);
        borrado = true;
    } else {
        borrado = false;
    }

    return borrado;
}


function anadirReceta() {

    let inputNombre = document.getElementById("inputNombre");
    let inputFoto = document.getElementById("inputFoto");
    let inputLikes = document.getElementById("inputLikes");
    let inputCocinero = document.getElementById("inputCocinero");

    // crear nuevo objeto Receta
    var nuevaReceta = new Receta(inputNombre.value, inputFoto.value, inputLikes.value, inputCocinero.value);
    // añadirla al array de 'recetas'
    recetas.unshift(nuevaReceta);
    // mostrarla en pantalla
    mostrarReceta(nuevaReceta);

    // limpiar input del formulario
    inputNombre.value = "";
    inputFoto.value = "";
    inputLikes.value = "";
    inputCocinero.value = "";
}
