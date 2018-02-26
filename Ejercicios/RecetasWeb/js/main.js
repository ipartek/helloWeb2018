/* Creamos recetas de prueba */
var recetas = [];
var cont = 0;

var inicioRecetas = document.getElementById("Inicio-recetas");




function init() {


    cargarRecetas();

    pintar();
}

function cargarRecetas() {
    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");

    sumaPlato(rPollo);

    var rPollo2 = new Receta("Pollo2", "https://proximaati-com.secure.footprint.net/Assets/Modules/Editorial/Article/Images/receta-pavo-navidad-5-size-3.jpg", 13, "Robin Food");

    rPollo2.addIngrediente("pollo");


    sumaPlato(rPollo2);


    var rPollo3 = new Receta("Pollo3", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");



    rPollo3.addIngrediente("chilidron");
    sumaPlato(rPollo3);
}

function borrar(num) {
    var longitudRecetas = recetas.length;
    var reset = false;
    for (i = 0; i < longitudRecetas; i++) {
        console.log(recetas[i]);
        if (recetas[i].cont == num) {
            recetas[i] = recetas[i + 1];

            reset = true;
        } else if (reset) {
            recetas[i] = recetas[i + 1];
        }
    }
    recetas.pop();
    pintar();
}
//añadimos datos del form al array
function anadirPlato() {
    var form = document.getElementById("formulario");
    console.log(form);
    if (form.checkValidity()) {
        var nombre = document.getElementById("platoNombre");
        var foto = document.getElementById("platoFoto");
        var like = document.getElementById("platoLike");
        var cocinero = document.getElementById("platoCocinero");
        var rPlato = new Receta(nombre.value, foto.value, like.value, cocinero.value);
        sumaPlato(rPlato);
        pintar();
        form.reset();

    } else {
        console.log("rellena campos");
    }

}
//sumar el plato al principio del array
function sumaPlato(plato) {

    recetas.unshift(plato);

}

function pintar() {
    inicioRecetas.innerHTML = "";
    var longitudRecetas = recetas.length;

    for (var i = 0; i < longitudRecetas; i++) {



        var divReceta = `<!-- comienzo del array recetas con sus div -->
            <div class=" col-md-4 " data-type=${recetas[i].cont}>
                <span onclick="borrar(${recetas[i].cont})"> <i class="fa fa-times-circle" aria-hidden="true"></i></span>
                <div class="thumbnail div-contenedor-recetas">
                    <img src="${recetas[i].foto}" alt="foto">
                    <div class="caption">
                        <h3>${recetas[i].nombre}</h3>
                        <p><span class="left-span-likes"><i class="fa fa-heart" aria-hidden="true"></i>${recetas[i].likes}</span><span class="right-span-cocinero">${recetas[i].cocinero}</span></p>

                        <a href="#" class="btn btn-primary" role="button" data-toggle="modal" onclick="showModal(${recetas[i].cont})">
                          <i class="fa fa-eye" aria-hidden="true"></i> Ingredientes
                        </a>

                      </div>

                </div>
            </div>
             <!--Final del array recetas div-->`

        inicioRecetas.innerHTML += divReceta;



    }
}

function showModal(index) {
    var longitudRecetas = recetas.length;
    var recetaSeleccionada = "";
    for (i = 0; i < longitudRecetas; i++) {
        if (recetas[i].cont == index) {
            recetaSeleccionada = recetas[i];
        }
    }

    console.log(recetaSeleccionada);
    $('#modalIngredientes').modal('show');
    var ingredientes = recetaSeleccionada.ingredientes;
    var lis = "";
    ingredientes.forEach(ing => {
        lis += "<li>" + ing + "</li>";
    });
    $("#listaIngredientes").html(lis);


}
