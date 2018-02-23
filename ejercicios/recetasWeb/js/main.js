var recetas = [];

var dinamico = `<div id="receta" class="col-xs-12 col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <img id="foto" src="##FOTO##" alt="foto">
                        <div class="caption">
                            <h3 id="tituloReceta">##NOMBRE##</h3>
                            <div class="container-flex">
                                <span id="likes"><i class="fa fa-heart text-danger" aria-hidden="true"></i>##LIKES##</span>
                                <span id="cocinero">##COCINERO##</span>
                            </div>
                            <p><a href="#" class="btn btn-primary btn-block" role="button" data-toggle="modal" data-target="#modal-receta">Ingredientes</a></p>
                        </div>

                        <!-- Modal video Receta-->
                        <div class="modal fade" id="modal-receta" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                        <h4 class="modal-title" id="myModalLabel">Prueba</h4>
                                    </div>
                                    <div class="modal-body">
                                        <!-- 4:3 aspect ratio -->
                                        <div class="embed-responsive embed-responsive-4by3"></div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- fin ventana modal -->
                    </div>
                    <!-- fin thumbnail -->
                </div>`


/* creamos unas recetas de prueba */

function init() {
    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "David de Jorge");
    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindrón");

    console.log("1º receta %o", rPollo);
    //crear mas recetas

    var rSalmon = new Receta("Salmón", "https://t2.rg.ltmcdn.com/es/images/1/7/4/img_salmon_al_cilantro_34471_600.jpg", 25, "Arzak");
    rSalmon.addIngrediente("salmón");
    rSalmon.addIngrediente("perejil");
    rSalmon.addIngrediente("limon");

    console.log("2º receta %o", rSalmon);


    var rAlubias = new Receta("Alubias", "http://1.bp.blogspot.com/_YsHFEIDj5bg/SQy83zgLajI/AAAAAAAAAoE/k9ccaecoMrQ/s640/019.JPG", 18, "Arguiñano");
    rAlubias.addIngrediente("abubia");
    rAlubias.addIngrediente("chorizo");
    rAlubias.addIngrediente("morcilla");
    rAlubias.addIngrediente("tocino");

    console.log("3 receta %o", rAlubias);

    var rPaella = new Receta("Paella", "https://www.comedera.com/wp-content/uploads/2015/06/receta-paella-valenciana-1.jpg", 9, "Berasategui");
    rPaella.addIngrediente("arroz");
    rPaella.addIngrediente("pimiento");
    rPaella.addIngrediente("azafran");
    rPaella.addIngrediente("langostino");

    console.log("4º receta %o", rPaella);

    // añadirlas al array de recetas

    recetas.push(rPollo);
    recetas.push(rSalmon);
    recetas.push(rAlubias);
    recetas.push(rPaella);

    pintarTodos();
}


function pintarTodos(){
    var detalleReceta;
    recetas.forEach(function (elem) {
        detalleReceta = dinamico;
        pintarReceta(elem);
}
function pintarReceta(elem) {
        detalleReceta = detalleReceta.replace('##NOMBRE##', elem.nombre);
        detalleReceta = detalleReceta.replace('##FOTO##', elem.foto);
        detalleReceta = detalleReceta.replace('##LIKES##', elem.likes);
        detalleReceta = detalleReceta.replace('##COCINERO##', elem.cocinero);
        cntRecetas.innerHTML = detalleReceta + cntRecetas.innerHTML;


    });
}

function añadirReceta() {
    var cntRecetas = document.getElementById("cntRecetas");


    var receta = new Receta();
    receta.nombre = document.getElementById("nombreForm").value;
    receta.foto = document.getElementById("fotoForm").value;
    receta.likes = document.getElementById("likesForm").value;
    receta.cocinero = document.getElementById("cocineroForm").value;

    recetas.unshift(receta);

    cntRecetas.innerHTML = dinamico + cntRecetas.innerHTML;
    console.log(cntRecetas);
}
