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

    //llamada Ajax
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
        //esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) { /* 4 Es peticion finalizada 200 es una peticion activa */
           var json = JSON.parse(this.responseText);


            console.debug("json %0",json);
            rellenarWidget(json);


           //console.info(json.bpi.USD.rate);

           //mostrar en pantalla






        }
     };
     xhr.open("GET", url , true);
     xhr.send(); /* Hacer que la web te envie los datos*/
    }




}

function rellenarWidget(json){

    document.getElementById("city").textContent=json.name; /*Cogemos el valor de la ciudad y la añadimos*/


    var temperatura=textContent=json.main.temp; //Recoge el valor de la API//
    temperatura_celsius= (temperatura -273.15); //Pasa la temperatura Fahrenheit  a Grados Celsius//
    temperatura_real=Math.round(temperatura_celsius); //Una vez hecho la conversion,redondeamos esa temperatura//

    document.getElementById("temp").textContent=temperatura_real + "º"; //Añadimos el contenido


    imagen=textContent=json.weather.icon;
    console.log(imagen);/*Cogemos el valor del icono de la temperatura*/



}




