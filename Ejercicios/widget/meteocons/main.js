var url = "http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608"


function verTiempo() {
    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje = document.getElementById("mensaje");


    if (ciudad == "") {
        mensaje.textContent = "Yo no conocer tu Ciudad";
    } else {
        mensaje.textContent = "Realizando peticion....";

        //TODO poner en la URL la ciudad

        // llamada Ajax/////////////////////////////////////////
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                rellenarWidget(json);

            };

        };
        xhr.open("GET", url, true);
        xhr.send();
    } //else
}


function rellenarWidget(json) {



    document.getElementById("city").textContent = json.name;
    //TODO cambiar de Kelvins a Celsius
    document.getElementById("temp").textContent = json.main.temp;
}
