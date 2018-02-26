var aRecetas = [];
var inicioRecetas = document.getElementById("recetas_lista");
var contenedor= document.getElementById("recetas_lista");





function init() {

    var rPollo = new Receta("Pollo", "http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");

    sumarReceta(rPollo);

    var rCocido = new Receta("Cocido", "https://i.ytimg.com/vi/R-9ZoARMdww/maxresdefault.jpg", 2, "Eusebio Plaza");

	sumarReceta(rCocido);


    var rMigas = new Receta("Migas", "https://www.erv.es/blog/wp-content/uploads/2015/01/seguro_anulacion_viaje_caceres_gastronomia.jpg", 24, "Pepa Sanchez");

	//añado las recetas base al array
    sumarReceta(rMigas);

	//pinto las recetas base
	pintarRecetas();
}


function anadirReceta() {

    console.log("nueva receta click");

    //comprobar que el formulario es correcto antes de añadirReceta
    var form = document.getElementById("formulario");
    if(form.checkValidity() ){
        console.log("crear receta");
        //recojo los valores de los input
        var nombre = document.getElementById("nombreInput").value;
        var foto = document.getElementById("fotoInput").value;
        var likes = document.getElementById("likesInput").value;
        var cocinero = document.getElementById("cocineraInput").value;

        //para crear nuevas recetas
        var nuevaReceta = new Receta(nombre, foto, likes, cocinero);


        //añado la nueva receta al array
        sumarReceta(nuevaReceta);

        //añado la receta al container del HTML
        pintarRecetas();

        //límpia el input
//        nombre.innerHTML= "";
//        foto.innerHTML="";
//        likes.innerHTML="";
//        cocinero.innerHTML="";

    }else{
        console.log("no se puede crear receta porque nos faltan input");
    }




}

//añado la receta al principio del array
function sumarReceta(nuevaReceta) {
	aRecetas.unshift(nuevaReceta);
	return aRecetas;
}

//borro la receta
function borrarReceta(elem,indice) {

    //elimino el div de la receta
    var x = event.target;
	var padre = x.parentNode;
	var padre2 = padre.parentNode;
	var padre3 = padre2.parentNode;
	var padre4 = padre3.parentNode;
	var padre5 = padre4.parentNode;
	padre5.removeChild(padre4);

    //elimino el onjeto del array
    recetas.splice(indice,1);

}


function pintarRecetas() {

	//limpio el container para que no me salgan repetidas las recetas
    inicioRecetas.innerHTML = "";

	//recorro el array para poder pintar las nuevas recetas
    var recorrerRecetas = aRecetas.length;

    for (var i = 0; i < recorrerRecetas; i++) {
			var recetaNueva = `
            <div class="col-sm-4" id="recetilla">
                    <div class="thumbnail">
                       <div>
						<button type="button" class="close" onclick="borrarReceta(this, ${i})">
						  <span>&times;</span>
						</button>
						</div>
						<img src="${aRecetas[i].foto}" alt="foto">
						<p><strong>${aRecetas[i].nombre}</strong></p>
                        <p><i class="fa fa-heart"></i> ${aRecetas[i].likes}</p>
						<p>${aRecetas[i].cocinero}</p>
                        <button type="button" class="btn btn-secondary btn-lg" data-toggle="modal" data-target="#modal">
                          <i class="fa fa-eye" aria-hidden="true"></i> INGREDIENTES
                        </button>

                       <!-- Modal -->
                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h2 class="modal-title" id="exampleModalLabel">INGREDIENTES</h2>
                      </div>
                      <div class="modal-body">
                          <ul class="ingredientes">
                              <li>1 pollo</li>
                              <li>1 cebolla</li>
                              <li>1 pimiento verde</li>
                              <li>5 dientes de ajo</li>
                              <li>2 tomates</li>
                              <li>2 patatas</li>
                              <li>carne de 4 pimientos choriceros</li>
                              <li>2 rebanadas de pan</li>
                              <li>harina</li>
                              <li>1 vaso de vino blanco</li>
                              <li>1 vaso de caldo o de agua</li>
                              <li>vinagre</li>
                              <li>aceite virgen extra</li>
                              <li>sal</li>
                              <li>pimienta</li>
                              <li>perejil</li>
                          </ul>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>`;

		//añado la nueva receta al contenedor, respetando las que ya existían
        inicioRecetas.innerHTML += recetaNueva;


    }
}

