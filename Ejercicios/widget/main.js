function verTiempo() {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=";
    var url2 = "&APPID=bd5e378503939ddaee76f12ad7a97608";
    var ciudad = document.getElementById("input_ciudad").value;
    if (ciudad.length <= 0) {
        mensaje.textContent = ("Mi no entender tu ciudad =D");
    } else {
        mensaje.textContent = ("Realizando peticion =D");
        //llamada Ajax
        var xhr = new XMLHttpRequest();
        //Esperamos que la respuesta sea correcta
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                rellenarWidget(json);
            }
            if (this.readyState == 4 && this.status == 404) {
               mensaje.textContent = ("No existe la ciudad");
            }
        };
        xhr.open("GET", url+ciudad+url2, true);
        xhr.send();

    }
}
/* Llamada mediane ajax para conseguir el precio actual de un bitcoin
    @see:https://www.coindesk.com/api/
*/
function rellenarWidget(json) {
    document.getElementById("city").textContent = json.name;
    //Cambiar kelvin a celsius
    var kelvin= parseInt(json.main.temp);
    var celsius= Math.round(kelvin-273);
    document.getElementById("temp").textContent =celsius+"º";
    var tiempo="https://openweathermap.org/img/w/"
    var detalle=json.weather[0].icon;
    var tiempo2=".png"
    document.getElementById("icon").src=tiempo+detalle+tiempo2;

}


