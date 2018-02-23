/*creamos recetas de prueba*/
var recetas = [];

function init() {

    var rPollo = new receta("pollo", "", 13, "Robin Food")
    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindron");

    console.log("1ª receta %o", rPollo);
}

function newReceta() {
    var nombre = document.getElementById("nombre").value;
    var foto = document.getElementById("foto").value;
    var likes = document.getElementById("likes").value;
    var cocinero = document.getElementById("chef").value;


    var contenedor = document.getElementById("contenedorRecetas")
    contenedor.innerHTML = ` <div class="col-sm-4 col-md-4">
            <div class="thumbnail">
            <span id="exit"><i class="fa fa-times-circle-o" aria-hidden="true"></i></span>
                <img src="${foto}" alt="...">
                <div class="caption">
                    <h3>${nombre}</h3>
                    <p class="likeCoci"><span class="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${likes}</span><span class="cocinero">${cocinero}</span></p>
                    <!-- Trigger the modal with a button -->
                    <p><i class="fa fa-eye" aria-hidden="true"></i><a data-toggle="modal" data-target="#myModal">Ingredientes</a></p>

                    <!-- Modal -->
                    <div id="myModal" class="modal fade" role="dialog">
                        <div class="modal-dialog">

                            <!-- Modal content-->
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Ingredientes</h4>
                                </div>
                                <div class="modal-body">
                                    <li>4 trozos de bacalao salado. </li>
                                    <li>5 dientes de ajo.</li>
                                    <li>1/2 guindilla.</li>
                                    <li>300 ml. de aceite virgen extra.</li>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>` +
        contenedor.innerHTML;
}
function eliminarBox(pos, e) {

            var boxEliminar = e.target.parentElement;
            boxEliminar.style.display = "none";
        }
