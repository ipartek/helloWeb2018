var ciudad;
var url;

function verTiempo() {
    ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s', ciudad);
    var mensaje = document.getElementById("mensaje");
    if (ciudad === "") {
        mensaje.textContent = "No has introducido nada";
    } else {
        mensaje.textContent = "Realizando peticion...";

        //TO DO poner en la URL la ciudad
        url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608";

        //Llamada Ajax
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState === 4 && this.status === 200) {
                var json = JSON.parse(this.responseText);
                console.debug("jason %o", json);
                rellenarWidget(json);
            } else {
                mensaje.textContent = "No hemos encontrado la localidad " + ciudad;
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    }
}

function rellenarWidget(json) {

    document.getElementById("city").textContent = json.name;

    //TODO cambiar de Kelvins a Celsius
    document.getElementById("temp").textContent = Math.round(json.main.temp - 273) + "º";


    //con iconos de la API

    /*
    var url2 = "http://openweathermap.org/img/w/" + json.weather["0"].icon + ".png";
    document.getElementById("icono").setAttribute("src", url2);
    */

    //con Meteocons:

    var letra;
    if (json.weather["0"].icon == "01d") {
        letra = "B";
    } else if (json.weather["0"].icon == "02d") {
        letra = "H";
    } else if (json.weather["0"].icon == "03d") {
        letra = "N";
    } else if (json.weather["0"].icon == "04d") {
        letra = "Y";
    } else if (json.weather["0"].icon == "09d") {
        letra = "R";
    } else if (json.weather["0"].icon == "10d") {
        letra = "Q";
    } else if (json.weather["0"].icon == "11d") {
        letra = "P";
    } else if (json.weather["0"].icon == "13d") {
        letra = "W";
    } else if (json.weather["0"].icon == "50d") {
        letra = "M";
    }

    document.getElementById("icon").setAttribute("data-icon", letra);



    mensaje.textContent = "El tiempo en  " + json.name + " es: " + json.weather["0"].description;



    //document.getElementById("icon").data-icon="H";



}
