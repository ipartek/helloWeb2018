

function init(){

    console.info("Dom listo y cargado");
}

function pulsador(){

    console.info("pulsado");

    var texto= document.getElementById("texto");
    var numero= document.getElementById("numero").value;
    var mensaje= "";
    if(""==numero){mensaje= "no me sea vago y dime un numero"

    }else{


    if(numero % 2==0){
        mensaje=numero +" es par";
    }
    else{ mensaje=numero +" es impar";}
    }
    texto.textContent=mensaje;

}

/*
*llamada mediante Ajax para conseguir el precio actual del Bitcoin
*@see: https://www.coindesk.com/api/
*/
     function llamadaApi(){

        var url="http://api.coindesk.com/v1/bpi/currentprice.json"
      var moneda= document.getElementById("moneda").value;
         console.debug("moneda selecciona%",moneda)
        //llamada Ajax
        var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //esperamos llamada correcta
        console.info(this.responseText);
     document.getElementById("demo").innerHTML = this.responseText;
        console.info(json.bpi.USD.rate);
        document.getElementById("precio").textContent=json.bpi.USD.rate +"Dolares";
    }
  };
  xhttp.open("GET", url , true);
  xhttp.send();

     }
