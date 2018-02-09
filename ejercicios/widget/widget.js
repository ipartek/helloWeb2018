function verTiempo(){
    console.debug('Quiero ver el tiempo');
    var url = "http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608";

    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo');
    var mensaje = document.getElementById("mensaje");
     mensaje.textContent = ciudad;

    if( ciudad == ""){
        mensaje.textContent = "Yo no conocer tu ciudad";
    }
    else{
        mensaje.textContent = "realizando petición...";

        //todo poner en la URL la ciudad

        //lamada Ajax
     var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
           var json = JSON.parse(this.responseText);
            console.debug("json %o", json);
            rellenarWidget(json);
             }
        };
     xhr.open("GET", url , true);
     xhr.send();
    }

    function rellenarWidget(json){
        document.getElementById("city").textContent =json.name;

        document.getElementById("temp").textContent =json.main.temp;

    }
}
