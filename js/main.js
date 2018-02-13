/* JavaScript */

// Ejecutamos esta función al cargar la página Web
function init() {
    console.info("LISTA DE LOGs ORDENADOS POR PRIORIDAD:");

    // Los 5 niveles de LOGs, ordenados de menos a mayor prioridad
    console.debug('DEBUG: datos para la fase de desarrollo y depuración.');
    console.log('LOG: Trazabilidad: método en el que estoy.');
    console.info('INFO: información útil: conexiones, llamadas, etc.');
    //console.warn('WARN: errores no críticos.');
    //console.error('ERROR: errores críticos: afectan a la correcta funcionalidad de la web.')

    // Algunas versiones antiguas de IE solo aceptarn console.info y console.error
}

function pulsador() {

    console.info("Botón pulsado");

    var texto = document.getElementById("texto");
    var respuesta = null;
    var colorRespuesta = null;
    texto.textContent = "Botón pulsado";

    var input_numero = document.getElementById("numero");
    console.info(numero);
    if (numero.value !== "") {
        if (numero.value % 2 === 0) {
            respuesta = "El número " + input_numero.value + " es PAR";
            colorRespuesta = "green";
        } else {
            respuesta = "El número " + input_numero.value + " es INPAR";
            colorRespuesta = "orange";
        }
    } else {
        respuesta = "No ha introducido número";
        colorRespuesta = "red";
    }

    if (respuesta != null) {
        texto.textContent = respuesta;
    }
    if (colorRespuesta != null) {
        texto.style.color = colorRespuesta;
    }

}

/* Llamada mediante Ajax para conseguir el precio actual del Bitcoin
    @see: https://www.coindesk.com/api/
*/
function llamadaApi() {

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var valorBitcoin = document.getElementById("precio");
    var moneda = document.getElementById("moneda").value;
    var valorBitcoin = null;

    // Llamada AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        // readyState = 4 --> La respuesta esta lista
        // status = 200   --> Petición HTTP correcta
        if(this.readyState == 4 && this.status == 200) {
            //console.info(this.responseText);
            var json_bitcoin = JSON.parse(this.responseText);
            var currency = unescape(json_bitcoin.bpi.USD.symbol);
            // Mostrar el símbolo de la moneda
            console.info("Moneda seleccionada: %s", json_bitcoin.bpi.USD.symbol);
            console.info(currency);
            switch(moneda) {
                case "USD":
                    valorBitcoin = json_bitcoin.bpi.USD.rate + " $";
                    break;
                case "EUR":
                    valorBitcoin = json_bitcoin.bpi.EUR.rate + " €";
                    break;
                case "GBP":
                    valorBitcoin = json_bitcoin.bpi.GBP.rate + " £";
                    break;
                default:
                    break;
            }
            precio.textContent = valorBitcoin;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

}

function goBack() {
    window.history.back();
}

/*
    Método para ordenar una lista de números: metodología de la burbuja "BubleSort"
    PRE: obtiene una lista de números desordenados
    POST: devuelve la misma lista de números ordenada
*/

function ordenacionEnBurbuja() {

    var numerosDesordenados = [3,0,1,8,7,2,5,4,6,9];
    var act;
    var sig;
    var ult = numerosDesordenados.length-1;

    // iterar tantas veces como posiciones tiene el array
    for(var iteracion = 0; iteracion < numerosDesordenados.length; iteracion++ ) {

        // comparar las posiciones inmediatas y ordenaras de menos a menos
        while(sig < ult) {
            if(numerosDesordenados[act] > numerosDesordenados[sig]) {

            }
        }
    }

}
