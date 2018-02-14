/* JavaScript */

// Ejecutamos esta función al cargar la página Web
function init() {
    /*console.info("LISTA DE LOGs ORDENADOS POR PRIORIDAD:");

    // Los 5 niveles de LOGs, ordenados de menos a mayor prioridad
    console.debug('DEBUG: datos para la fase de desarrollo y depuración.');
    console.log('LOG: Trazabilidad: método en el que estoy.');
    console.info('INFO: información útil: conexiones, llamadas, etc.');
    console.warn('WARN: errores no críticos.');
    console.error('ERROR: errores críticos: afectan a la correcta funcionalidad de la web.');*/

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

    // Llamada AJAX
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // readyState = 4 --> La respuesta esta lista
        // status = 200   --> Petición HTTP correcta
        if (this.readyState == 4 && this.status == 200) {
            //console.info(this.responseText);
            var json_bitcoin = JSON.parse(this.responseText);
            var currency = unescape(json_bitcoin.bpi.USD.symbol);
            // Mostrar el símbolo de la moneda
            console.info("Moneda seleccionada: %s", json_bitcoin.bpi.USD.symbol);
            console.info(currency);
            switch (moneda) {
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

/*function goBack() {
    window.history.back();
}*/



/*
    Método para ordenar una lista de números: metodología de la burbuja "BubleSort"
    PRE: obtiene una lista de números desordenados
    POST: devuelve la misma lista de números ordenada
*/
document.getElementById("btnOrdenar").onclick = function ordenacionEnBurbuja() {

    // IN:
    var numeros = document.getElementById("listaDesordenada").value;
    // convertir la cádena del input en un array
    var listaNumeros = transformarEnArray(numeros);
    // OUT:
    var listaOrdenada = document.getElementById("listaOrdenada");
    var iteraciones = document.getElementById("iteraciones");

    // variables de posiciones
    var sig;
    var ult_pos = listaNumeros.length;
    var iteracion = 0;
    var aux;
    // variables de stop
    var stop = false;
    var sin_cambios;

    // iniciar texto de respuesta
    listaOrdenada.innerHTML = "ordenando lista...";

    // pintar lista en su estado inicial:
    console.debug("Lista inicial: " + listaNumeros);

    // iterar tantas veces como posiciones tiene el array o hasta que la lista este ordenada
    while (iteracion < listaNumeros.length && !stop) {
        // preparar las posición para la siguiente iteración
        sig = 1; // se compara el par de las posiciones 'sig-1' y su posterior 'sig'
        ult_pos--; // en cada iteración se comprar una posición menos, dado que la última posición ya está ocupara por el mayor valor
        sin_cambios = 0;
        // comparar las posiciones inmediatas y ordenarlas de menor a mayor
        for (var i = 0; i < ult_pos; i++) {
            if (listaNumeros[sig - 1] > listaNumeros[sig]) {
                // invertir orden el los valores
                aux = listaNumeros[sig - 1];
                listaNumeros[sig - 1] = listaNumeros[sig];
                listaNumeros[sig] = aux;
            } else {
                // contabilizar las comparaciones sin movimientos
                sin_cambios++;
            }
            // incrementar posicion para comparar el siguiente par
            sig++;
        }
        iteracion++;
        // comprobar si ha habido cambios en la iteración
        if (i - 1 < sin_cambios) {
            stop = true;
        } else {
            // mostrar por consola la iteración y el estado actual de la lista
            console.debug("ITERACIÓN Nº" + iteracion + " : " + listaNumeros);
        }
    }
    // Mostrar resultado de la lista ordenada y el nº de iteraciones necesarias
    console.debug("Lista ordenada: " + listaNumeros + " en " + (iteracion - 1) + "º iteraciones");

    //return listaNumeros;
    listaOrdenada.innerHTML = listaNumeros;
    iteraciones.innerHTML = iteracion - 1;
};

/*
    Método RECURSIVO de ordenación con metodología 'BubbleSort'
    PRE: obtiene una lista de números desordenados
    POST: devuelve la misma lista de números ordenada
*/
// OUT:
var listaOrdenada = document.getElementById("listaOrdenada");
var iteraciones = document.getElementById("iteraciones");
var ordenados = [];
var parar = false;
var iteracion = 0;
var reset = 0;
var terminado = true;

function recursiveBubbleSort(listaNumeros) {

    // variables locales
    var temp;
    var sinOrdenar;

    // condición para terminar recursividad
    if (listaNumeros.length > 1 && !parar) {

        parar = true;
        // realiza una pasada para colocar el nº más alto al final
        for (var i = 0; i < listaNumeros.length - 1; i++) {
            if (listaNumeros[i] > listaNumeros[i + 1]) {
                // invertir orden el los valores
                temp = listaNumeros[i];
                listaNumeros[i] = listaNumeros[i + 1];
                listaNumeros[i + 1] = temp;
                parar = false;
            }
        }
        iteracion++;
        reset++;
        sinOrdenar = listaNumeros.splice(0, listaNumeros.length - 1);
        ordenados.unshift(listaNumeros);
        console.debug(
            "Lista pre-ordenada:  [" + ordenados +
            "]\nElementos restantes: [" + sinOrdenar +
            "]\nIteraciones: " + iteracion);

        recursiveBubbleSort(sinOrdenar);

    } else {
        // finalizar recursividad
        ordenados.unshift(listaNumeros);
        console.debug("LISTA ORDENADA:  [" + ordenados + "]");
    }
    //return ordenados;
    /*FIXME[x]: mostrar resultado una única vez y después resetear las variables*/

        listaOrdenada.innerHTML = ordenados;
        iteraciones.innerHTML = iteracion;
        reset--;
    // 'reset' tiene el mismo valor que iteracion, así que le vas disminuyendo hasta llegar a '-1'
    // Al llegar a '-1' es cuando termina la recursividad, entonces se ejecuta 'resetearVariables()'
    if(reset===-1) {
        // reset de las variables
        resetearVariables();
    }
}

function resetearVariables() {
    ordenados = [];
    iteracion = 0;
    reset = 0;
    parar = false;
}


function transformarEnArray(stringNumeros) {
    var array = JSON.parse("[" + stringNumeros + "]");
    return array;
}
