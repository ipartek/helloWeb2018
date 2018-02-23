var recetas = [];

/* creamos unas recetas de prueba */
function init(){

    var rPollo = new Receta("Pollo","http://recetasdecocina.elmundo.es/wp-content/uploads/2016/10/receta-pollo-al-chilindron.jpg",13,"Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilidron");


    console.log("1º receta %s %o", rPollo.nombre , rPollo );


    //crear mas recetas

    //añadirlas al array recetas

}
