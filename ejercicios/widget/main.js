// http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608

function verTiempo(){

    var ciudad = document.getElementById("input_ciudad").value;
    var url="http://api.openweathermap.org/data/2.5/weather?q="
    url=url.concat(ciudad,"&APPID=bd5e378503939ddaee76f12ad7a97608")
    var mensaje = document.getElementById("mensaje");

//    url="http://api.openweathermap.org/data/2.5/weather?q=##CITY##&APPID=bd5e378503939ddaee76f12ad7a97608";
//    url=url.replace(##CITY##,ciudad)

    mensaje.textContent=ciudad

    if(ciudad ==""){
        mensaje.textContent="La ciudad está vacía";
    } else{
        mensaje.textContent="Buscando información...";

        //llamada Ajax
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

        //esperamos que la respuesta sea correcta
        //state4 recibe el dato y status 200 dato existe
        if (this.readyState == 4 && this.status == 200) {
            var json=JSON.parse(this.responseText);
            console.debug("json %o",json);
            rellenarWidget(json);
            mensaje.textContent="TIempo de "+ciudad;
        }
        if (this.readyState == 4 && this.status == 404) {
            mensaje.textContent="La ciudad no existe";
        }
        };
        xhr.open("GET", url, true);
        xhr.send();
    };
};

function rellenarWidget(json){
    var iconUrl = "https://openweathermap.org/img/w/"

    document.getElementById("city").textContent = json.name;
    document.getElementById("temp").textContent =parseFloat(json.main.temp-273).toFixed(1)+"º";


    //cambiar icono
    var icon=json.weather[0].icon;
    document.getElementById("icon").src=iconUrl+icon+".png";
}
