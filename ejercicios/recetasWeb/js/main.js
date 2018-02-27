var recetas = [];
var nuevoIngrediente = [];

/*crear unas recetas de prueba*/

function init() {
    crearRecetasMock();
    cargarRecetas();
}

function crearRecetasMock() {
    /*mok es juego de datos de pruebas*/

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
    recetas.push(rPollo);
    recetas.push(rReceta2);
    recetas.push(rReceta3);
    recetas.push(rReceta4);
    console.log("recetas creadas ");
}

function eliminarReceta(elemento, posicion) {

    console.log("Eliminar receta de la posicion %i", posicion);
    elemento.parentElement.parentElement.style.display = "none";
    recetas.splice(pocion, 1); // a partir de esta posicion cuantos elementos elimino
}

function cargarRecetas() {
    var contenedorRecetas = document.getElementById("containerRecetas");
    contenedorRecetas.innerHTML = "";
    var recetasHtml = "";

    recetas.forEach((receta, index) => {

        console.log("%i receta %o", index, receta);
        recetasHtml += `<div class="col-sm-6 col-md-4 receta">
                           <div class="cerrar"><span onclick="eliminarReceta(this, ${index} )">X</span></div>
                            <div class="thumbnail">
                                <img src="${receta.foto}" alt="${receta.nombre}">
                                <div class="caption">
                                    <h3>${receta.nombre}</h3>
                                    <p>
                                        <span class="likes izquierda"><i class="fa fa-heart" aria-hidden="true"></i>${receta.likes}</span>
                                        <span class="cocinero derecha">${receta.cocinero}</span></p>
                                    <hr>
                                    <p id="btnIngrediente"><a href="#" class="btn btn-primary" role="button" data-toggle="modal" onclick="showModal(${index})"><i class="fa fa-eye" aria-hidden="true"></i> Ingredientes</a></p>
                                </div>
                            </div>
                        </div>`;
    });

    contenedorRecetas.innerHTML = recetasHtml;

}

/*
function borrarInputs() {
    / * borrar inputs valor a valor

    document.forms[0].likes.value = "";
    document.forms[0].cocinero.value = "";
    document.forms[0].nombre.value = "";
    document.forms[0].foto.value = "";* /

    / *borrar inputs todos de golpe
    var inputs =Array.from(form.getElementsByTagName("input"));
    inputs.forEach(input=>{input.value=""});* /

     / * borrar inputs todos de golpe * /
    form.reset();

}*/

function showModal(index) {
    //no se puede pasar ni un objeto ni un array como parametro, por lo que pasamos la direccion


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

function añadirIngrediente() {
    //añadir ingrediente
    var ingrediente = document.forms[0].ingrediente.value;
    nuevoIngrediente.push(ingrediente);
    //indicar numero de ingredientes añadidos
    var num = nuevoIngrediente.length;
    console.log("Numero: %i", num);
    document.getElementById('numIngredientes').innerHTML = num;
    //eliminar contenido de ingrediente para permitir nuevo ingrediente
    document.forms[0].ingrediente.value = "";
}

function nueva() {
    console.log("nuevaRecetaClick");

    //comprobar la validez de la receta antes de meterla
    var form = document.getElementById("formulario");
    if (form.checkValidity()) {
        console.debug('Crear receta');
        //recoger los valores de los imputs
        var likes = document.forms[0].likes.value;
        var cocinero = document.forms[0].cocinero.value;
        var nombre = document.forms[0].nombre.value;
        var foto = document.forms[0].foto.value;
        /*otra forma
         var likes = document.getElementById("likes").value;*/
        //crear nueva receta
        var nuevaReceta = new Receta(nombre, foto, likes, cocinero);
        nuevaReceta.ingredientes = nuevoIngrediente;
        //añadir receta al inicio del array
        recetas.unshift(nuevaReceta);
        console.debug("array %s", recetas.length);
        // recargar recetas
        cargarRecetas();
        //borrar valores del formulario
        form.reset();;
    } else {
        console.warn('No se puede crear porque form no es correcto');
    }
}
