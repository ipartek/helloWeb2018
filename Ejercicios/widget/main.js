var url = "http://api.openweathermap.org/data/2.5/weather?q=##CITY##&APPID=bd5e378503939ddaee76f12ad7a97608"


function verTiempo(){
    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje = document.getElementById("mensaje");

    if ( ciudad == "" ){
        mensaje.textContent = "Yo no conocer tu ciudad";
    }else{
    mensaje.textContent = "Realizando peticion...";

        url = url.replace("##CITY##", ciudad);

        // Llamada Ajax /////////////////////
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

        //esperamos a que la respuesta sea correcta

        if (this.readyState == 4 && this.status == 200){
           var json = JSON.parse(this.responseText);
            console.debug("json %o", json);
            rellenarWidget(json);
            }

            if (this.readyState == 4 && this.status == 404){
           mensaje.textContent = "No exista esa ciudad";
            }

        };

        xhr.open("GET", url, true);
        xhr.send();

    }
}

function rellenarWidget(json){

    var iconUrl = "http://openweathermap.org/img/w/"; //09.png

    document.getElementById("city").textContent = json.name;
    //TODO cambiar de Kelvins a Celsius

    var tempCelsius = parseInt(json.main.temp) -273;

    document.getElementById("temp").textContent = tempCelsius + "º";


    // cambiar imagen icono

    var icon = json.weather[0].icon
    document.getElementById("icon").src = iconUrl + icon + ".png";



}

