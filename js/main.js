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
	var currency = document.getElementById ("divisa").value;
    //console.debug('Moneda seleccionada %s',currency);
    //lamada Ajax
    var xhr = new XMLHttpRequest();

     xhr.onreadystatechange = function() {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
           var json = JSON.parse(this.responseText);
           //console.info(json.bpi.USD.rate);

           //mostrar en pantalla
			if(currency=="EUR"){
				document.getElementById("precio").textContent =  json.bpi.EUR.rate + " Euros";
			}
			else if (currency=="USD"){
				document.getElementById("precio").textContent =  json.bpi.USD.rate + " Dolares";
			}

             else{
				 document.getElementById("precio").textContent =  json.bpi.GBP.rate + " Libras";
			 }

        }
     };
     xhr.open("GET", url , true);
     xhr.send();

}


