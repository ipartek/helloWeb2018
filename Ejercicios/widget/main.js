//http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608
 var url = "http://api.openweathermap.org/data/2.5/weather?q=Bilbao&APPID=bd5e378503939ddaee76f12ad7a97608";

function ver_Tiempo(){


    var ciudad=document.getElementById("input_ciudad").value;
    console.debug('Quiero ver el tiempo de %s',ciudad);


    var mensaje=document.getElementById("mensaje");

    if(ciudad==""){

        mensaje.textContent="Escribe algo";

    }
    else{

        mensaje.textContent="Realizando Peticion";




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

    document.getElementById("city").textContent=json.name;
    var temperatura=document.getElementById("temp").textContent=json.main.temp;

    temperatura_real= (temperatura -273.15) + "º";
    document.getElementById("temp").textContent=temperatura_real;

    imagen= document.getElementById("icono").textContent=json.weather.icon;
}




