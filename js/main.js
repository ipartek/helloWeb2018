/* JavaScript */

// Ejecutamos esta función al cargar la página Web

function init(){

    console.info('DOM listo y cargado');

}

function pulsador(){
    console.info('Botón pulsado');

    /*var texto = document.getElementById("texto");
    texto.textContent = "Marianico el corto";*/

    var numero = document.getElementById("numero").value;
    var texto = document.getElementById ("texto");

    var mensaje = "";

    if ("" == numero){
        mensaje = "El campo está vacio. Introduce un número";
    }
    else{
        if(numero % 2 == 0){
            mensaje ="El número " +numero+ " es Par";

        }
        else{
            mensaje = "El número " +numero+ " es Impar";
        }

    }
    texto.textContent = mensaje;


}

/**
* Llamada mediante Ajax para conseguir el precio actual de un Bitcoin
*
*@see:https://www.coindesk.com/api/
*
*/

function llamadaApi(){

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";


    var moneda = document.getElementById("moneda").value;
    //console.debug('la moneda seleccionada es %s', moneda);

    //Llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

    //Esperamos a que la llamada sea correcta
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        /*console.info(json.bpi.USD.rate);
        var jsonEuro = JSON.parse(this.responseText);
        console.info(json.bpi.EUR.rate);
        var jsonLibras = JSON.parse(this.responseText);
        console.info(json.bpi.GBP.rate);*/
        //console.info(json.bpi.USD.rate);

        //mostrar por pantalla
        var precio = "";
        if(moneda == "USD"){
            precio = json.bpi.USD.rate + " $";
        }
        else if(moneda == "EUR"){
                 precio = json.bpi.EUR.rate + " €";
            }
            else{
                 precio = json.bpi.GBP.rate + " Libras";
            }
        }
      };

        xhr.open("GET", url, true);
        xhr.send();
    }




