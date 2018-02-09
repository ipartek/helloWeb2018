/*
    JAVASCRIPT para Weather Widget
    API Key para las peticiones JSON: http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608
*/

// Función para hacer la llamada a la API openweathermap
function verTiempo() {
    // Variables de UI
    var ciudad = document.getElementById("input_ciudad").value;
    var mensaje = document.getElementById("mensaje");
    // Comprobar que ha introducido texto
    if (ciudad == undefined || ciudad == "") {
        mensaje.innerHTML = "No ha introducido la ciudad";
        console.debug("No se ha introducido la ciudad");
    } else {
        mensaje.innerHTML = "Obtener el tiempo de la ciudad " + ciudad;
        console.debug("Obtener el tiempo de la ciudad: %s", ciudad);

        // TODO: formar la URL con la ciudad introducida
        var url = "http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608";

        // Petición AJAX a la API openweathermap
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // verificar que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                actualizarWidget(json);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
}

function actualizarWidget(json) {
    document.getElementById("city").textContent = json.name;
    // TODO[x]: cambiar de Kelvin a Celsius
    document.getElementById("temp").textContent = Math.floor(json.main.temp - 270) + "º";
    // Obtener el icono de OpenWeatherMap (OWM)
    var iconOWM = json.weather[0].icon;
    // TODO: Colocar icono
    // @see: https://openweathermap.org/weather-conditions
    document.getElementById("forecastIcon");

}
