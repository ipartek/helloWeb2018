function validar(){
        console.log("Validar formulario");
        //Más seguro coger los formularios por id ya que de esta forma, aunque tengas varíos formularios te cogerá siempre el primero.
        //var formulario = document.forms[0];
        //return true;
        var formulario = document.getElementById("datos");
        var nombre = datos.nombre.value;
        var apellido = datos.apellido.value;
        var edad = datos.edad.value;


    /*var nombreYApellido = "Nombre: " + datos.nombre.value + "\n";
        nombreYApellido += "Apellido: " + datos.apellido.value;
    var dni = "DNI: " + datos.dni.value;
    var sexo = "Sexo: ";
    var encontrado = false;
    for (i=0; i<datos.sexo.length && !encontrado; i++){
        if(datos.sexo[i].checked){
            sexo += datos.sexo[i].value;
            encontrado = true;

           }
        var mail = "Correo Electrónico: " + datos.mail.value;

    }

    var msgFinal = nombreYApellido + "\n" + dni + "\n" + sexo + "\n"
    alert(msgFinal);*/
}
