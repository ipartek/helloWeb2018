/* Creamos recetas de prueba */
var recetas = [];
var cont = 0;

var inicioRecetas = document.getElementById("Inicio-recetas");




function init() {

    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");

    sumaPlato(rPollo);

    var rPollo2 = new Receta("Pollo2", "https://proximaati-com.secure.footprint.net/Assets/Modules/Editorial/Article/Images/receta-pavo-navidad-5-size-3.jpg", 13, "Robin Food");

    rPollo2.addIngrediente("pollo");
    rPollo2.addIngrediente("ajo");
    rPollo2.addIngrediente("tomate");
    rPollo2.addIngrediente("chilidron");


    sumaPlato(rPollo2);


    var rPollo3 = new Receta("Pollo3", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");


    rPollo3.addIngrediente("pollo");
    rPollo3.addIngrediente("ajo");
    rPollo3.addIngrediente("tomate");
    rPollo3.addIngrediente("chilidron");
    sumaPlato(rPollo3);



    pintar();
}
function borrar(num){
    var longitudRecetas = recetas.length;
    for(i=0;i<longitudRecetas;i++){
        console.log(recetas[i]);
        if(recetas[i].cont==num){
            recetas.pop(recetas[i]);
        }
    }
    pintar();
}
//añadimos datos del form al array
function anadirPlato() {

    var nombre = document.getElementById("platoNombre");
    var foto = document.getElementById("platoFoto");
    var like = document.getElementById("platoLike");
    var cocinero = document.getElementById("platoCocinero");
    var rPlato = new Receta(nombre.value, foto.value, like.value, cocinero.value);
    sumaPlato(rPlato);
    pintar();
    nombre.value = "";
    foto.value = "";
    cocinero.value = "";
    like.value = "";
}
//sumar el plato al principio del array
function sumaPlato(plato) {

    recetas.unshift(plato);

}

function pintar() {
    inicioRecetas.innerHTML = "";
    var longitudRecetas = recetas.length;

    for (var i = 0; i < longitudRecetas; i++) {

        var ingredientes = "";
        for (var p = 0; p < recetas[i].ingredientes.length; p++) {
            var modal = `<li>"${recetas[i].ingredientes[p]}"</li>`;
            ingredientes += modal;
        }

        var divReceta = `<!-- comienzo del array recetas con sus div -->
            <div class=" col-md-4 " data-type=${recetas[i].cont}>
<span onclick="borrar(${recetas[i].cont})"> <i class="fa fa-times-circle" aria-hidden="true"></i></span>
                <div class="thumbnail div-contenedor-recetas">
                    <img src="${recetas[i].foto}" alt="foto">
                    <div class="caption">
                        <h3>${recetas[i].nombre}</h3>
                        <p><span class="left-span-likes"><i class="fa fa-heart" aria-hidden="true"></i>${recetas[i].likes}</span><span class="right-span-cocinero">${recetas[i].cocinero}</span></p>

                        <button type="button" class="btn btn-primary btn-lg btn-block " data-toggle="modal" data-target="#myModal">
                          <i class="fa fa-eye" aria-hidden="true"></i> Ingredientes
                        </button>
                        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="btn btn-secondary btn-lg btn-block" class="close" data-dismiss="modal" aria-label="Close">    <span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel">Ingredientes</h4>
                                    </div>
                                    <div class="modal-body">
                                            <ul>
                                            ${ingredientes}
                                             </ul>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <!--Final del array recetas div-->`

        inicioRecetas.innerHTML += divReceta;


    }
}
