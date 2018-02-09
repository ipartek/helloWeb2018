/*
    JAVASCRIPT para Weather Widget
    API Key para las peticiones JSON: http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608
*/

// TODO: Método para lanzar verTiempo() al pulsar ENTER sobre el button
function pulsarEnter(e) {
    var char = e.which || e.keyCode;
    if(char == "13") {
        verTiempo();
    }
}


// Función para hacer la llamada a la API openweathermap
function verTiempo() {
    // Variables de UI
    var ciudad = document.getElementById("input_ciudad").value;
    var mensaje = document.getElementById("mensaje");
    // Comprobar que ha introducido texto
    if (ciudad == undefined || ciudad == "") {
        mensaje.innerHTML = "No ha introducido la ciudad";
        console.debug("No ha introducido la ciudad");
    } else {
        mensaje.innerHTML = "Obtener el tiempo de la ciudad " + ciudad;
        console.debug("Obtener el tiempo de la ciudad: %s", ciudad);

        // TODO[x]: formar la URL con la ciudad introducida
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608";
        console.debug("URL: " + url);

        // Petición AJAX a la API openweathermap
        var xhr = new XMLHttpRequest();
        var encontrado = null;
        xhr.onreadystatechange = function () {
            // verificar que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                encontrado = true;
                actualizarWidget(json, encontrado);
            } else if (this.status == 404) {
                mensaje.innerHTML = "No se encuentra la ciudad: " + ciudad;
                console.debug("No se encuentra la ciudad: " + ciudad);
                encontrado = false;
                actualizarWidget(json, encontrado);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
}

function actualizarWidget(json, encontrado) {
    var temperatura = null;
    var ciudad = null;
    var iconoPrevision = null;
    if (encontrado) {
        ciudad = json.name;
        // TODO[x]: cambiar de Kelvin a Celsius
        temperatura = Math.round(json.main.temp - 270) + "º";
        // Obtener el icono de OpenWeatherMap (OWM)
        var idIcono = json.weather[0].icon;
        // TODO[x]: Colocar icono
        // @see: https://openweathermap.org/weather-conditions
        var icono =  // Elemento del icono en el HTML
        // Conseguir el icono de openweathermap = "http://openweathermap.org/img/w/ + idIcono + ".png"
        iconoPrevision = "http://openweathermap.org/img/w/" + idIcono + ".png";
        console.debug("URL Icono: http://openweathermap.org/img/w/" + idIcono + ".png");
    } else {
        temperatura = "404";
        ciudad = "Not Found"
        iconoPrevision = "http://openweathermap.org/img/w/50d.png" ;
    }
    document.getElementById("temp").textContent = temperatura;
    document.getElementById("city").textContent = ciudad;
    document.getElementById("owmIcon").src = iconoPrevision;
}
