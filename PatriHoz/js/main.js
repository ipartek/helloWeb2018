/* JavaScript */


//Ejecutamos esta funcion al cargar la pagina Web
function init(){

    console.info('DOM listo y cargado');

}


function pulsador(){

    console.info('Boton pulsado');

    var texto  = document.getElementById("texto");
    var numero = document.getElementById("numero").value;
    var mensaje = "";

    if ( "" == numero ){
       mensaje = "No me seas vago y dime un numero ;-)";
    }else{

        if ( numero % 2 == 0 ){
            mensaje = numero + " es PAR";
        }else{
            mensaje = numero + " es IMPAR";
        }

    }

    texto.textContent = mensaje;

}


/**
*   llamada mediante Ajax para conseguir el precio actual de un Bitcoin
*   @see: https://www.coindesk.com/api/
*/
function llamadaApi(){

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    var moneda = document.getElementById("moneda").value;
    //console.debug('Moneda seleccionada %s', moneda );

    //lamada Ajax
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
           var json = JSON.parse(this.responseText);

           //console.info(json.bpi.USD.rate);

           //mostrar en pantalla
           var precio = "";
           if ( moneda == "USD"){
              precio = json.bpi.USD.rate + " Dolares";
           }else if (moneda == "EUR"){
                precio = json.bpi.EUR.rate + " Euros";
           }else{
                precio = json.bpi.GBP.rate + " Libras";
           }


           document.getElementById("precio").textContent =  precio;


        }
     };
     xhr.open("GET", url , true);
     xhr.send();

}

