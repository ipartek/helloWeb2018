function calcular() {



    var numero1 = prompt("Dime un numero");
    var numero2 = prompt("Dime otro numero");

    if (numero1 == null) {

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




function validaredad() {

     var edad = prompt("Eres menor o mayor de edad");

    if (edad<18) {

       document.location.replace('menor.html');



    }

}
