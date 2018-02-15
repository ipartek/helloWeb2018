function calcular() {



    var numero1 = prompt("Dime un numero");
    var numero2 = prompt("Dime otro numero");


    do {
        alert("No puedo calcular");
        numero1 = prompt("Dime un numero");
    } while (numero1 == null || numero1 = "");

    do {
        alert("No puedo calcular");
        numero2 = prompt("Dime otro numero");
    } while (numero1 == null || numero1 = "");

    do {
        var calcular = parseInt(numero1) + parseInt(numero2);



        document.getElementById("caja").innerHTML = calcular;



    }
    while (numero1 != false && numero2 != false)



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
