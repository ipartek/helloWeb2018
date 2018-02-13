/* JavaScript */


//Ejecutamos esta funcion al cargar la pagina Web
function init(){

    console.debug('debug DOM listo y cargado');//valor variables
    console.log('log DOM listo y cargado');//traceo entrar salis sitio
    console.info('info DOM listo y cargado');//informativos
    console.warn('warning DOM listo y cargado');//fallos no criticos
    console.error('error DOM listo y cargado');//errores graves/criticos
}

function pulsador(){
    console.info('Boton pulsador')
    var texto = document.getElementById("texto");
    var resultado= "Escribe algo M. quien seas";
    var color="black";
    var numero = document.getElementById("numero").value;
    if (numero!=""){
        if (numero%2==0){
            resultado= "Tu numero "+numero+" es par";
            color="green";
        }else{
            resultado= "Tu numero "+numero+" es impar";
            color="red";
        }
    }

    texto.textContent = resultado;
    texto.style.color= color
}
/* Llamada mediane ajax para conseguir el precio actual de un bitcoin
    @see:https://www.coindesk.com/api/
*/
function llamadaApi(){
    var url="https://api.coindesk.com/v1/bpi/currentprice.json";
    //llamada Ajax
    var xhr = new XMLHttpRequest();
    //Esperamos que la respuesta sea correcta
    var valor= document.getElementById("valor").value;
    xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json =JSON.parse(this.responseText);

        console.info(json.bpi.USD.rate);
        if(valor=="USD"){
            document.getElementById("precio").textContent =json.bpi.USD.rate+" $ Dolares";
        }else if(valor=="GBP"){
            document.getElementById("precio").textContent =json.bpi.GBP.rate+" £ Libras";
        }else{
            document.getElementById("precio").textContent =json.bpi.EUR.rate+" € Euros";
        }

     console.info(this.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
//aula ipartek seleccion

/* VARIABLES */
var premiados =[];//variable donde se guardan los premiados
var alumnosT =16;//variable donde decimos cuantos alumnos tenemos

function dado(){
    reset();
    do{
        var afortunado=parseInt((Math.random()*alumnosT)+1);
    }while(norepeat(afortunado))

    var texto= document.getElementById("ganador");
    var nombre= document.getElementById(afortunado);
    texto.textContent ="El ganador es: "+nombre.textContent;
    texto.style.color= "green";
    nombre.style.backgroundColor= "#72FE95";

}

function reset(){
    for (i=1;i<=alumnosT;i++){
        var reset=document.getElementById(i);
        reset.style.backgroundColor="skyblue";
    }

}

function norepeat(num){

    var devolver =false

    for (i=0;i<=premiados.length;i++){
        if (num==premiados[i]){
            devolver= true;
        }
    }
    if (devolver == false){
        premiados.push(num);
    }
    if (premiados.length==alumnosT){
        premiados= [];
        reset();
    }
    return devolver;
}
//ordenar de > con la metodologia BubbleSort
function ordenacionEnBurbuja(){
    var romper=-1;
    var numeroDesordenados= [3,0,1,8,7,2,5,4,6,9];
    for (i=0;i++;i>0){
        for (j=0;j++;j>numeroDesordenados.length){
            var z=j++;
            if(numeroDesordenados[j] >numeroDesordenados[z]){

                var aux=numeroDesordenados[j];
                numeroDesordenados[j]=numeroDesordenados[z];
                numeroDesordenados[z]=aux;
                romper=1;
            }
        }
        if rom

    }

}
