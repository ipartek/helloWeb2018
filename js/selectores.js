function contarChecks(){

    var cVehiculos = document.getElementsByName('vehicle');

    console.debug('Checkbox ' + cVehiculos.length);

    var contador = 0;

    for(i=0; i < cVehiculos.length; i++){
        if(cVehiculos[i].checked){
            contador++;
        }
    }

    console.debug('Checked ' + contador);

    document.getElementById('resultado').innerHTML = contador;

    if (contador>3){
        document.getElementById('resultado').style.color = 'red';
    }

}

function asignarClaseRoja(){

    var pRojo = document.getElementById('rojo');
    var aSpan = pRojo.getElementsByTagName('span');

    for (i=0; i<aSpan.length;i++){

        aSpan[i].classList.add('textoRojo');

    }

}

function asignarClaseVerde(){


    var aSpanVerde = document.querySelectorAll('#verde span');

    for (i=0; i<aSpanVerde.length;i++){

        aSpanVerde[i].classList.add('textoVerde');

    }

}

function contarClases(){

    var parrafo = document.getElementById('ejemplo');

    parrafo.innerHTML = 'Tiene ' + parrafo.classList.length + ' clases. La clase "viernes" es la numero ' + calcNumeroClase('ejemplo','viernes');

}

function calcNumeroClase(id,clase){

    var elemento = document.getElementById(id);

    var listaClases = elemento.classList;

    for (i=0; i< listaClases.length; i++){

        if (listaClases[i]==clase){
            return(i+1);
        }

    }

}

function colorToggle(){

    var parrafo = document.getElementById('ejemplo');
    var boton = document.getElementById('toggleButton');

    parrafo.classList.toggle('textoRojo');
    parrafo.classList.toggle('textoVerde');

    boton.classList.toggle('btn-danger');
    boton.classList.toggle('btn-success');

    if (boton.classList.contains('btn-danger')){

        boton.innerHTML = 'Cambiar a Rojo';

    } else {

        boton.innerHTML = 'Cambiar a Verde';
    }



}

