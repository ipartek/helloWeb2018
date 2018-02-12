// Para ciudad Bilbao en concreto var url = "http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608"

//Para que sea cualquier ciudad
var url = "http://api.openweathermap.org/data/2.5/weather?q=##CITY##&APPID=bd5e378503939ddaee76f12ad7a97608"

function verTiempo() {
    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje = document.getElementById("mensaje");

    if (ciudad == "") {
        mensaje.textContent = "Yo no conocer tu Ciudad";
    } else {
        mensaje.textContent = "Realizando peticion....";

        //TODO poner en la URL la ciudad
        url = url.replace("##CITY##", ciudad);
        //  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608" //asi lo he hecho yo
        // llamada Ajax/////////////////////////////////////////
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                rellenarWidget(json);
            }


            if (this.readyState == 4 && this.status == 404) {
                mensaje.textContent = "No existe la Ciudad";
            }

        };
        xhr.open("GET", url, true);
        xhr.send();
    }
}


function rellenarWidget(json) {

    var iconUrl = "http://openweathermap.org/img/w/"; //09n.png;

    document.getElementById("city").textContent = json.name;
    // Cambiado a ºC Ander
    var tempCelsius = parseInt(json.main.temp)-273;
    document.getElementById("temp").textContent=tempCelsius+"º";

    //cambiar imagen
    var icon = json.weather[0].icon;
    document.getElementById("icon").src = iconUrl + icon + ".png";

 //TODO cambiar de Kelvins a Celsius.Este es en Kelvins
    // document.getElementById("temp").textContent = json.main.temp; //este esen Kelvins
    //Cambiado a ºC Mio
    //document.getElementById("temp").textContent = (parseInt(json.main.temp))-273,15+"ºC";
}
