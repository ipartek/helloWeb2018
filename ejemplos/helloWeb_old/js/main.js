/* JavaScript */
//Ejecutamos esta funcion al cargar la pagina web
function init(){

    console.debug('Verbose DOM listo y cargado');
    console.info('DOM listo y cargado');
    console.log('log DOM listo y cargado');
    console.info('Info DOM listo y cargado');
    console.warn('Warm DOM listo y cargado');
    console.error('Error DOM listo y cargado');

}

function pulsado(){
    console.info('Boton pulsado');

    var texto =document.getElementById("texto");
    texto.textContent="Marianito el corto";
    var mensaje="";

    var numero = document.getElementById("numero");
    if ("" == numero.value){
        mensaje="No me seas vago y dime un numero";
    }else{
        if(numero.value % 2 == 0){
            mensaje= numero.value + " es PAR";
        }else{
            mensaje= numero.value + " es IMPAR";
        }

    }
    texto.textContent=mensaje;

}
/**
*Llamada mediante Ajax para conseguir el precio actual de un Bitcoin
@see:https://www.coindesk.com/api/
*/
function llamadaApi(){
    var x = document.getElementById("mySelect");

    var strUser = x.options[x.selectedIndex].value;
    if(strUser=="USD"){
        var url= "https://api.coindesk.com/v1/bpi/currentprice.json";
        //AJAX
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
      //Esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json= JSON.parse(this.responseText);
        //console.info(json.bpi.USD.rate);
        //mostrar en pantalla
            document.getElementById("precio").textContent = json.bpi.USD.rate + " Dolares"

    }
  };
    xhr.open("GET", url, true);
    xhr.send();

    }
 else if(strUser=="EUR"){
        var url= "https://api.coindesk.com/v1/bpi/currentprice.json";
        //AJAX
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
      //Esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json= JSON.parse(this.responseText);
        //console.info(json.bpi.USD.rate);
        //mostrar en pantalla
            document.getElementById("precio").textContent = json.bpi.EUR.rate + " Euros"

    }
  };
    xhr.open("GET", url, true);
    xhr.send();

    }

     if(strUser=="GBP"){
        var url= "https://api.coindesk.com/v1/bpi/currentprice.json";
        //AJAX
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
      //Esperamos a que la respuesta sea correcta
        if (this.readyState == 4 && this.status == 200) {
            var json= JSON.parse(this.responseText);
        //console.info(json.bpi.USD.rate);
        //mostrar en pantalla
            document.getElementById("precio").textContent = json+bpi.EUR.rate + " Euros"

        }


  };
    xhr.open("GET", url, true);
    xhr.send();

    }


}

function ordenacionEnBurbuja{
    var numerosDesordenados = [3,0,1,8,7,2,5,4,6,9];
    var i=0;
    for(i=0;i<numerosDesordenados.length;i++)
        {
            for(i=numerosDesordenados.lenght();i=0;i--)
                {
                            if(numerosDesordenados[i] > numerosDesordenados[i+1])
            {


            numerosDesordenados[i]=numerosDesordenados[i+1];
            numerosDesordenados[i+1]=numerosDesordenados[i];
            }

        }
    console.log(numerosDesordenados);
}

}
