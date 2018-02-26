var recetas =[];


function init(){
    crearRecetasMock();

    cargarRecetas();


}
function crearRecetasMock(){
     var rPolloCurry=new Receta("Pollo Curry","https://www.comedera.com/wp-content/uploads/2016/07/pollo-al-curry-receta.jpg",13,"Robin Food");
    rPolloCurry.addIngrediente("pollo");
    rPolloCurry.addIngrediente("ajo");
    rPolloCurry.addIngrediente("tomate");
    rPolloCurry.addIngrediente("jengibre de 2 cm");

  // pintarReceta(rPollo);

   // console.log("1º receta %o", rPollo);
    var tortillaPatatas = new Receta("Tortilla Patatas","https://es.rc-cdn.community.thermomix.com/recipeimage/flz0tm0r-a2069-162740-cfcd2-zlr8kinc/733f35bb-e440-4c4f-9b87-949a0e20e384/main/tortilla-de-patatas-con-cebolla.jpg",45,"Karlos Argiñano");
    tortillaPatatas.addIngrediente("Patatas");
    tortillaPatatas.addIngrediente("Huevos");

    //añadirlas al array recetas
    recetas.push(rPolloCurry);
    recetas.push(tortillaPatatas);
}

function cargarRecetas(){

   var contenedorRecetas = document.getElementById("contenedorRecetas");


    recetas.forEach( (receta, index) => {

    contenedorRecetas.innerHTML = `<div class="col-xs-12 col-md-4">
                <span id="cerrar"onclick="eliminarReceta(event)">X</span>
                <div class="thumbnail">

                    <img src="${receta.foto}" alt="...">
                    <div class="caption">
                        <hr>

                        <h3>${receta.nombre} </h3>
                        <span><i class="fa fa-heart-o" aria-hidden="true"></i>  </span><span id="likes">${receta.likes}</span> <span id="cocinero">${receta.cocinero}</span>
                        <hr>

                        <a href="#" data-toggle="modal" data-target="modal"onclick="showModal(${index})"><i class="fa fa-eye" aria-hidden="true"></i> ingredientes</a>

                    </div>
                </div>

            </div>` + contenedorRecetas.innerHTML;
});
}


function eliminarReceta(e){
      var boxReceta=e.target.parentElement;
                boxReceta.style.display="none";

}

function showModal(index){

    var recetaSeleccionada = recetas[index];
    console.debug('showModal %o' + recetaSeleccionada );

    $('#modalIngredientes').modal('show');

    var ingredientes = recetaSeleccionada.ingredientes;
    var lis = "";
    ingredientes.forEach( ing => {
            lis += "<li>"+ing+"</li>";
    });
    $("#listaIngredientes").html(lis);


}
function showForm(){
    document.getElementById("loginForms").style.display="block";
}
function hideForm(){
       document.getElementById("loginForms").style.display="none";
}



