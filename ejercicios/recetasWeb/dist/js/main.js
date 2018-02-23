//Selectores globales
var rRecetas = document.querySelector("#rRecetas");
var tempColumna = document.querySelector(".columna");

//Array que irá guardando las recetas
var aRecetas = [];

function initRec() {

    //Creo un objeto de prueba, lo añado al array, y recorroel array
    var rPollo = new Receta("Pollo", "https://adndietistasnutricionistas.es/wp-content/uploads/2017/04/Pollo-al-chilindron-recetas-adn-nutricion-dietista-nutricionista-deportivo-clinico-perdida-de-peso-jerez-de-la-frontera.jpg", 13, "Robin Food");

    rPollo.addIngrediente("pollo");
    rPollo.addIngrediente("ajo");
    rPollo.addIngrediente("tomate");
    rPollo.addIngrediente("chilindron");

    //Crear más recetas
    //Añadirlas al array recetas
    var rMerluza = new Receta("Merluza", "http://www.recetasderechupete.com/wp-content/uploads/2016/01/merluza_en_salsa_verde.jpg", 24, "Argiñano");

    aRecetas.push(rPollo);
    aRecetas.push(rMerluza);

    //Creo los objetos en la pantalla
    creaBoxes();

    //Eventos y Selectores/////////////////////////////
    var cross = document.querySelectorAll(".cross");
    cross.forEach(cross => {
        cross.onclick = eliminarBox;
    })
}

//Esta función recorre el array de elementos y crea
//una caja con los valores adecuados
function creaBoxes() {

    console.log(aRecetas)
    aRecetas.forEach(receta => {
        //Clono la plantilla de la box y le quito la
        //propiedad display none
        //        let tempBox = tempColumna.cloneNode(true);
        //        tempBox.style.display = "initial";
        //        tempBox.querySelector(".title").textContent = receta.nombre;
        //        tempBox.querySelector(".foto").style.backgroundImage = `url('${receta.foto}')`;
        //        tempBox.querySelector(".like").innerHTML = `<i class="fa fa-heart-o"></i>&nbsp;${receta.likes}`;
        //        tempBox.querySelector(".cocinero").textContent = receta.cocinero;
        //
        //        console.log("Recetas ")
        //        //        console.log(tempColumna)
        //        rRecetas.appendChild(tempBox);
        //
        sumaBox(receta);
    })
}

//Elimino el elemento de la pantalla
function eliminarBox() {
    console.log(this)
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}


//Formulario **********************************/
var bAlta = document.querySelector("#bAlta");
//Evento
bAlta.onclick = alta;


function alta() {
    event.preventDefault();
    let nombre = fAlta.querySelector("#nombre").value;
    let foto = fAlta.querySelector("#foto").value;
    let likes = fAlta.querySelector("#likes").value;
    let cocinero = fAlta.querySelector("#cocinero").value;

    let receta = new Receta();
    receta.nombre = nombre;
    receta.foto = foto;
    receta.likes = likes;
    receta.cocinero = cocinero;

    console.log("%o", receta);

    //Añado el nuevo perro al array, y los muestro
    aRecetas.push(receta); //En realidad ya no hace falta el array
    sumaBox(receta); //Primero volverá a crear todos los elementos
    //Más tarde habrá ñadrilo con appendChild

    fAlta.reset();
}

//Añado un box con la nueva información
function sumaBox(receta) {
    //Añado un box al row
    let tempBox = tempColumna.cloneNode(true);
    tempBox.style.display = "initial";
    tempBox.querySelector(".title").textContent = receta.nombre;
    tempBox.querySelector(".foto").style.backgroundImage = `url('${receta.foto}')`;
    tempBox.querySelector(".like").innerHTML = `<i class="fa fa-heart-o"></i>&nbsp;${receta.likes}`;
    tempBox.querySelector(".cocinero").textContent = receta.cocinero;

    console.log("Recetas ")
    //        console.log(tempColumna)

    //Añado el evento onclick para eliminarla
    tempBox.querySelector(".cross").onclick = eliminarBox;

    //Evento para mostrar el modal
    tempBox.querySelector(".ing").onclick = modal;

    rRecetas.appendChild(tempBox);
}

//Modal
var dIng = document.querySelectorAll(".ing");
dIng.onclick = modal;

function modal() {
    console.log("Hi")
    //Creo un elemento imagen
    var im = document.createElement("img");

    //Creo un elemento imagen dentro de modal
    var modal = document.getElementById("modal");
    modal.appendChild(im);

    //Cambio el display por si estuviera oculta
    modal.style.display = "block";

    //Visualizo la imagen
    modal.getElementsByTagName("img")[0].src = "http://www.recetasderechupete.com/wp-content/uploads/2016/01/merluza_en_salsa_verde.jpg";

    //Hago la animacion dandole la clase
    modal.classList.add("zoom");

    modal.getElementsByTagName("span")[0].onclick = function () {
        //Al clikar la imagen la hago desaparecer
        modal.removeChild(document.getElementsByTagName("img")[0]);
        modal.style.display = "none";
    }
}
