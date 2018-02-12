

function ver_Tiempo(){
    var ciudad = document.getElementById("input_ciudad").value.toString();
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje = document.getElementById("mensaje");
    if (ciudad == "")
        {
            mensaje.textContent = "Yo no conozco tu ciudad";
        }
    else{
            mensaje.textContent = "Realizando peticion.............";
    }


var url1= "http://api.openweathermap.org/data/2.5/weather?q=";


var url3 = ciudad + "&APPID=bd5e378503939ddaee76f12ad7a97608";
var url=  url1 + url3;
       var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //esperamos a que la respuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
               var json = JSON.parse(this.responseText);

                console.debug("json %o", json);
                rellenarWidget(json);
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

function rellenarWidget(json){

   var icono = document.getElementById("icono");
   icono.setAttribute("data-icon","B");
   var descripcion= json.weather[0].description
   if(descripcion == "light rain")
       icono.setAttribute("data-icon","C");
    else
        icono.setAttribute("data-icon","B");
    document.getElementById("city").textContent = json.name;
    //TODO cambiar de Kelvins a Celsius
  //  document.getElementById("temp").textContent = json.main.temp;
    kelvin = json.main.temp;
    celsius = kelvin - 273;
    celsius = celsius.toFixed(1);
    document.getElementById("temp").textContent = celsius + "ºC";



}


;
