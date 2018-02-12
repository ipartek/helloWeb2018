//http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608


function ver_Tiempo(){


    var ciudad=document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s',ciudad);


    var mensaje=document.getElementById("mensaje");

    if(ciudad==""){

        mensaje.textContent="Escribe algo";

    }
    else{

        mensaje.textContent="Realizando Peticion";

       var url = "http://api.openweathermap.org/data/2.5/weather?q=";
          var url2 = "&APPID=bd5e378503939ddaee76f12ad7a97608";

        url = url + ciudad + url2;

        // O http://api.openweathermap.org/data/2.5/weather?q=$$ciudad$$&APPID=bd5e378503939ddaee76f12ad7a97608 y poner url= url.replace("$$ciudad$$",ciudad");


    //llamada Ajax
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) { /* 4 Es peticion finalizada 200 es una peticion activa */
           var json = JSON.parse(this.responseText);


            console.debug("json %0",json);
            rellenarWidget(json);

 }


           //mostrar en pantalla

   if (this.readyState == 4 && this.status == 404) {
               mensaje.textContent = "No existe la ciudad";
            }


     };
     xhr.open("GET", url , true);
     xhr.send(); /* Hacer que la web te envie los datos*/
    }




}

function rellenarWidget(json){

    document.getElementById("city").textContent=json.name; /*Cogemos el valor de la ciudad y la añadimos*/


    var temperatura=textContent=json.main.temp; //Recoge el valor de la API//
    temperatura_celsius= (temperatura -273.15); /*Pasa la temperatura Kelvin  a Grados Celsius

    Tambien se puede poner de otra manera :

    var tempCelsius = parseInt(json.main.temp) - 273;

    document.getElementById("temp").textContent = tempCelsius + "º";

    */
    temperatura_real=Math.round(temperatura_celsius); //Una vez hecho la conversion,redondeamos esa temperatura//

    document.getElementById("temp").textContent=temperatura_real + "º"; //Añadimos el contenido


    var iconurl= "http://openweathermap.org/img/w/"; //10d.png
    var icon= json.weather[0].icon;
    // Cambiar imagen
  document.getElementById("icon").src = iconurl + icon + ".png";


    console.log(imagen);/*Cogemos el valor del icono de la temperatura*/



}




