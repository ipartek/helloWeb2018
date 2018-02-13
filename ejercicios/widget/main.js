// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bd5e378503939ddaee76f12ad7a97608
function verTiempo() {
    console.debug('Quiero ver el tiempo');
    var ciudad = document.getElementById("input_ciudad").value;
    var mensaje = document.getElementById("mensaje");
    if (ciudad == "") {
        mensaje.textContent = "No has introducido una ciudad";
    } else {
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&APPID=bd5e378503939ddaee76f12ad7a97608";
        //llamada Ajax
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);
                console.debug("json %o", json);
                mensaje.textContent = "El tiempo en "+ciudad;
                rellenarWidget(json);
            }
            else if (this.readyState == 4 && this.status == 400) {
                mensaje.textContent = "Tu ciudad no existe";
            }
        };
        xhr.open("GET", url, true);
        xhr.send();

    }
}
function rellenarWidget(json){
    var icono=json.weather[0].icon;
    var url="http://openweathermap.org/img/w/"+icono+".png"
     document.getElementById("ciudad").textContent=json.name;
    document.getElementById("temperatura").textContent=Math.round(json.main.temp-273)+"º";
     document.getElementById("icono").src=url;
}
