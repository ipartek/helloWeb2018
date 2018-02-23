/*Creamos unas recetas de pruebas*/


var recetas = [];




function init() {

    var rPollo = new Receta("Pollo", "https://img-global.cpcdn.com/002_recipes/bc40f95a58a933fb/400x400cq70/photo.jpg", 13, "RobinFood");

    rPollo.addingredientes("pollo");
    rPollo.addingredientes("ajo");
    rPollo.addingredientes("tomate");
    rPollo.addingredientes("chilindron");


    console.log("1º receta %o", rPollo);



    //crear mas recetas



    //añadirlas al array recetas
}

function anadir_receta() {

    var nombre = document.getElementById("nombre").value;
    var foto = document.getElementById("foto").value;
    var cocinero = document.getElementById("cocinero").value;
    var likes = document.getElementById("likes").value;
    var descripcion = document.getElementById("descripcion").value;

    var contenedor = document.getElementById("contenedor_recetas");
    contenedor.innerHTML = `<div class="columnas col-md-4">
                <div class="thumbnail text-center">
                    <img src="` + foto + `" alt="..." >
                     <span onclick="borrarCaja(##posicion)" class="close">X</span>
                    <div class="caption">
                        <h3>` + nombre + `</h3>
                        <p>` + descripcion + `.</p>
                        <i class="fa fa-heart" aria-hidden="true">` + likes + `</i> ` + cocinero + `
                        <p><a href="#pollo" class="btn btn-primary" role="button" data-toggle="modal" data-target="#pollo"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a>
                    </div>
                </div>
            </div>` + contenedor.innerHTML;


    var nuevaReceta = new Receta(nombre, foto, likes, cocinero);


    nuevaReceta.addingredientes("bacalao");
    nuevaReceta.addingredientes("ajo");
    nuevaReceta.addingredientes("tomate");
    nuevaReceta.addingredientes("patatas");
  console.log("2º receta %o", nuevaReceta);
}


function borrarCaja(){

    var close=document.getElementsByClassName("close").checked = true;


    close.innerHTML ="";


}
