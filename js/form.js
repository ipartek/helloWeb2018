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

function validate() {


    if (!document.getElementById('nombre').checkValidity()) {
        document.getElementById("nombre").setCustomValidity('Introduce un nombre valido');
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

            if (!document.getElementsByName('sexo').checkValidity()) {
        document.getElementsByName("sexo").setCustomValidity('Elige un sexo');
    }
}
