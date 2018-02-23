/* Variables globales */

var recetas = [];




/* Creamos unas recetas de pruebas */

function init() {



    //console.log("1º Receta %o", rIngredientes);



}

//crear mas recetas

function crearReceta() {
    var nombre = document.getElementById("nombre").value;
    var foto = document.getElementById("foto").value;
    var descripcion = document.getElementById("descripcion").value;
    var cocinero = document.getElementById("cocinero").value;

    var contenedor = document.getElementById("contenedorRecetas");

    contenedor.innerHTML = `<div class="col-sm-6 col-md-4">
                                <div class="thumbnail">
                                    <img src="` + foto + `" alt="foto">
                                    <div class="caption">
                                        <h3>` + nombre + `.</h3>
                                        <p>` + descripcion + `</p>
                                        <i class="fa fa-heart" aria-hidden="true"></i>&nbsp;16 Likes<p>
                                        <a class="links" href="pollo" data-toggle="modal" data-target="#conejo">Ingredientes</a></p>
                                        <h5>` + cocinero + `</h5>
                                    </div>
                                </div>
                            </div>` + contenedor.innerHTML;

     var rIngredientes = new receta(nombre, foto, descripcion, cocinero);

    rIngredientes.addIngrediente("conejo");
    rIngredientes.addIngrediente("tomate");
    rIngredientes.addIngrediente("cebolla");
    rIngredientes.addIngrediente("pimietos");
    rIngredientes.addIngrediente("chilindrón");

    }

//añadirlas al array
