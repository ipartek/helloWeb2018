function mostrar() {
    var x = document.getElementById("password");
    x.type = "text";
}

function ocultar() {
    var x = document.getElementById("password");
    x.type = "password";
}

function validar() {
    var errores=""
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
                errores=errores+"\nSi eres hombre, al menos 1 hobby");
            }
            break;

        case ("M"):
            if (contador >= 3) {
                console.info("Formulario válido");
            } else {
                errores=errores+"\nSi eres mujer, al menos 3 hobbies");
            }
            break;
        case ("O"):
            console.info("Formulario válido");
            break;
    }

    var textarea=document.getElementsByTagName("textarea")[0]
    if(textarea.textLength===0 ||textarea.textLength>500){
        errores=errores+"\nTextarea con texto NO valido"

    }
    else{
        console.info("Textarea con texto  valido")
    }
    if (errores!=""){
        alert(errores);
    }
    return (errores=="")?true:false;
}

document.getElementsByTagName('textarea')[0].onkeyup = function () {
document.getElementById('count').innerHTML = "Te quedan: " + (500 - this.value.length)+"caracteres de 500";

};

