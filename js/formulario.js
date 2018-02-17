//    Selectores de los elementos
var pass = document.querySelector("#pass");
var ojo = document.querySelector("#ojo");

//Asigno las funciones a los eventos de elementos
ojo.onmousedown = mostrarContrasena;
ojo.onmouseup = mostrarContrasena;


//   Cuando hacen onousedown en el ojo cambio el tipo
//   Al levantar el mouse vuelvo a ocultarlo
function mostrarContrasena() {
    if (pass.type == "text")
        pass.type = "password";
    else
        pass.type = "text";
}


var formulario = document.querySelector("#formulario");
var cHobby = document.querySelector("#hob_spans");

//var botenviar = document.querySelector("#botenviar");

var sex = formulario.sexo.value;
var arr_hobbies = document.getElementsByName("hob_arr");
var chkCond = document.querySelector("#condiciones");

function validar() {
    console.log("Validar formulario");

    //Controla que vaya siendo valido para no seguir comprobando
    var valido = true;

    //Cuento el número de checkboxes checkeados
    var arrChecked = 0;
    for (var i = 0; i < arr_hobbies.length; i++) {
        if (arr_hobbies[i].checked) {
            arrChecked++;
        }
    }

    //Tengo todos los elementos chequeados
    if (sex == "m" && arrChecked < 1) {
        alert("Debe seleccionar al menos un hobby");
        cHobby.querySelector("span input:first-child").focus();
        valido = false;
    } else if (sex == "f" && arrChecked < 2) {
        alert("Debe seleccionar al menos dos hobbies");
        cHobby.querySelector("span input:first-child").focus();
        valido = false;
    } else if (obs.value.length < 25 || obs.value.length > 500) { //Si la comprobación de los checkbox es correcta
        //Observaciones tiene que tener almenos 25 caracteres y máximo 500
        alert("Las observaciones deben tener entre 25 y 500 caracteres");
        valido = false;
        obs.focus();
    } else if (!chkCond.checked) {
        alert("Debe aceptar las condiciones de uso");
        valido = false;
        chkCond.focus();

    }

    return valido;
}



//Contador de caracteres a medida que va escribiendo
var obs = document.querySelector("#obs");
var contador = document.querySelector("#contador");
//Asigno aquí el evento
obs.onkeyup = caracteres;

function caracteres() {
    var tamano = obs.value.length;
    if (tamano > 500) {
        alert("Ha alcanzado el tamaño máximo");
        obs.value = obs.value.substring(0, 500);
        contador.textContent = "500/500"; //En realidad siempre es 500/505
    } else {
        contador.textContent = tamano + "/500";
    }
}


//Custom messages
//    document.querySelector("#nombre").oninvalid = "Debeeeeeeeeeee";
//    document.querySelector("#nombre").setCustomValidity("");
//    document.querySelector("#nombre").setCustomValidity("Debe escribir el nombre");
//    document.querySelector("#apellido").setCustomValidity("Debe escribir el apellido");
//    document.querySelector("[name='sexo']").setCustomValidity("Debe marcar su sexo");
//    document.querySelector("#email").setCustomValidity("Debe escribir un email válido");
//    document.querySelector("#pass").setCustomValidity("Debe escribir una contraseña");
//    document.querySelector("#nombre").setCustomValidity("Hola!");
//    document.querySelector("#nombre").setCustomValidity("Hola!");
//    document.querySelector("#nombre").setCustomValidity("Hola!");
