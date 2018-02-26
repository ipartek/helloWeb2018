var recetas =[];


function init(){
    var rPollo=new Receta("Pollo","https://www.google.es/imgres?imgurl=https%3A%2F%2Funareceta.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fpollo-asado.jpg&imgrefurl=https%3A%2F%2Funareceta.com%2Fpollo-asado%2F&docid=BD8dzgR0R2pb7M&tbnid=galsdItGyLivIM%3A&vet=10ahUKEwjj5KCfybvZAhVE6xQKHd8NDuMQMwhPKAEwAQ..i&w=1000&h=671&bih=662&biw=1366&q=pollo%20imagenes&ved=0ahUKEwjj5KCfybvZAhVE6xQKHd8NDuMQMwhPKAEwAQ&iact=mrc&uact=8",13,"Robin Food");
    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindron");
   pintarReceta(rPollo);

   // console.log("1º receta %o", rPollo);

}

function pintarReceta(receta){
    var contenedor = document.getElementById("contenedorRecetas");

    contenedor.innerHTML = `<div class="container" id="contenedorRecetas >
        <div class="row">
            <div class="col-xs-12 col-md-4">
                <span id="cerrar" onclick="eliminarReceta(event)">X</span>
                <div class="thumbnail">

                    <img src=${receta.foto}...">
                    <div class="caption">
                        <hr>

                        <h3>${receta.nombre}</h3>
                        <span><i class="fa fa-heart-o" aria-hidden="true"></i>  </span><span>${receta.likes}</span> <span>${receta.cocinero}</span>
                        <hr>

                        <a href="#" data-toggle="modal" data-target="#myModal1"><i class="fa fa-eye" aria-hidden="true"></i> ingredientes</a>

                    </div>
                </div>
            </div>` + contenedor.innerHTML;
}

function crear(){
   var nombre= document.getElementById("inlineFormInputNombre").value;
    console.log(nombre);
   var foto= document.getElementById("inlineFormInputFoto").value;
    var likes = document.getElementById("inlineFormInputLikes").value;
    var cocinero= document.getElementById("inlineFormInputCocinero").value;
    var rPollo1=new Receta(nombre, foto, likes, cocinero);
     pintarReceta(rPollo1)


}
function eliminarReceta(e){
      var boxReceta=e.target.parentElement;
                boxReceta.style.display="none";

}

