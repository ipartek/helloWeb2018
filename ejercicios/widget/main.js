// http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608

function verTiempo() {

    console.debug("Funcion verTiempo");

    var ciudad = document.getElementById("input_ciudad").value;

    console.debug("Quiero ver el tiempo de %s ", ciudad);

    if (ciudad == "") {
        document.getElementById("mensaje").textContent = "Introduce una ciudad"
    } else {

        consultarTiempo(ciudad);

    }
}


function consultarTiempo(ciudad) {

    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);

            document.getElementById("mensaje").textContent = "Tu ciudad es " + ciudad;

            rellenarWidget(json);
        }
        if (this.readyState == 4 && this.status == 404) {
            document.getElementById("mensaje").textContent = "No se encuentra la ciudad " + ciudad;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

}


function rellenarWidget(json) {
    document.getElementById("city").textContent = json.name;

    document.getElementById("temp").textContent =
        (parseInt(json.main.temp) - 273) + "º";

    document.getElementById("icon").src = "http://openweathermap.org/img/w/" + (json.weather[0].icon) + ".png";
}
