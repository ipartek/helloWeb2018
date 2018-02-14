var numeroInput= document.getElementById("numeroInput");
var cntNumDes = document.getElementById("cntNumDes");
var spanNumero='<span class="box">$$$</span>';
var aDesordenados = []; //array con números desordenados
var aOrdenados = []; //array con números ordenados

/**
* recoge un número del input y lo introduce en el div co id #cntNumDes
*/
function nuevoNumero(){
    console.debug("añadir nuevo número %s", numeroInput.value);


    cntNumDes.innerHTML += spanNumero.replace('$$$', numeroInput.value);//le ponemos += para que no elimine los números que tenía
    aDesordenados.push(numeroInput.value);//agregamos una posición al array con push

    numeroInput.value = "";//límpia el input
    numeroInput.focus();//devuelve el foco al input
}

function validacion(){
    if(aDesordenados.length == 0){
        //document.getElementById("alerta01").style.display = "block";
        mostrarTexto("alert","No seas vag@ introduce un elemento por lo menos.", "alert-warning")
    }else if(aDesordenados.length>10){
        mostrarTexto("alert","No se puede metar mas de 10 números.", "alert-success")
    }else if(aDesordenados.length < 2){
         mostrarTexto("alert","No seas vag@ introduce más de un elemento.", "alert-warning")
    }else{

    ordenarBurbuja();
    pintarBurbuja();

    }
}

function ordenarBurbuja(){

    var longitud = aDesordenados.length;
    console.log(longitud);
    //recorreremos todos los elementos, excepto el último que ya esta en su sitio
    for(var i=0; i< longitud; i++){

        console.log(aDesordenados);

        for(var j=0;j<longitud-i-1;j++){

            //comparamos

            if(aDesordenados[j]>aDesordenados[j+1]){

                var numero=aDesordenados[j];//guardamos el numero mayor en el auxiliar
                aDesordenados[j] = aDesordenados[j+1];
                aDesordenados[j+1]= numero;

                console.log(aDesordenados);
            }//fin del if
        }//fin for interno


        }//fin for externo


        aOrdenados = aDesordenados;

    }//fin funcion

function pintarBurbuja(){
    var i=0;
    for(i in aOrdenados){
        cntNumOrd.innerHTML += spanNumero.replace('$$$', aOrdenados[i]);
    }
}

function limpiar(){
    cntNumDes.innerHTML="";//con esto se deja de ver lo escrito
    cntNumOrd.innerHTML="";
    aOrdenados.length = 0;//con esto se borra de memoria
    aDesordenados.length = 0;

}
/*
muestra una alerta de bootstrap
*/
function mostrarTexto(id, texto, clase){
    var alerta = ' <div class="alert ##clase## alert-dismissible" role="alert" id="alerta01"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>##texto##</strong> .</div>';
    var contenedor = document.getElementById(id);
    contenedor.innerHTML = "";//si hay algo en el contenedor lo limpio

    contenedor.innerHTML = alerta;
    contenedor.innerHTML = contenedor.innerHTML.replace("##texto##", texto);
    contenedor.innerHTML = contenedor.innerHTML.replace("##clase##", clase);

}

