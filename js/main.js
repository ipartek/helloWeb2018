/*  JavaScript */

/* Ejecutamos esta función al cargar la página web */

function init() {
    console.info('DOM listo y cargado');
}

function pulsador() {
    console.info("Botón pulsado");

    var texto = document.getElementById("texto");

    texto.textContent = "Pulsado!";

    var numero = document.getElementById("numero").value;

    console.info(numero);



    if (!numero) {
        texto.textContent = "Debe introducir un número";
    } else {
        if (numero % 2 == 0 || numero == 0) {
            texto.textContent = "El número " + numero + " es par!";
            texto.style.color = "green";
        } else {
            texto.textContent = "El número " + numero + " es impar!";
            texto.style.color = "blue";
        }
    }
}

/**
 *
 *Lllamada mediante Ajax para conseguir el precio actual de un Bitcoin
 *@see: https://www.coindesk.com/api/
 *
 *
 **/

function llamadaApi() {
    console.info("llamada Api");

    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    /*llamada AJAX*/
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //Esperamos a que la terpsuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            console.info(json.bpi);
            var precio = json.bpi;

            var moneda = document.getElementById("moneda").value;

            switch (moneda) {
                case "EUR":
                    document.getElementById("precio").innerHTML = precio.EUR.rate + " €";
                    break;
                case "USD":
                    document.getElementById("precio").innerHTML = precio.USD.rate + " $";
                    break;
                case "GBP":
                    document.getElementById("precio").innerHTML = precio.GBP.rate + " &pound";
                    break;
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}


/* Sorteo sobre los alumnos */
/* Declaro fuera el array para evitar el undefined */
var arrResultados = new Array();

function sorteo() {

    //Recojo el array de localstorage en el caso de que ya exista
    if (localStorage.getItem('sorteo')) {
        console.info("Cookie ya existente");

        //Cargo el contenido de la cookie en el array
        arrResultados = JSON.parse(localStorage.getItem("sorteo"));

        //Si ya está completo lo reinicio
        if(arrResultados.length == 15)
            arrResultados = [];

        console.info("Su valor actual es: " + arrResultados);

    } else {
        console.info("Cookie NO existente");
    }

    var random = Math.floor(Math.random() * 15);
    console.info("Número random: " + random);


    while (arrResultados.indexOf(random) != -1) {
        console.info("while, random ya existente");
        var random = Math.floor(Math.random() * 15);
        console.info("Número random: " + random);
    }

    arrResultados.push(random);

    //Guardo el array en una localstorage
    localStorage.setItem("sorteo", JSON.stringify(arrResultados));

    //Pongo las celdas reales del numero recogido al azar
    var arrCeldas = [
        [7,0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0],
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7,2]
    ];

    //Informo de la columna y celda recogida
    console.info("Columna: " + arrCeldas[random][0] + " Celda: " + arrCeldas[random][1])

    //Pinto el fondo de la celda seleccionada y muestro el lector
    document.getElementById("alumnos").rows[arrCeldas[random][0]].cells[arrCeldas[random][1]].style.backgroundColor = "#FF4C4C";
    document.getElementById("lector").textContent = document.getElementById("alumnos").rows[arrCeldas[random][0]].cells[arrCeldas[random][1]].innerHTML;

    //Oculto el botón de Sortear y muyestro el de reset
    document.getElementById("btnsort").style.display = "none";
    document.getElementById("btnreset").style.display = "block";

    console.info(document.getElementsByTagName("td")[0].textContent);
}
