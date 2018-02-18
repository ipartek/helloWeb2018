//elementos del formulario
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var observaciones = document.getElementById('observaciones');
var email = document.getElementById('email');
var pass = document.getElementById('pass');
var direccion = document.getElementById('address');
var cp = document.getElementById('cp');
var sexo = document.getElementsByName('sexo');
var aficion = document.getElementsByName('aficion');
var condiciones = document.getElementsByName('condiciones');
var provincia = document.getElementById('busqueda_provincia');

var caracteres = document.getElementById('caracteres');

//Plantilla del panel que se introduce crearDivInfo
var contenidoDiv = '<div class="panel panel-##clase##" ><div class="panel-heading"><span>##titulo##</span></div><div class="panel-body">##informacion##</div></div>';


/**
 * Funcion que muestra la contraseña cuando se pincha en el boton
 */
function passToggle() {

    console.debug("pass toggle");



    if (document.getElementById("pass").type == "password") {
        document.getElementById("pass").type = "text";
        document.getElementById("ojo").className = "fa fa-eye";
    } else {
        document.getElementById("pass").type = "password";
        document.getElementById("ojo").className = "fa fa-eye-slash";
    }

}


/*
function validar(element) {

    //Hay que resetear el CustomValidity para que ejecute checkValidity(), si no da error
    element.setCustomValidity('');

    if (!element.checkValidity()) {

        // set custom validation message
        //console.debug("if");
        element.setCustomValidity("El campo no es correcto");

    } else {

        // reset the validation message - makes it valid for checkValidity function
        //console.debug("else");
        element.setCustomValidity('');

    }


}
*/

function validate() {

    //mas seguro coger por id
    var formulario = document.forms[0];

    //console.log('validar formulario' + formulario);

    var validar = validarForm();
    console.log('validar', validar);
    return (validar);
}


/**
 * Funcion que valida el formulario
 * Las variables son de tipo booleano y su contenido son llamadas a funciones que comprueban el contenido del input del tipo adecuado.
 * Si hay que hacer alguna operacion especial se hace en esta funcion
 */
function validarForm() {

    var vNombre = validarTexto(nombre, 2, 25);
    var vApellido = validarTexto(apellido, 2, 25);
    var vEmail = validarTexto(email, 2, 25);
    var vPass = validarTexto(pass, 6, 8);
    var vDireccion = validarTexto(direccion, 2, 25);
    var vCp = validarTexto(cp, 5, 5);
    var vSexo = validarRadio(sexo);

    // Se comprueba el minimo de aficiones dependiendo del sexo
    var sexoValue;
    for (i = 0; i < sexo.length; i++) {
        if (sexo[i].checked) {
            sexoValue = sexo[i].value;
        }
    }

    var minAficiones;
    if (sexoValue == 'm') {
        minAficiones = 1;
    } else if (sexoValue == 'f') {
        minAficiones = 3;
    } else if (sexoValue == 'o') {
        minAficiones = 0;
    }
    var vAficion = validarCheckbox(aficion, minAficiones, 999);;

    var vCondiciones = validarCheckbox(condiciones, 1, 1);
    var VProvincia = validarSelect(provincia);

    // Se genera un panel de error dependiendo de las observaciones introducidas
    var vObservaciones = validarTexto(observaciones, 25, 500);
    document.getElementById('divError').innerHTML = '';
    if (observaciones.value.length < 25) {
        crearDivInfo('divError', 'danger', 'Observaciones', contenidoDiv);
        crearContenido('divError', 'Las observaciones deben tener al menos 25 caracteres');
    } else if (observaciones.value.length > 500) {
        crearDivInfo('divError', 'danger', 'Observaciones', contenidoDiv);
        crearContenido('divError', 'Las observaciones deben tener un maximo de 500 caracteres');
    }

    //Se comprueba si todos los campos pasan la validacion
    if (vNombre && vApellido && vEmail && vPass && vDireccion && vCp && vSexo && vAficion && vCondiciones && VProvincia && vObservaciones) {
        return true;
    } else {
        console.log('FALSE');
        return false;
    }

}

/**
* Funcion que valida los campos de texto
* @texto - el input del que se quiere comprobar el texto
* @min - el numero minimo de caracteres
* @max el numero maximo de caracteres
*
*
*/
function validarTexto(texto, min, max) {

    if (texto.value.length >= min && texto.value.length <= max) {
        return true;
    } else {
        return false;
    }

}

/**
* Funcion que valida si en el select se elegido un campo que no tenga value = 0 que deberia ser '...'
*
*
*/
function validarSelect(select) {
    if (select.value != '0') {
        return true;
    } else {
        return false;
    }
}

/**
* Funcion que los checkbox
* @checkbox - el input del que se quiere comprobar
* @min - el numero minimo de checkbox marcados
* @max el numero maximo de checkbox marcados
*
*
*/
function validarCheckbox(checkbox, min, max) {

    var marcados = 0;
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            marcados++;
        }
    }

    if (marcados >= min && marcados <= max) {
        return true;
    } else {
        return false;
    }
}

/**
* Funcion que valida si se ha seleccionado algun valor radio
*/
function validarRadio(radio) {

    var marcados = 0;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            marcados++;
        }
    }

    if (marcados == 0) {
        return false;
    } else {
        return true;
    }
}

/**
* Funcion que valida los campos de texto
* @texto - el input del que se quiere comprobar el texto
* @min - el numero minimo de caracteres
* @max el numero maximo de caracteres
*
*
*/
function validarTextarea(texto, min, max) {
    if (texto.value.length >= min && texto.value.length <= max) {
        return true;
    } else {
        return false;
    }
}

/**
* Funcion que cuenta el numero de caracteres del textarea y los saca por pantalla
*/
function contarCarcteres() {

    caracteres.innerHTML = '<p>' + observaciones.value.length + '/500 caracteres usados</p>';

}

/**
 * Genera el div en el que ira la informacion
 * @id id del elemento en el que se va a generar el panel
 * @clase color de la clase que se quiere utilizar de bootstrap
 * @titulo titulo del panel
 * @contenido maquetacion del contenido -- para esto se usa la variable contenidoDiv
 */
function crearDivInfo(id, clase, titulo, contenido) {

    var divGenerado = document.getElementById(id);

    contenido = contenido.replace('##titulo##', titulo);
    contenido = contenido.replace('##clase##', clase);

    divGenerado.innerHTML += contenido;

    console.log(contenido);

}

/**
 * Genera el contenido del panel
 */
function crearContenido(id, contenido) {

    var divGenerado = document.getElementById(id);

    //console.log(contenido);

    divGenerado.innerHTML = divGenerado.innerHTML.replace('##informacion##', contenido);

    console.log(divGenerado);
}
