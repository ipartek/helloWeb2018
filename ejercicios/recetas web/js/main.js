"use strict";
var recetas = [];

/* Creamos unas recetas de prueba */
function init(){

    crearRecetasMock();

    cargarRecetas();
}

/**
* Mostramos Recetas por Pantalla
*/

function cargarRecetas(){


    var contenedorRecetas = document.getElementById("containerRecetas");
    contenedorRecetas.innerHTML = "";
    var recetasHtml = "";

    recetas.forEach( (receta, index) => {

        console.log( "%i receta %o", index, receta );
        recetasHtml += `<div class="col-sm-6 col-md-4 receta">
                           <div class="cerrar"><span onclick="eliminarReceta(this, ${index} )">X</span></div>
                            <div class="thumbnail">
                                <img src="${receta.foto}" alt="${receta.nombre}">
                                <div class="caption">
                                    <h3>${receta.nombre}</h3>
                                    <p>
                                        <span class="likes"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i>${receta.likes}</span>
                                        <span class="cocinero">${receta.cocinero}</span></p>
                                    <hr>
                                    <p><a href="#" class="btn btn-primary" role="button" data-toggle="modal" onclick="showModal(${index})"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                                </div>
                            </div>
                        </div>`;

    });

    contenedorRecetas.innerHTML = recetasHtml;

}

    
    

/**
*    Creamos varias recetas ficticias
*/
function crearRecetasMock(){

    var rEnsalada = new Receta("rEnsalada", "http://zallo.com/images/es-ES/blog/recetas/receta_ensalada_bermeana.jpg", 13, "Eneko Atxa");

    rEnsalada.addIngrediente("huevo");
    rEnsalada.addIngrediente("atun");
    rEnsalada.addIngrediente("aceite");
    rEnsalada.addIngrediente("vinagre");

    // console.log("1º receta %o", rEnsalada);


    // Crear mas recetas
    var pastelChocolate = new Receta("Pastel de Chocolate", "https://www.pequerecetas.com/wp-content/uploads/2016/11/pastel-de-chocolate.jpg", 45, "David de Jorge");
    pastelChocolate.addIngrediente("Cacao");
    pastelChocolate.addIngrediente("Azucar");
   
    

    // Añadirlas al array recetas
    recetas.push(rEnsalada);
    recetas.push(pastelChocolate);

    console.debug("Recetas Creadas");
}



function nuevaReceta(){
    console.log("nuevaReceta click");

    //comprobar que el formulario es correcto antes de crear
    var form = document.getElementById("formulario");
    if ( form.checkValidity() ){
        console.debug('crear receta');
        //recoger values de los inputs
        var nombre   = document.getElementById("nombre").value;
        var foto     = document.getElementById("foto").value;
        var likes    = document.getElementById("likes").value;
        var cocinero = document.getElementById("cocinero").value;
        //crear receta nueva
        var newReceta = new Receta(nombre, foto, likes, cocinero);

        //añadir al array
        recetas.unshift(newReceta);

        //pintar nueva receta
        cargarRecetas();

        //limpiar campos del formulario
        form.reset();

    }else{
        console.warn('No se puede crear porque form no correcto');
    }

}


function eliminarReceta(elem, posicion ){
    console.log("eliminarReceta click posicion %i", posicion );

    elem.parentElement.parentElement.style.display = 'none';
    recetas.splice(posicion,1);



}


function showModal(index){

    var recetaSeleccionada = recetas[index];
    console.debug('showModal %o' + recetaSeleccionada );

    $('#modalIngredientes').modal('show');

    var ingredientes = recetaSeleccionada.ingredientes;
    var lis = "";
    ingredientes.forEach( ing => {
            lis += "<li>"+ing+"</li>";
    });
    $("#listaIngredientes").html(lis);


}
