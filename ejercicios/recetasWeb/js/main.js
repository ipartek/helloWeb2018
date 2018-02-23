var recetas = [];

/* creamos unas recetas de prueba */
function init() {

    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");


    console.log("1º receta %s %o", rPollo.nombre, rPollo);


    //crear mas recetas

    //añadirlas al array recetas

}




function nuevaReceta() {
    var formulario = document.getElementById("formulario");
    var nombre = formulario.nombre.value;
    var foto = formulario.foto.value;
    var likes = formulario.likes.value;
    var cocinero = formulario.cocinero.value;

    /*var divReceta = `<div class="row">
                        <div class="col-sm-6 col-md-4 receta">
                            <div class="thumbnail">
                                <img src="${foto}" alt="pollo al chilindron">
                                <div class="caption">
                                    <h3>${nombre}</h3>
                                    <p><span id="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${likes}</span><span id="cocinero">${cocinero}</span></p>
                                    <hr>
                                    <p><a href="#" class="btn btn-primary" role="button" data-toggle="modal" data-target="#myModal"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                                </div>
                            </div>
                        </div>
                    </div>`;
*/

    var divReceta = `<div class="col-sm-6 col-md-4 receta">
                            <div class="cerrar"><span onclick="eliminarReceta(this)">X</span></div>
                            <div class="thumbnail">
                                <img src="${foto}" alt="pollo al chilindron">
                                <div class="caption">
                                    <h3>${nombre}</h3>
                                    <p><span id="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${likes}</span><span id="cocinero">${cocinero}</span></p>
                                    <hr>
                                    <p><a href="#" class="btn btn-primary" role="button" data-toggle="modal" data-target="#myModal"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                                </div>
                            </div>
                    </div>`;


    var contenedor = document.getElementById("containerRecetas");
    contenedor.innerHTML = divReceta + contenedor.innerHTML;


}


  function eliminarReceta(element){

    var recetas=document.getElementsByClassName("receta");
    for(var i=0; i<recetas.length; i++){
        console.debug(i);
    }
  }





