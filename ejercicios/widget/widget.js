function verTiempo(){
    console.debug('Quiero ver el tiempo');


    var ciudad = document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo');
     var url = "http://api.openweathermap.org/data/2.5/weather?q="+ document.getElementById("input_ciudad").value +"&APPID=bd5e378503939ddaee76f12ad7a97608";
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
        var iconoUrl= "http://openweathermap.org/img/w/"; //09n.png;


        document.getElementById("city").textContent =json.name;
        //cambiar de kelvin a celsius
        var celsius= json.main.temp - 273;
        document.getElementById("temp").textContent =celsius.toFixed(2)+"º";

        //imagen
        var icon= json.weather[0].icon;

      document.getElementById("icon").src=
            iconoUrl + icon + ".png";



    }
}
