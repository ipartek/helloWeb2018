var recetas = [];



/* creamos unas recetas de prueba */
function init() {

    var d = new Date();
    var n = d.getFullYear();

    currentYear = document.getElementById("año");
    currentYear.innerHTML = n;



    var rTiramisu = new Receta("Tiramisú", "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/2/4/2/RX-FNM_030111-Sugar-Fix-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371597326801.jpeg", 13, "Eva Argiñano");
    rTiramisu.addIngrediente("mascarpone");
    rTiramisu.addIngrediente("cafe");
    rTiramisu.addIngrediente("sobaos");

    console.log("1º receta %s %o", rTiramisu.nombre, rTiramisu);



    var rPollo = new Receta("Pollo al chilindrón", "https://todocooking.com/wp-content/uploads/2015/09/Pollo-al-chilindron3.jpg", 16, "Arzak");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");

    var rBacalao = new Receta("Pollo al chilindrón", "https://www.miscosillasdecocina.com/wp-content/uploads/2014/02/bacalao-pilpil-e1491084486535.jpg", 10, "Martin Berasategi");

    rBacalao.addIngrediente("bacalao");
    rBacalao.addIngrediente("ajo");
    rBacalao.addIngrediente("sal");

    recetas.push(rTiramisu);
    recetas.push(rPollo);
    recetas.push(rBacalao);

    cargarRecetas();
}

function cargarRecetas() {
    var contenedor = document.getElementById("containerRecetas");

    contenedor.innerHTML = "";
    var recetasHtml = "";

    recetas.forEach((Receta, index) => {
        recetasHtml += `<div class="col-sm-6 col-md-4 receta">
                            <div class="cerrar"><span onclick="eliminarReceta(this, ${index})">X</span></div>
                            <div class="thumbnail">
                                <img src="${Receta.foto}" alt="${Receta.nombre}">
                                <div class="caption nombre">
                                    <h3>${Receta.nombre}</h3>
                                    <p><span class="likes"><i class="fa fa-heart" aria-hidden="true"></i> ${Receta.likes}</span><span class="cocinero">${Receta.cocinero}</span></p>
                                    <hr>
                                    <p><a href="#" class="btn btn-primary" role="button" data-toggle="modal" onclick="showModal(${index})"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                                </div>
                            </div>
                    </div>`;
    });

    contenedor.innerHTML = recetasHtml;


}



function nuevaReceta() {


    var formulario = document.getElementById("formulario");

    if (formulario.checkValidity()) {
        var nombre = formulario.nombre.value;
        var foto = formulario.foto.value;
        var likes = formulario.likes.value;
        var cocinero = formulario.cocinero.value;
        var stringIngredientes = formulario.ingredientes.value;
        var ingredientes =[];
        ingredientes= stringIngredientes.split("\n");
        var nuevo = new Receta(nombre, foto, likes, cocinero);
        for(var i=0;i<ingredientes.length;i++){
            nuevo.addIngrediente(ingredientes[i]);
        }
        recetas.unshift(nuevo);
        cargarRecetas();

    } else {
        console.warn("No se puede cargar el formulario porque no es válido");
    }


    //Para vaciar todos los campos del formulario
    formulario.reset();



}


function eliminarReceta(elem, posicion) {

    console.log("indice %i, objeto %o", posicion, elem);
    elem.parentElement.parentElement.style.display = 'none';
    recetas.splice(posicion, 1);
}


function showModal(index) {

    var recetaSeleccionada = recetas[index];
    console.debug('showModal %o' + recetaSeleccionada);

    $('#modalIngredientes').modal('show');

    var ingredientes = recetaSeleccionada.ingredientes;
    var lis = "";
    ingredientes.forEach(ing => {
        lis += "<li>" + ing + "</li>";
    });
    $("#listaIngredientes").html(lis);


}


function mostrarFormulario() {
    var pie = document.getElementById("pie");
    if (pie.style.bottom == "49px") {
        pie.style.bottom = "-420px";
    } else {
        pie.style.bottom = "49px";
    }

    pie.style.transition = "1s";

}
