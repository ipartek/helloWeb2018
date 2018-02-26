//Selectores globales.
var rRecetas = document.querySelector("#rRecetas");
var tempColumna = document.querySelector(".columna");

//Array que irá guardando las recetas
//Se utilizará el atributo data-index para gestionar la
//información del objeto y su posición
//Al eliminar objetos en pantalla, su posición en el array se declarará
//null para evitar reorganizarlo
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

    rMerluza.addIngrediente("Merluza");
    rMerluza.addIngrediente("Perejil");
    rMerluza.addIngrediente("Besamel");
    rMerluza.addIngrediente("Limón");

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
//Tiene sentido mientras haya objetos predefinidos
function creaBoxes() {
    console.log(aRecetas)
    aRecetas.forEach((receta, index) => {
        sumaBox(receta, index);
    })
}

//Elimino el elemento de la pantalla
function eliminarBox() {
    console.log(this);
    let colPadre = this.parentNode.parentNode;

    //Elimino el objeto(columna completa) al row #rRecetas
    rRecetas.removeChild(colPadre);

    //Pongo a null el array que contiene los objetos en el índice correspondiente
    aRecetas[colPadre.dataset.index] = null;

    console.log("Array de Recetas: " + aRecetas.length)
}


//Formulario **********************************/
var bAlta = document.querySelector("#bAlta");
//Evento
bAlta.onclick = alta;


function alta() {
    event.preventDefault();
    //    let nombre = fAlta.querySelector("#nombre").value;
    let nombre = fAlta.querySelector("#nombre").value == "" ? "Nombre" : fAlta.querySelector("#nombre").value;
    //    let foto = fAlta.querySelector("#foto").value;
    let foto = fAlta.querySelector("#foto").value == "" ? "./img/fibs.jpg" : fAlta.querySelector("#foto").value;
    //    let likes = fAlta.querySelector("#likes").value;
    let likes = fAlta.querySelector("#likes").value == "" ? "0" : fAlta.querySelector("#likes").value;
    //    let cocinero = fAlta.querySelector("#cocinero").value;
    let cocinero = fAlta.querySelector("#cocinero").value == "" ? "Chef" : fAlta.querySelector("#cocinero").value;
    //    let iIng = fAlta.querySelector("#iIng").value;
    // let iIng = fAlta.querySelector("#iIng").value == "" ? "Sin ingredientes" : fAlta.querySelector("#iIng").value;
    let aIng = [];

    let receta = new Receta();
    receta.nombre = nombre;
    receta.foto = foto;
    receta.likes = likes;
    receta.cocinero = cocinero;

    //Recojo los ingredientes del INPUT
    // aIng = iIng.split(",");

    //Recojo los ingredientes del textarea
    console.log($("#taIng").val())
    aIng = $("#taIng").val().split(/\n/);

    console.log(aIng)

    aIng.forEach(ingre => {
        //        let cap = ingre.charAt(0).toUpperCase();
        //        receta.addIngrediente(ingre.trim().replace(ingre.charAt(0), cap));
        receta.addIngrediente(ingre.trim());
    })

    console.log("%o", receta);

    //    if (fAlta.checkValidity()) { //Este if sería lógico si el formulario se enviara a otra página
    //Añado el nuevo perro al array, y los muestro
    aRecetas.push(receta); //En realidad ya no hace falta el array
    sumaBox(receta, (aRecetas.length - 1)); //Primero volverá a crear todos los elementos

    fAlta.reset();

    //Oculto el formulario
    muestroForm();
    //    }

    return false;
}

//Añado un box con la nueva información
function sumaBox(receta, index) {
    //Clono la plantilla y modifico sus valoes para
    //Agregarlo al row
    let tempBox = tempColumna.cloneNode(true);

    //Agrego el atributo data-index pra controlar la posicion del objeto
    //en el array y así identificarlo y mostrar los ingredientes
    tempBox.dataset.index = index;

    //Visualizo la nueva platnilla
    tempBox.style.display = "initial";

    //Retiro la clase columna (tiene display:none)
    tempBox.classList.remove("columna");

    //modifico la información con la del objeto actual
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

    //Añado la plantilla rellena con la nueva información al row
    rRecetas.appendChild(tempBox);


    rRecetas.lastElementChild.scrollIntoView();

}

//Modal
var dIng = document.querySelectorAll(".ing");
dIng.onclick = modal;

function modal() {
    //Selector
    let modal = document.getElementById("modal");
    let ulIng = modal.querySelector("#ulIng");
    let listTitle = modal.querySelector("#modTitle");

    let liNew;
    let ejemplo = "Arroz";
    let ejemplo2 = "Pollo";

    //Limpio la lista de ingredientes ya que voy a crearlos dependiendo del
    //objeto actual
    ulIng.innerHTML = "";

    //Busco el índice del objeto en el array identificando el
    //atributo data-index de la caja
    let index = this.parentElement.parentElement.dataset.index;
    console.log(this.parentElement.parentElement);

    //Trabajo con el objeto en dicha posición del array
    let rActual = aRecetas[index];

    //Agrego al título la propiedad nombre del objeto seleccionado
    modTitle.textContent = rActual.nombre;

    //Creo tantos elementos li como ingredientes haya y se los agrego
    //a la ul
    rActual.ingredientes.forEach(ingre => {
        liNew = document.createElement("li");
        liNew.innerHTML = "<i class='fa fa-check-circle'></i>&nbsp;" + ingre;
        ulIng.appendChild(liNew);
        console.log("HIII" + ulIng);
    })

    //Cambio el display pra mostrarlo
    modal.style = "display: flex; justify-content:center; align-items:center";

    //Hago la animacion dandole la clase
    //    modal.classList.add("zoom");

    //Hago desaparecer la lista al pinchar en la cruz
    modal.getElementsByTagName("span")[0].onclick = function () {
        modal.style.display = "none";
    }
}


//Visualizo y oculto el formulario
//Selectores
var caret = document.querySelector("#lid");
caret.onclick = muestroForm;

function muestroForm() {
    let fAlta = document.querySelector("#fAlta");
    //    if (fAlta.style.display == "flex") {
    //        fAlta.style.display = "none";
    //    } else {
    //        fAlta.style.display = "flex";
    //    }

    //Manejando la altura
    if (fAlta.style.maxHeight == "" || fAlta.style.maxHeight == "0px") {
        fAlta.style.maxHeight = "300px";
        caret.querySelector("i").style.transform = "rotate(180deg)";
    } else {
        fAlta.style.maxHeight = "0px";
        caret.querySelector("i").style.transform = "rotate(0deg)";
    }

}
