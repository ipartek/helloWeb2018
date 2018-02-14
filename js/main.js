/* JavaScript */

// Ejecutamos esta funcion al cargar la pagina web
function init() {

    /*niveles de logs o trazas ordenados por prioridad*/
    console.debug('debug listo y cargado'); /*valores de variables*/ /* activar verbose en la consola*/
    console.log('log listo y cargado'); /*paso por aqu y por alli - para tracear*/

    console.info('info listo y cargado'); /* informativos - usuario registrado*/
    //   console.warn('warning listo y cargado'); /* fallos no criticos */
    //   console.error('error listo y cargado'); /* errores graves -no se puede conectar a la api*/

}

function push() {
    console.info('Boton Pulsado');

    var numero = document.getElementById("numero");
    var num = numero.value;
    var resultado;
    var text = document.getElementById("texto");

    if (document.getElementById("numero").value == "") {
        resultado = "El campo esta vacio";
        document.getElementById("texto").style.color = "red";

    } else {
        if (num % 2 == 0) {
            resultado = "El numero es par";
            document.getElementById("texto").style.color = "green";
        } else {
            resultado = "El numero es impar";
            document.getElementById("texto").style.color = "blue";
        }
    }

    text.textContent = resultado;
}

/**
 *   llamada mediante Ajax para conseguir el precio actual de un bitcoin
 *   @see: https://www.coindesk.com/api/
 */

function llamadaAPI() {

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);

            var valor;

            if (document.getElementById("moneda").value == "USD") {
                valor = json.bpi.USD.rate;
            }

            if (document.getElementById("moneda").value == "GBP") {
                valor = json.bpi.GBP.rate;
            }

            if (document.getElementById("moneda").value == "EUR") {
                valor = json.bpi.EUR.rate;
            }


            document.getElementById("precio").textContent = "El precio en " + document.getElementById("moneda").value + " es " + valor;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();



}


function shortBubble() {

    var array = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];
    var cambiado = true;

    do {
        cambiado = false;

        for (i = 0; i < array.length - 1; i++) {

            if (array[i] > array[i + 1]) {
                var temp;
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;

                cambiado = true;

                console.info("Se ha cambiado el elemento " + i + " por el elemento " + (i + 1) + " // Array " + array);
            }

        }

    } while (cambiado == true)

    console.info(array);
}

