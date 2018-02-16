function contarChecks(){

    var cVehiculos = document.getElementsByName("vehicle");
    console.debug("checkbox "+ cVehiculos.length);

    var contador=0;

    for( var i = 0; i < cVehiculos.length;i++){

        if(cVehiculos[i].checked){
           contador++;
           }
    }

    document.getElementById("resultado").textContent = contador;

}


