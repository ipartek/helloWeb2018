var numerosDesordenados = [];
var contenidoDes = document.getElementById("cntNumDes");
var contenidoOr = document.getElementById("cntNumOr");
var numerosOrdenados = [];
var alerta = document.getElementById("alerta");
function ordenarEnBurbuja() {
    numerosOrdenados = numerosDesordenados;
    if (numerosOrdenados.length < 2) {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Introduzca al menos dos número por favor</div>'

    } else {
        numerosOrdenados = [];
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
        contenidoOr.innerHTML = cadena;

    }


}

function aniadirNumero() {
    var cadena = "";
    var numero = document.getElementById("numeroInput");
    if (validarNumeros(numero)) {
        numerosDesordenados.push(parseInt(numero.value));
        alerta.innerHTML = ""
    }
    for (var i = 0; i < numerosDesordenados.length; i++) {
        cadena = cadena + "<span class='boxDesorden'>" + numerosDesordenados[i] + "<i class='fa fa-times fa-1 cerrar' aria-hidden='true'></i></span>";
    }
    contenidoDes.innerHTML = cadena;

    numero.value = "";
    numero.focus();

}

function limpiar() {
    numerosDesordenados = [];
    numerosOrdenados = [];
    alerta.innerHTML = "";
    contenidoDes.innerHTML = "";
    contenidoOr.innerHTML = "";
    numero.value="";
    numero.focus();

}

function validarNumeros(numero) {
    var esCorrecto=false;
    if (numerosDesordenados.length < 10 && (numero.value != "" && numero.value >= 0 && numero.value < 99)){
        esCorrecto=true;
    }
    else if (numero.value == "" || numero.value < 0 || numero.value > 99) {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Introduzca un número del 0 al 99 incluidos</div>'

    } else {
        alerta.innerHTML = '<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>  <strong>Warning!</strong> Como mucho se ordenarán 10 numeros, sólo diez números por favor</div>'

    }
    return esCorrecto;
}
