var recetas = [];

var dinamico = `<div id="receta" class="recCompleta col-xs-12 col-sm-6 col-md-4">
                    <div class="thumbnail">
                        <span onclick="borrarReceta(##POSICION##)" class="close">&times;</span>
                        <img id="foto" src="##FOTO##" alt="foto">
                        <div class="caption">
                            <h3 id="tituloReceta">##NOMBRE##</h3>
                            <div class="container-flex">
                                <span id="likes"><i class="fa fa-heart text-danger" aria-hidden="true"></i>##LIKES##</span>
                                <span id="cocinero">##COCINERO##</span>
                            </div>
                            <p><a href="#" class="btn btn-primary btn-block" onclick="pintarIngredientes(##POSICION##)" role="button" data-toggle="modal" data-target="#modal-receta##POSICION##"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                        </div>

                        <!-- Modal video Receta-->
                        <div class="modal fade" id="modal-receta##POSICION##" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                        <h4 class="modal-title" id="myModalLabel">Ingredientes</h4>
                                    </div>
                                    <div class="modal-body">
                                        <!-- 4:3 aspect ratio -->
                                        <div class="embed-responsive embed-responsive-4by3">
                                            <button type="button" class="btn btn-default" onclick="añadirIngrediente(##POSICION##)"><i class="fa fa-plus-square fa-2x" aria-hidden="true"></i></button> <input id="nuevoIngre##POSICION##" type="text" name="ingrediente" required placeholder="Añadir ingrediente">
                                            <div id="cntIngredientes##POSICION##" class="cntIngredientes"></div>

                                        </div>
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

    //crear mas recetas

    var rSalmon = new Receta("Salmón", "https://t2.rg.ltmcdn.com/es/images/1/7/4/img_salmon_al_cilantro_34471_600.jpg", 25, "Arzak");
    rSalmon.addIngrediente("salmón");
    rSalmon.addIngrediente("perejil");
    rSalmon.addIngrediente("limon");

    var rAlubias = new Receta("Alubias", "http://1.bp.blogspot.com/_YsHFEIDj5bg/SQy83zgLajI/AAAAAAAAAoE/k9ccaecoMrQ/s640/019.JPG", 18, "Arguiñano");
    rAlubias.addIngrediente("alubias");
    rAlubias.addIngrediente("chorizo");
    rAlubias.addIngrediente("morcilla");
    rAlubias.addIngrediente("tocino");

    var rPaella = new Receta("Paella", "https://www.comedera.com/wp-content/uploads/2015/06/receta-paella-valenciana-1.jpg", 9, "Berasategui");
    rPaella.addIngrediente("arroz");
    rPaella.addIngrediente("pimiento");
    rPaella.addIngrediente("azafran");
    rPaella.addIngrediente("langostino");

    // añadirlas al array de recetas

    recetas.push(rPollo);
    recetas.push(rSalmon);
    recetas.push(rAlubias);
    recetas.push(rPaella);
    pintarRecetas();
}

function pintarRecetas() {
    recetas.forEach(function (elem, index) {
        pintarReceta(elem, index);
    });
}

function pintarReceta(elem, i) {
    var detalleReceta = dinamico;
    detalleReceta = detalleReceta.split('##POSICION##').join(i);
    detalleReceta = detalleReceta.replace('##NOMBRE##', elem.nombre);
    detalleReceta = detalleReceta.replace('##FOTO##', elem.foto);
    detalleReceta = detalleReceta.replace('##LIKES##', elem.likes);
    detalleReceta = detalleReceta.replace('##COCINERO##', elem.cocinero);
    cntRecetas.innerHTML = detalleReceta + cntRecetas.innerHTML;
}

function añadirReceta() {
    var cntRecetas = document.getElementById("cntRecetas");

    var receta = new Receta();
    receta.nombre = document.getElementById("nombreForm").value;
    receta.foto = document.getElementById("fotoForm").value;
    receta.likes = document.getElementById("likesForm").value;
    receta.cocinero = document.getElementById("cocineroForm").value;
    receta.ingredientes = "";

    recetas.push(receta);

    pintarReceta(receta, recetas.length - 1);
}

function borrarReceta(pos) {
    console.log(recetas[pos]);
    recetas.splice(pos, 1);
    console.log(recetas);
    cntRecetas.innerHTML = "";
    pintarRecetas();
}

function pintarIngredientes(pos) {
    var cntIngredientes = document.getElementById("cntIngredientes" + pos);
    cntIngredientes.innerHTML = "";
    console.log(recetas[pos].ingredientes);
    console.log(recetas[pos].ingredientes);
    if (recetas[pos].ingredientes != "") {
        recetas[pos].ingredientes.forEach(function (ingre) {
            pintarIngrediente(ingre, pos);
        });
    }
}

function pintarIngrediente(ingre, pos) {
    //    var cntIngredientes = document.getElementById("cntIngredientes" + pos);

    var cntIngredientes = document.querySelector('div[id="cntIngredientes' + pos + '"]');
    cntIngredientes.innerHTML += ingre + "<br>";
}

function añadirIngrediente(pos) {
    var nuevoIngre = document.getElementById("nuevoIngre" + pos).value;

    recetas[pos].addIngrediente(nuevoIngre);
    pintarIngredientes(pos);
}
