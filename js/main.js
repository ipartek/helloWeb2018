/* JavaScript */


//Ejecutamos esta funcion al cargar la pagina Web
function init() {

    //niveles de log o trazas ordenados por prioridad
    console.log('DOM listo y cargado'); //para ver por donde pasamos, para tracear
    console.debug('valor de las variables'); //valor de las variables
    console.info('información');
    console.warn('fallos pequeños'); //fallos pequeños
    console.error('errores críticos'); //errores críticos

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

    //lamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
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
    xhr.send();

}

/*ordenacion en burbuja, declarar un array var numerosDesordenados ordenar de menor a mayor con el metodologia Bublesort*/
function ordenarBurbuja(){

    var numerosDesordenados = [3,0,1,8,7,2,5,4,6,9];
    console.debug(numerosDesordenados);
    var longitud = numerosDesordenados.length;
    console.log(longitud);
    //recorreremos todos los elementos, excepto el último que ya esta en su sitio
    for(i=0; i<numerosDesordenados.length; i++){

        console.log(numerosDesordenados);

        for(j=0;j<numerosDesordenados.length-i-1;j++){

            //comparamos

            if(numerosDesordenados[j]>numerosDesordenados[j+1]){

                var numero=numerosDesordenados[j];//guardamos el numero mayor en el auxiliar
                numerosDesordenados[j] = numerosDesordenados[j+1];
                numerosDesordenados[j+1]= numero;

               console.log(numerosDesordenados);
            }//fin del if
        }//fin for interno


        }//fin for externo
    }//fin funcion

