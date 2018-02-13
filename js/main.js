/* JavaScript */
// Ejecutamos esta funcion al cargar la pagina Web
function init() {

    //ordenados por prioridad, 5 niveles de log o trazas
    console.log('LOG(verbose): DOM listo y cargando'); //tracear, por donde va
    console.debug('Debug: DOM listo y cargando');//valores de variable
    console.info('Info: DOM listo y cargando');//informativos
    console.warn('Warning: DOM listo y cargando');//fallos pequeños
    console.error('Error: DOM listo y cargando');//errores graves

}
function pulsador (){
    console.info('Boton pulsado');
    var texto = document.getElementById ("texto");
    var numero = document.getElementById ("numero").value;
    console.info(numero);
   if (numero == null || numero =="")
        texto.textContent = "Escriba un valor";
    else if (numero % 2 == 0)
        texto.textContent = "Es par";
    else
        texto.textContent = "Es impar";



   /* texto.textContent = "El boton esta pulsado";*/
}



function llamadaApi() {
    /*llamada medinate Ajax para conseguir el precio actual de un Bitcoin
    @see: https://www.coindesk.com/api/
    */
    /*var e = document.getElementById ("idTipoMoneda");
    var tipoMoneda = e.options[e.selectedIndex].value; */
    var tipoMoneda = document.getElementById ("idTipoMoneda").value;
    /*console.debug ('Moneda seleccionada %s',tipoMoneda);*/
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
    /* llamada Ajax (para hacer llamadas de forma asincrona a una url)*/
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        /*esperamos a que haya cargado los datos (readyState == 4) y la respuesta sea correcta (this.status == 200 peticion es correcta)*/
    if (this.readyState == 4 && this.status == 200) {
     /* document.getElementById("demo").innerHTML = this.responseText;*/
        var json =JSON.parse(this.responseText);
        console.info(json.bpi.USD.rate);
        //mostrar en pantalla
        if (tipoMoneda == "euro")
                valor =json.bpi.EUR.rate + " Euros";
        else if(tipoMoneda =="dolar")
            valor =json.bpi.USD.rate + " Dolares";
        else if(tipoMoneda =="libra")
            valor =json.bpi.GBP.rate + " Libras";
        document.getElementById("precio").textContent = valor
    }

  };
    /* get recoge datos del servidor, post envias datos al servidor */
  xhr.open("GET", url, true);
  xhr.send();
}
//ordenar de menor a mayor con el metodo de la burbuja

function ordenacionEnBurbuja(){
    var numerosDesordenados = [3,0,1,8,7,2,5,4,6,9]

    do {
    for (i=0;i++;numerosDesordenados.length-1)
        {
            var actual= numerosDesordenados[i];
            var siguiente = numerosDesordenados[i++];
            if (actual>siguiente)
                {
                    numerosDesordenados[i]=siguiente;
                    numerosDesordenados[i++]=actual;
                }
        }
    }while (numerosDesordenados[0]>numerosDesordenados[numerosDesordenados.length-1])
}
