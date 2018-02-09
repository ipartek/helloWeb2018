// JSON para ejercicio weather http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bd5e378503939ddaee76f12ad7a97608 lo metemos en la URl y sale un churro. Buscamos un formater de JSON p.e. https://jsonformatter.org/ y pegamos el churro que nos sale en la pagina anterior (la URL) para que nos salga un JSON

function verTiempo(){
    var ciudad=document.getElementById("input_ciudad").value;
    //al inspeccionar web marcar Verbose
    console.debug('Quiero ver el tiempo de %s', ciudad);

    var mensaje=document.getElementById("mensaje");

    if (ciudad==""){
        mensaje.textContent= "Yo no conocer tu Ciudad";
    }else{
         mensaje.textContent= "realizando petición...";
    }









}
