// JavaScript local
"use strict";

// variables globales
var recetas = [];
var idReceta = 0;

// variables del formulario
let form = document.getElementById("formulario");
let inputNombre = document.getElementById("inputNombre");
let inputFoto = document.getElementById("inputFoto");
let inputLikes = document.getElementById("inputLikes");
let inputCocinero = document.getElementById("inputCocinero");
let modal = $("#modal");

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

    crearRecetasMock();

    // muestra en UI las recetas del array 'recetas'
    recetas.forEach(receta => {
        mostrarReceta(receta);
    });

    // Mostar año actual junto al Copyright
    mostrarAnioActual();
}


/**
 *  Función para mostrar unas recetas predefinidas
 */
function crearRecetasMock() {
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
    nuevaReceta.querySelector(".likes").textContent = " " + receta.likes;
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
    var receta = recetas.filter(receta => receta.nombre == nombreReceta);
    var resultado = borrarElemento(recetas, receta[0]);
    if (!resultado) {
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


function anadirReceta(event) {

    if (validarFormulario()) {

        // rellenar datos no requeridos con valores por defecto
        if(inputLikes.value === "") {
            inputLikes.value = 0;
        }
        if(inputCocinero.value === ""){
            inputCocinero.value = "Anónimo";
        }

        // crear nuevo objeto Receta
        var nuevaReceta = new Receta(inputNombre.value, inputFoto.value, inputLikes.value, inputCocinero.value);
        // añadirla al array de 'recetas'
        recetas.unshift(nuevaReceta);
        // mostrarla en pantalla
        mostrarReceta(nuevaReceta);

        // limpiar input del formulario
        //limpiarFormulario();
        form.reset();
    } else {
        event.preventDefault();
        alert("Los datos introducidos en el formulario, no son correctos.")
        console.info("Datos de formulario incorrectos");
    }

}

/**
 *   Función para limpiar los input del formulario
 */
/*function limpiarFormulario() {

    // inputs del formulario
    var inputsForm = document.querySelectorAll("form input");

    inputsForm.forEach(input => {
        input.value = "";
    });
}*/


/**
 *   Función para validar los campos de entrada del formulario
 */
function validarFormulario() {

    let extImagen = inputFoto.value.split('.');
    console.log(extImagen);

    // var return
    let esCorrecto = true;

    if (inputNombre.value === "") {
        esCorrecto = false;
    }

    if (inputFoto.value === "") {
        esCorrecto = false;
        inputFoto.setCustomValidity("Debe insertar la URL de la imagen");
    } else if(extImagen[extImagen.length-1] !== "png" && extImagen[extImagen.length-1] !== "jpg" && extImagen[extImagen.length-1] !== "jpeg") {
        esCorrecto = false;
        inputFoto.setCustomValidity("El formato de la imágen es incorrecto");
    }

    if (inputLikes < 0) {
        esCorrecto = false;
    }

    return esCorrecto;

}

function showModal(elem) {

    var nombreReceta = elem.querySelector("div>h3").textContent;
    var receta = recetas.filter(receta => receta.nombre == nombreReceta);
    var ingredientes = receta[0].ingredientes;
    var listElements = "";

    // mostrar la ventana modal
    modal.modal("show");

    ingredientes.forEach(ingrediente => {
        listElements += "<li> - "+ingrediente+"</li>";
    });
    console.log(listElements);
    //document.getElementById("listaIngredientes").innerHTML = listElements;
    $("#listaIngredientes").html(listElements);

}





