/* JavaScript */

var numerosDesordenados = [];
var contenidoDes = document.getElementById("cntNumDes");
var contenidoOr = document.getElementById("cntNumOr");
var numerosOrdenados = [];
var alerta = document.getElementById("alerta");
//Ejecutamos esta función al cargar la página web

function init() {
    //5 niveles de logs otrazas ordenados por prioridad
    console.debug('debug DOM listo y cargado');
    console.log('logDOM listo y cargado');
    console.info('info DOM listo y cargado');
    console.warn('warn DOM listo y cargado');
    console.error('error DOM listo y cargado');
}

function pulsador() {
    console.info('Boton pulsado');
    var texto = document.getElementById("texto");
    var numero = document.getElementById("numero").value;
    mensaje = "No ha introducido un número";
    color = "black"

    if (numero != "") {
        if (numero % 2 == 0) {
            mensaje = numero + " es par";
            color = "green";
        } else {
            mensaje = numero + " es impar";
            color = "blue";
        }
    }

    texto.textContent = mensaje;
    texto.style.color = color;
}
/**
* llamada medaianta Ajax para conseguir el precio actual de un Bitcoin
@see : https://api.coindesk.com/api/
*
*/
function llamadaApi() {
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    var formato = document.getElementById("formato-precio").value;
    var precio = ""

    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            console.info(json.bpi.USD.date)
            if (formato == "Euros") {
                precio = json.bpi.EUR.rate;

            } else if (formato == "Libras") {
                precio = json.bpi.GBP.rate;
            } else if (formato == "Dolares") {
                precio = json.bpi.USD.rate;
            }
            document.getElementById("precio").textContent = precio + " " + formato;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

function ordenarEnBurbuja() {
    numerosOrdenados=numerosDesordenados;
    if (numerosOrdenados.length < 2) {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Introduzca al menos dos número por favor</div>'

    }
    else {
        numerosOrdenados=[];
        alerta.innerHTML = ""

        var cadena = "";
        var noHayCambios = false;
        var aux = 0;
        var maximo;
        while (noHayCambios == false) {
            noHayCambios = true;
            for (var i = 0; i < numerosDesordenados.length - 1; i++) {
                if (numerosDesordenados[i] < numerosDesordenados[i + 1]) {
                    noHayCambios = false;
                    aux = numerosDesordenados[i + 1];
                    numerosDesordenados[i + 1] = numerosDesordenados[i];
                    numerosDesordenados[i] = aux;

                }
            }
            if (noHayCambios == true) {
                while (numerosDesordenados.length > 0) {
                    maximo = numerosDesordenados.pop();
                    numerosOrdenados.push(maximo);
                }
            } else {
                maximo = numerosDesordenados.pop();
                numerosOrdenados.push(maximo);
            }


        }
        for (var i = 0; i < numerosOrdenados.length; i++) {
            cadena = cadena + "<span class='boxOrden'>" + numerosOrdenados[i] + "<i class='fa fa-times fa-1 cerrar' aria-hidden='true'></i></span>";

        }
        contenidoOr.innerHTML=cadena;

    }


}

function aniadirNumero() {
    var cadena = "";
    var numero = document.getElementById("numeroInput");
    if (numerosDesordenados.length < 10 && (numero.value != "" && numero.value>=0 && numero.value<99)) {
        numerosDesordenados.push(parseInt(numero.value));
        alerta.innerHTML = ""
    } else if (numero.value == "" || numero.value<0 || numero.value>99) {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Introduzca un número del 0 al 99 incluidos</div>'
    } else {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Como mucho se ordenarán 10 numeros, sólo diez números por favor</div>'
    }
    for (var i = 0; i < numerosDesordenados.length; i++) {
        cadena = cadena + "<span class='boxDesorden'>" + numerosDesordenados[i] + "<i class='fa fa-times fa-1 cerrar' aria-hidden='true'></i></span>";
    }
    contenidoDes.innerHTML = cadena;

    numero.value = "";
    numero.focus();

}
function limpiar(){
    numerosDesordenados=[];
    numerosOrdenados=[];
    alerta.innerHTML="";
    contenidoDes.innerHTML="";
    contenidoOr.innerHTML="";

}
