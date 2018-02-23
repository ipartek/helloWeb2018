var recetas = [];

/* Creamos unas recetas de prueba */

function init() {

    var rPollo = new Receta("rPollo", "https://www.petitchef.es/imgupl/recipe/pollo-al-chilindron-con-verduras--md-100954p148148.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindron");

    // console.log("1º receta %o", rPollo);


    // Crear mas recetas

    // Añadirlas al array recetas

}

function crear() {

    var nombre = document.getElementById("inlineFormInputName").value;
    console.log(nombre);
    var foto = document.getElementById("inlineFormInputImage").value;
    console.log(foto);
    var likes = document.getElementById("inlineFormInputLikes").value;
    console.log(likes);
    var cocinero = document.getElementById("inlineFormInputChef").value;
    console.log(cocinero);

    var contenedor = document.getElementById("contenedorRecetas");

    contenedor.innerHTML = `<div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <span class="close" onclick="eliminarBox(event)">x</span>
                    <img src=${foto} alt="Direccion de imagen">
                    <hr>
                    <div class="caption">
                        <h3>${nombre}</h3>
                        <p> <span><i class="fa fa-heart" aria-hidden="true"></i>${likes}</span> <span>${cocinero}</span> </p>
                        <hr>

                        <!-- Button trigger modal -->
                        <a data-toggle="modal" data-target="#modal1">
                            <p><i class="fa fa-eye" aria-hidden="true"></i>Ingredientes</p>
                        </a>

                        <!-- Modal -->
                        <div class="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="modal1Label">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="modal1Label">Ingredientes del ${nombre}</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <ul>
                                                <li>Ingrediente 1</li>
                                                <li>Ingrediente 2</li>
                                                <li>Ingrediente 3</li>
                                                <li>Ingrediente 4</li>
                                                <li>Ingrediente 5</li>
                                                <li>...</li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Acaba boton modal apertura de ingredientes -->


                    </div>
                </div>
            </div>` + contenedor.innerHTML;

}


function eliminarBox(e) {
    var boxEliminar = e.target.parentElement;
    boxEliminar.style.display = "none";
}
