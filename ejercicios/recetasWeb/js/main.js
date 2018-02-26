var paella = new Receta("Paella", "https://www.goya.com/media/3961/shrimp-paella.jpg?quality=80", 16, "Carlos Argiñano");
paella.addIngrediente("Arroz");
var ensalada = new Receta("Ensalada", "https://t1.rg.ltmcdn.com/es/images/3/2/6/img_ensalada_de_verduras_variadas_57623_600.jpg", 6, "Alberto Chicote");
var recetas = [];
recetas.push(paella);
recetas.push(ensalada);

/* creamos unas recetas de prueba */
function init() {

    var idRecetas = document.getElementById("recetas");
    var lis = "";
    var i = 0;
    recetas.forEach(receta => {
        console.log("la receta %o", recetas[i])
        lis += `<div class="col-xs-12 col-sm-6 col-md-4 detalleReceta">
                <i class="fa fa-times-circle fa-2x" aria-hidden="true" onclick="eliminarReceta(` + i + `)"></i>
                <div class="thumbnail">
                    <img src="` + recetas[i].foto + `">
                    <div class="caption">
                        <h2>` + recetas[i].nombre + `</h2><p>
                        <i class="fa fa-heart likes" aria-hidden="true"></i><span class="likes">` + recetas[i].likes + `</span> <span class="cocinero">` + recetas[i].cocinero + `</span></p>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="showModal(${i})"><i class="fa fa-eye fa-2" aria-hidden="true"></i>
Ver Recetas</button>


                    </div>
                </div>
            </div>`
        i++;
    });
    idRecetas.innerHTML = lis;
}

function anadirReceta() {
    //comprobar que el formulario es correcto//
    var form = document.getElementById("formulario");
    if (form.checkValidity()) {
        console.log("Crear Receta");
        var nombreR = document.getElementById("nombre").value;
        var fotoR = document.getElementById("foto").value;
        var likesR = document.getElementById("likes").value;
        var cocineroR = document.getElementById("cocinero").value;
        var ingredientes = $("#ingredientes").val().split(/\r?\n/);
        console.log(ingredientes);
        var receta = new Receta(nombreR, fotoR, likesR, cocineroR);
        ingredientes.forEach(ingrediente=>{
            receta.addIngrediente(ingrediente);
        });
        recetas.unshift(receta);
        resetear();
        init();
    } else {
        console.warn("no se puede crear porque el formulario no es correcto")
    }



}

function eliminarReceta(pPosicion) {
    for (var i = pPosicion; i < recetas.length - 1; i++) {
        recetas[i] = recetas[i + 1];
    }

    recetas.pop();
    resetear();
    init()

}

function resetear() {
    document.getElementById("nombre").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("likes").value = "";
    document.getElementById("cocinero").value = "";

}

function cambiarDestino() {
    document.getElementById("cambiante").innerHTML = `<a href="#" onclick="cambiarOtraVez()">Anadir nueva receta</a>`
}

function cambiarOtraVez() {
    document.getElementById("cambiante").innerHTML = `<a href="#desplegable" onclick="cambiarDestino()">Anadir nueva receta</a>`
}
function showModal(indice){
    var recetaSeleccionada=recetas[indice];
    console.log("%o"+recetaSeleccionada);

    var ingredientes=recetaSeleccionada.ingredientes;
    var lis=""
    ingredientes.forEach( ingrediente => {
        lis+="<li>"+ingrediente+"</li>"

    });
    $("#listaIngredientes").html(lis);
}
