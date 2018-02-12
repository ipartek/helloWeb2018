// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bd5e378503939ddaee76f12ad7a97608



var url = "http://api.openweathermap.org/data/2.5/weather?q=##CITY##&APPID=bd5e378503939ddaee76f12ad7a97608"

function verTiempo() {
     var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje = document.getElementById("mensaje");
    if (ciudad == "") {
        mensaje.textContent = "No has introducido una ciudad";
    } else {
         mensaje.textContent = "Realizando peticion....";

        //poner en la URL la ciudad
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608";

        //llamada Ajax
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                rellenarWidget(json);
                 /* mensaje.textContent = "El tiempo en " + ciudad;
                rellenarWidget(json);*/

            } else if (this.readyState == 4 && this.status == 404) {
                mensaje.textContent = "La ciudad que desea consultar no exiate";
            }
        };
        xhr.open("GET", url, true);
        xhr.send();

    }
}

function rellenarWidget(json) {

    document.getElementById("city").textContent = json.name;

   //cambiar de Kelvins a Celsius
    var tempCelsius = parseInt(json.main.temp) - 273;
    document.getElementById("temp").textContent = tempCelsius + "º";

    //cambiar imagen icono
    var icon = json.weather[0].icon;
    document.getElementById("icon").src = iconUrl + icon + ".png";

    }

