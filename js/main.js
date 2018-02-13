/* JavaScript */


//Ejecutamos esta funcion al cargar la pagina Web
function init() {

    /*5 niveles de logs ordenados por prioridad*/

    console.log('DOM listo y cargado'); /*Tracear*/
    console.debug('DOM listo y cargado'); /*Saber la variable*/
    console.info('Info DOM listo y cargado'); /*Informacion*/
    console.warn('Warning DOM listo y cargado'); /*Fallos No Criticos*/
    console.error('Error DOM listo y cargado'); /*Fallos Graves*/

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
    var moneda = document.getElementById("moneda").value;
    //console.debug('Moneda seleccionada %s', moneda );

    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) { /* 4 Es peticion finalizada 200 es una peticion activa */
            var json = JSON.parse(this.responseText);

            //console.info(json.bpi.USD.rate);

            //mostrar en pantalla
            var precio = "";
            if (moneda == "USD") {
                precio = json.bpi.USD.rate + " Dolares";
            } else if (moneda == "EUR") {
                precio = json.bpi.EUR.rate + " Euros";
            } else {
                precio = json.bpi.GBP.rate + " Libras";
            }


            document.getElementById("precio").textContent = precio;


        }
    };
    xhr.open("GET", url, true);
    xhr.send(); /* Hacer que la web te envie los datos*/
// Final llamada Ajax
}


/*Ordenador de mayor a menor con la metodologia de BubbleSort*/

function ordenacionEnBurbuja(){


    var numerosDesordenados=[3,0,1,8,7,2,5,4,6,9]; /*Hay que hacer dos for*/


    for(x=0;x=numerosDesordenados;x++){


        for(x=0;x=numerosDesordenados;x++){

             if(numerosDesordenados[x]>=x){




                }
        }



    }

}


