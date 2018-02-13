function passToggle() {

    console.debug("pass toggle");



    if (document.getElementById("pass").type == "password") {
        document.getElementById("pass").type = "text";
        document.getElementById("ojo").className = "fa fa-eye";
    } else {
        document.getElementById("pass").type = "password";
        document.getElementById("ojo").className = "fa fa-eye-slash";
    }

}

function validar(element){

    //Hay que resetear el CustomValidity para que ejecute checkValidity(), si no da error
    element.setCustomValidity('');

    if (!element.checkValidity()) {

        // set custom validation message
        //console.debug("if");
        element.setCustomValidity("El campo no es correcto");

    } else {

        // reset the validation message - makes it valid for checkValidity function
        //console.debug("else");
        element.setCustomValidity('');

    }

/*
function validate() {


    console.debug("validate function");
    if (!document.getElementById('nombre').checkValidity()) {
        document.getElementById("nombre").setCustomValidity('Introduce un nombre valido');
        console.debug("invalid name");
    } else {

        document.getElementById("nombre").setCustomValidity("");
        console.debug("else");
    }

    if (!document.getElementById('apellido').checkValidity()) {
        document.getElementById("apellido").setCustomValidity('Introduce un apellido valido');
    }

    if (!document.getElementById('email').checkValidity()) {
        document.getElementById("email").setCustomValidity('Introduce un email valido');
    }

    if (!document.getElementById('pass').checkValidity()) {
        document.getElementById("pass").setCustomValidity('Introduce una contraseña valida');
    }

    if (!document.getElementById('address').checkValidity()) {
        document.getElementById("address").setCustomValidity('Introduce una direccion');
    }

    if (!document.getElementById('cp').checkValidity()) {
        document.getElementById("cp").setCustomValidity('Introduce un codigo postal valido');
    }


}
*/




}
