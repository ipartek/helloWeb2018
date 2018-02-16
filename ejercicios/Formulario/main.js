function mostrar() {
    var x = document.getElementById("password");
    x.type = "text";
}

function ocultar() {
    var x = document.getElementById("password");
    x.type = "password";
}

function validar() {
    console.info("estoy dentro");
    var cHobbies = document.getElementsByName("hobby");
    var contador = 0;
    for (var i = 0; i < cHobbies.length; i++) {

        if (cHobbies[i].checked) {
            contador++;
        }
    }

    var sexo = document.forms[0].sexo.value;
    switch (sexo) {
        case ("H"):
            if (contador >= 1) {
                console.info("Formulario válido");
            } else {
                console.info("Si eres hombre, al menos 1 hobby");
            }
            break;

        case ("M"):
            if (contador >= 3) {
                console.info("Formulario válido");
            } else {
                console.info("Si eres mujer, al menos 3 hobbies");
            }
            break;
        case ("O"):
            console.info("Formulario válido");
            break;
    }

    var textarea=document.getElementsByTagName("textarea")[0]
    if(textarea.textLength===0 ||textarea.textLength>500){
        console.info("Textarea con texto NO valido")
    }
    else{
        console.info("Textarea con texto  valido")
    }
    return false;
}

document.getElementsByTagName('textarea')[0].onkeyup = function () {
document.getElementById('count').innerHTML = "Te quedan: " + (500 - this.value.length)+"caracteres de 500";

};

