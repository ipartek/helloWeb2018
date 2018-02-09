// http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608

function verTiempo(){
    var url="http://api.openweathermap.org/data/2.5/weather?q="
    //Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608";
    url=url.concat(ciudad,"&APPID=bd5e378503939ddaee76f12ad7a97608")
    console.debug(url);
    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s',ciudad);
    var mensaje = document.getElementById("mensaje");
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
        }
        };
        xhr.open("GET", url, true);
        xhr.send();
    };
};

function rellenarWidget(json){
    document.getElementById("city").textContent = json.name;
    document.getElementById("temp").textContent =concat(parseInt(json.main.temp)-273);
}
