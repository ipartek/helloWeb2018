function calcular() {

    var numero1;
    var numero2;
    var pedirOtro = false;

    do {
        numero1= parseInt(prompt("Dime un numero"));
        pedirOtro = isNaN(numero1);
    }

    while (pedirOtro);



    do {
        numero2= parseInt(prompt("Dime otro numero"));
        pedirOtro = isNaN(numero2);
    }

    while (pedirOtro);
    var resultado = parseInt(numero1) + parseInt(numero2);

    document.getElementById("resultado").textContent = resultado;


}




/* if (numero1 == null) {

        alert("no puedo calcular");

         numero1;
    }


    if (numero2== null) {

        alert("no puedo calcular");
       numero2;
    }

        var calcular = parseInt(numero1) + parseInt(numero2);



        document.getElementById("caja").innerHTML = calcular;


}


*/

function validaredad() {

    var edad = confirm("Eres menor o mayor de edad");

    if (edad == false) {

        document.location.replace('menor.html');



    }

}
