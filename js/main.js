function init() {

    console.log(" verbose Dom listo y cargado"); //de traceo
    console.debug("debug Dom listo y cargado"); //para ver algún valor
    console.info(" info Dom listo y cargado"); //informativo
    console.warn(" warn Dom listo y cargado"); //errores leves
    console.error("error Dom listo y cargado"); //errores graves
}

function pulsador() {

    console.info("pulsado");

    var texto = document.getElementById("texto");
    var numero = document.getElementById("numero").value;
    var mensaje = "";
    if ("" == numero) {
        mensaje = "no me sea vago y dime un numero"

    } else {


        if (numero % 2 == 0) {
            mensaje = numero + " es par";
        } else {
            mensaje = numero + " es impar";
        }
    }
    texto.textContent = mensaje;

}

/*
 *llamada mediante Ajax para conseguir el precio actual del Bitcoin
 *@see: https://www.coindesk.com/api/
 */
function llamadaApi() {

    var url = "http://api.coindesk.com/v1/bpi/currentprice.json"
    var moneda = document.getElementById("moneda").value;
    console.debug("moneda selecciona%", moneda)
    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //esperamos llamada correcta
            console.info(this.responseText);
            document.getElementById("demo").innerHTML = this.responseText;
            console.info(json.bpi.USD.rate);
            document.getElementById("precio").textContent = json.bpi.USD.rate + "Dolares";
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function ordenacionEnCascada(){
    var numerosDesordenados=[3,0,1,8,7,2,5,4,6,9];
}
