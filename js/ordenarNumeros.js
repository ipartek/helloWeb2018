/* variables globales */
var inputNumber = document.getElementById("inputNumero");
var divNumDes = document.getElementById("divNumDes");
var divNumOrd = document.getElementById("divNumOrd");
var divAlert = document.getElementById("divAlert");
var alertText = document.getElementById('alertText');
var spanNumero = '<span class="box">##numero##<span class="close" onclick="eleminarCaja(##posicion##)">x</span></span>'
var arrDes = []; //array de numeros desordenados
var arrOrd = []; //array de numeros ordenados
var alerta = '<div class="alert alert-##clase## alert-dismissible fade in" role="alert"><button type="button" onclick="closeAlert()" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><h4>Vas de listo por lo visto!</h4><p id="alertText">##texto##</p><p> <button type="button" class="btn btn-##clase##" onclick="closeAlert()">Cerrar</button></p></div>'

/**
 * recoger numero del input, validar si es numero y meterlo en el div
 */
function addNumber() {

    if (!isNaN(parseFloat(inputNumber.value))) {

        if (arrDes.length < 10) {

            if (inputNumber.value != '') {
                var span = spanNumero.replace('##numero##', inputNumber.value);

                span = span.replace('##posicion##', arrDes.length);

                arrDes.push(inputNumber.value);
                console.log('arrDes' + arrDes);

               divNumDes.innerHTML += span;


            }

        } else {

            sacarMensaje();

        }
    } else {

        sacarAlerta('divAlert', 'Solo acepto numeros', 'danger');

    }

    inputNumber.value = '';
    inputNumber.focus();

}


/**
*Busca el motivo del error y lo envia a la funcion de pintar el mensaje
*/
function sacarMensaje() {

    divAlert.innerHTML = "";
    divAlert.innerHTML = alerta;



    switch (arrDes.length) {
        case (0):
            //divAlert.innerHTML = divAlert.innerHTML.replace('##texto##', 'No seas vago y mete al menos dos numeros');
            //divAlert.innerHTML = divAlert.innerHTML.replace("##clase##", 'warning');
            sacarAlerta('divAlert', 'No seas vago y mete al menos dos numeros', 'warning');
            break;

        case (1):
           // divAlert.innerHTML.replace("##texto##", 'Necesito al menos dos numeros para poder ordenar');
            //divAlert.innerHTML.replace("##clase##", 'success');
            sacarAlerta('divAlert', 'Necesito al menos dos numeros para poder ordenar', 'warning');
            break;

        case (10):
            //divAlert.innerHTML.replace("##texto##", 'Lo siento pero no puedo ordenar mas de 10 numeros');
            //divAlert.innerHTML.replace("##clase##", 'danger');
            sacarAlerta('divAlert', 'Lo siento pero no puedo ordenar mas de 10 numeros', 'danger');
            break;
    }

}

/**
* pinta el mensaje de error por pantalla
* @id id del elemento en el que se va a mostrar el error
* @texto texto del mensaje de error
* @clase tipo de error (warning, alert, success...)
*/
function sacarAlerta(id, texto, clase) {

    var contAlerta = document.getElementById(id);

    contAlerta.innerHTML = "";
    contAlerta.innerHTML = alerta;

    contAlerta.innerHTML = contAlerta.innerHTML.replace('##texto##', texto);
    contAlerta.innerHTML = contAlerta.innerHTML.replace('##clase##', clase);

}


/**
* ordena los nuemros del array
*/
function shortBubble() {

    if (arrDes.length > 1) {

        var cambiado = true;

        do {
            cambiado = false;

            for (i = 0; i < arrDes.length - 1; i++) {

                if (parseFloat(arrDes[i]) > parseFloat(arrDes[i + 1])) {
                    var temp;
                    temp = arrDes[i];
                    arrDes[i] = arrDes[i + 1];
                    arrDes[i + 1] = temp;

                    cambiado = true;

                    console.info("Se ha cambiado el elemento " + i + " por el elemento " + (i + 1) + " // Array " + arrDes);
                }

            }

        } while (cambiado == true)

        console.info(arrDes);
        sacarNumeros();

    } else {

        sacarMensaje();
    }
}


/**
* pinta los numero del array en el div
*/
function sacarNumeros() {
    divNumOrd.innerHTML = '';
    for (i = 0; i < arrDes.length; i++) {
        divNumOrd.innerHTML += spanNumero.replace('##numero##', arrDes[i]);
    }
}


/**
* funcion para cerrar las alertas
*/
function closeAlert() {
    divAlert.innerHTML = "";

}


/**
* funcion para limpiar la pagina
* vacia los arrays
*/
function limpiar() {
    divNumDes.innerHTML = '';
    divNumOrd.innerHTML = '';
    divAlert.innerHTML = '';
    arrDes = [];
    arrOrd = [];

    inputNumber.focus();

}

/**
* funcion para eliminar caja del html
* eliminar elemento del array
*/
function eliminarCaja(posicion) {

    //TODO

}
