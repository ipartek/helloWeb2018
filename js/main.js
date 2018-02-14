/* JavaScript */


//Ejecutamos esta funcion al cargar la pagina Web
function init() {

	console.debug('debug DOM listo y cargado'); //tal variable tiene cual valor
	console.log('log DOM listo y cargado'); //de traceo
	console.info('info DOM listo y cargado'); //informativo
	console.warn('warn DOM listo y cargado'); //errores no graves
	console.error('error DOM listo y cargado'); //errores graves

}


function pulsador() {

	console.info('Boton pulsado');

	var texto = document.getElementById("texto");
	var numero = document.getElementById("numero").value;
	var mensaje = "";

	if ("" == numero) {
		mensaje = "No me seas vago y dime un numero ;-)";
	} else {

		if (numero % 2 == 0) {
			mensaje = numero + " es PAR";
		} else {
			mensaje = numero + " es IMPAR";
		}

	}

	texto.textContent = mensaje;

}


/**
 *   llamada mediante Ajax para conseguir el precio actual de un Bitcoin
 *   @see: https://www.coindesk.com/api/
 */
function llamadaApi() {

	var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	var currency = document.getElementById("divisa").value;
	//console.debug('Moneda seleccionada %s',currency);
	//lamada Ajax
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		//esperamos a que la respuesta sea correcta
		if (this.readyState == 4 && this.status == 200) {
			var json = JSON.parse(this.responseText);
			//console.info(json.bpi.USD.rate);

			//mostrar en pantalla
			if (currency == "EUR") {
				document.getElementById("precio").textContent = json.bpi.EUR.rate + " Euros";
			} else if (currency == "USD") {
				document.getElementById("precio").textContent = json.bpi.USD.rate + " Dolares";
			} else {
				document.getElementById("precio").textContent = json.bpi.GBP.rate + " Libras";
			}

		}
	};
	xhr.open("GET", url, true);
	xhr.send();



}

/**
Ordenar de menor a mayor con la metodologia BubbleSort

*/


/* Mi version de la funcion:

function ordenacionEnBurbuja() {
	var numerosDesordenados = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];
	var desordenado=true;
	while (desordenado) {
		desordenado=false;
			for (var i = 0; i < 10; i++) {
			if (numerosDesordenados[i] > numerosDesordenados[i + 1]) {
				var memory = numerosDesordenados[i];
				numerosDesordenados[i] = numerosDesordenados[i + 1]
				numerosDesordenados[i + 1] = memory;
				desordenado = true;
			}
		}
	}
	console.debug(numerosDesordenados);
}

*/

//Version de Ander:

function ordenacionEnBurbuja() {

    var arr = [3, 0, 1, 8, 7, 2, 5, 4, 6, 9];
    console.debug("array DESordenado " + arr );
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // cambio
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

