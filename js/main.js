/* Javascript */


//Ejecutamos esta funcion al cargar la pagina web
function init() {
    // 5 niveles de logs o trazas ordenados por prioridad
    console.debug('debug: DOM listo y cargado');
    console.log('log: DOM listo y cargado');
    console.info('info: DOM listo y cargado');
    console.warn('warn: DOM listo y cargado');
    console.error('error: DOM listo y cargado');



}

function pulsador(){
    console.info('Boton pulsado');
    var texto=document.getElementById("texto");
    var numero=document.getElementById("numero").value;
    var mensaje="";

    if (""==numero){
        mensaje="Tienes que introducir un numero";
    }else{
        if (numero%2==0)
        mensaje="El numero "+numero+" es par";
    else
        mensaje="El numero "+numero+" es impar";
    }
    texto.textContent=mensaje
}


/* llamada mediante Ajax para conseguir el precio actual de un Bitcoin
    @see; https://www.coindesk.com/api/
*/

function llamadaApi(){
    var url="https://api.coindesk.com/v1/bpi/currentprice.json";

    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    //esperamos que la respuesta sea correcta
    //state4 recibe el dato y status 200 dato existe
        if (this.readyState == 4 && this.status == 200) {
        var json=JSON.parse(this.responseText);

        var moneda = document.getElementById("moneda");
        var opc = moneda.options[moneda.selectedIndex].value;
        //var opc=document.getElementById("moneda").value;
        var precio="";
        if (opc=="USD"){
            precio=json.bpi.USD.rate+" Dolares";
         } else if (opc=="EUR"){
            precio=json.bpi.EUR.rate+" Euros";
        } else if (opc=="GBP"){
            precio=json.bpi.GBP.rate+" Libras";
         };
            document.getElementById("precio").textContent=precio
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

// Ordenar de mayor a menor con la metodologia de BubbleShort

function ordenacionEnBurbuja(){
    var numerosDesordenados = [3,0,1,8,7,2,5,4,6,9];
    var auxiliar;
    for(i=0,i<(numerosDesordenados.length),i++){
        for(j=0,j<i,j++){
            if numerosDesordenados[0] > numerosDesordenados[1]{
                auxiliar = numerosDesordenados[1];
                numerosDesordenados[1] = numerosDesordenados[0];
                numerosDesordenados[0] = auxiliar;
            }
        }
    }
    console.debug(numerosDesordenados);
}
