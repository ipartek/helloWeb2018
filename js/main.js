/* JavaScript */


//Ejecutamos esta función al cargar la página web

function init() {
    //5 niveles de logs otrazas ordenados por prioridad
    console.debug('debug DOM listo y cargado');
    console.log('logDOM listo y cargado');
    console.info('info DOM listo y cargado');
    console.warn('warn DOM listo y cargado');
    console.error('error DOM listo y cargado');
}

function pulsador(){
    console.info('Boton pulsado');
    var texto = document.getElementById("texto");
    var numero= document.getElementById("numero").value;
    mensaje = "No ha introducido un número";
    color="black"

    if (numero!=""){
        if  (numero % 2==0){
            mensaje = numero+" es par";
            color="green";
        }


        else{
            mensaje =numero + " es impar";
            color="blue";
        }
    }

    texto.textContent=mensaje;
    texto.style.color= color;
}
/**
* llamada medaianta Ajax para conseguir el precio actual de un Bitcoin
@see : https://api.coindesk.com/api/
*
*/
function llamadaApi(){
    var url="https://api.coindesk.com/v1/bpi/currentprice.json"
    var formato=document.getElementById("formato-precio").value;
    var precio = ""

    //llamada Ajax
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     var json = JSON.parse(this.responseText);
     console.info(json.bpi.USD.date)
     if(formato=="Euros"){
      precio= json.bpi.EUR.rate;

    }
     else if(formato=="Libras"){
         precio = json.bpi.GBP.rate;
     }
     else if(formato=="Dolares"){
         precio = json.bpi.USD.rate;
     }
     document.getElementById("precio").textContent= precio+" " +formato;
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
function ordenacionEnBurbuja(){
    var numerosDesordenados=[3,0,1,8,7,2,5,4,6,9];
    var numerosOrdenados=[];
    var noHayCambios=false;
    var aux=0;
    var maximo;
    while(noHayCambios==false){
        noHayCambios=true;
        for(var i=0;i<numerosDesordenados.length-1;i++){
            if(numerosDesordenados[i]<numerosDesordenados[i+1]){
                noHayCambios=false;
                aux=numerosDesordenados[i+1];
                numerosDesordenados[i+1]=numerosDesordenados[i];
                numerosDesordenados[i]=aux;

            }
        }
        if(noHayCambios==true){
            while(numerosDesordenados.length>0){
                maximo=numerosDesordenados.pop();
                numerosOrdenados.push(maximo);
            }
        }
        else{
            maximo=numerosDesordenados.pop();
            numerosOrdenados.push(maximo);
        }
        

    }
    console.debug(numerosOrdenados);

}
