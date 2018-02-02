/* JavaScript */

// Ejecutamos esta función al cargar la página Web
function init() {
    console.info("DOM listo y cargado");
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
