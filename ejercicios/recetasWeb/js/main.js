var recetas = [];
var divReceta = '<div class="col-sm-4"><div class="thumbnail"><img src="##foto##" alt="fotoReceta" width="400" height="300"><p><strong>##nombre##</strong></p><p><i class="fa fa-heart" aria-hidden="true"></i>##likes## ##cocinero##</p><button class="btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-eye" aria-hidden="true">Ingredientes</i></button></div></div>';

/*crear unas recetas de prueba*/

function init() {

    var rPollo = new Receta("Pollo", "https://www.gallinablanca.es/files/thumbs/f8a018386d588664842dac447c236784ba7f2479_r476_261_5.jpg", 13, "Arzak");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindrom");

    var rReceta2 = new Receta("Huevos cocotte con tomates secos", "https://image.afcdn.com/story/20180219/recetas-faciles-con-pocos-ingredientes-recetas-con-pocos-ingredientes-recetas-con-3-ingredientes-1147425_origincxt0cyt23cxb368cyb476.jpg", 13, "Arzak");

    rReceta2.addIngrediente("6 huevos");
    rReceta2.addIngrediente("150 g de tomates secos");
    rReceta2.addIngrediente("20 cl de nata líquida para cocinar");
    rReceta2.addIngrediente("Sal");
    rReceta2.addIngrediente("Pimienta");

    var rReceta3 = new Receta("Sopa de frutas del bosque y merengue", "https://image.afcdn.com/story/20180219/recetas-faciles-con-pocos-ingredientes-recetas-con-pocos-ingredientes-recetas-con-3-ingredientes-1147426_origincxt0cyt55cxb368cyb498.jpg", 13, "Arzak");

    rReceta3.addIngrediente("600 g de frutas del bosque");
    rReceta3.addIngrediente("150 g de azúcar");
    rReceta3.addIngrediente("4,5 cl de sirope de granadina");
    rReceta3.addIngrediente("25 cl de agua");

    var rReceta4 = new Receta("Perlas de melón", "https://image.afcdn.com/story/20180219/recetas-faciles-con-pocos-ingredientes-recetas-con-pocos-ingredientes-recetas-con-3-ingredientes-1147428_origincxt0cyt32cxb368cyb469.jpg", 13, "Arzak");

    rReceta4.addIngrediente("1 melón");
    rReceta4.addIngrediente("15 cl de nata líquida entera");
    rReceta4.addIngrediente("3 cucharadas soperas de nuez de coco rallado");
    rReceta4.addIngrediente("20 cl de leche");
    rReceta4.addIngrediente("20 cl de leche de coco");
    rReceta4.addIngrediente("50 g de tapioca");
    rReceta4.addIngrediente("25 g de azúcar");


    console.log("primera receta %o", rPollo);
    console.log("primera receta %s %o", rPollo.nombre, rPollo);
    console.log("consola");
    recetas.unshift(rPollo);
    recetas.unshift(rReceta2);
    recetas.unshift(rReceta3);
    recetas.unshift(rReceta4);
    visualizarImagenes();



    function visualizarImagenes() {
        var contenido=""
        /*var arr = document.images;
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            var iimagen = arr[i];
            console.info("Nº" + i + ":" + iimagen.src);
        }*/

        var arr = recetas;
        var len = arr.length;
        var div = divReceta;
        recetasCont.innerHTML="";
        for (var i = 0; i < len; i++) {
            contenido+=`<div class="col-sm-4"><div class="thumbnail"><img src=${arr[i].foto} alt="fotoReceta" width="400" height="300"><p><strong>${arr[i].nombre}</strong></p><p><i class="fa fa-heart" aria-hidden="true"></i>${arr[i].likes} ${arr[i].cocinero}</p><button class="btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-eye" aria-hidden="true">Ingredientes</i></button></div></div>`

        }
        recetasCont.innerHTML =contenido;
    }

}





var recetasCont = document.getElementById("recetasCont");


/*var divReceta = '<div class="col-sm-4"><div class="thumbnail"><img src="https://www.gallinablanca.es/files/thumbs/f8a018386d588664842dac447c236784ba7f2479_r476_261_5.jpg" alt="fotoReceta" width="400" height="300"><p><strong>##nombre##</strong></p></div></div>';*/

/*function escribirArray() {
    var arr = recetas;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
       // recetasCont.innerHTML += divReceta.replace('##numero##', arr[i]);
        console.log("arrai");
    }
}*/

function borrarInputs() {
    document.forms[0].likes.value = "";
    document.forms[0].cocinero.value = "";
    document.forms[0].nombre.value = "";
    document.forms[0].foto.value = "";

}

function nueva() {

    var likes = document.forms[0].likes.value;
    var cocinero = document.forms[0].cocinero.value;
    var nombre = document.forms[0].nombre.value;
    var foto = document.forms[0].foto.value;
    var nuevaReceta = new Receta(nombre, foto, likes, cocinero);
    nuevaReceta.addIngrediente("Ingrediente");
    nuevaReceta.addIngrediente("ingrediente");
    nuevaReceta.addIngrediente("ingrediente");
    nuevaReceta.addIngrediente("ingrediente");
    recetas.unshift(nuevaReceta);
    dibujarRecetas();
    console.debug("array %s", recetas.length);
    borrarInputs();
}



function dibujarRecetas() {

    //añadir receta
    /*likes = parseInt(likes);*/
    var div = divReceta.replace('##nombre##', recetas[0].nombre);
    div = div.replace('##cocinero##', recetas[0].cocinero);
    div = div.replace('##foto##', recetas[0].foto);
    div = div.replace('##likes##', recetas[0].likes);
    recetasCont.innerHTML += div;
}
