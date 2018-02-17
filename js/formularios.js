    //elementos del formulario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var observaciones = document.getElementById('observaciones');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var direccion = document.getElementById('address');
    var cp = document.getElementById('cp');
    var sexo = document.getElementsByName('sexo');
    var aficion = document.getElementsByName('aficion');
    var condiciones = document.getElementsByName('condiciones');
    var provincia = document.getElementById('busqueda_provincia');

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


    /*
    function validar(element) {

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


    }
    */

    function validate() {

        //mas seguro coger por id
        var formulario = document.forms[0];

        //console.log('validar formulario' + formulario);

        var validar = validarForm();
        console.log('validar', validar);
        return (validar);
    }



    function validarForm() {



        var vNombre = validarTexto(nombre, 2, 25);
        var vApellido = validarTexto(apellido, 2, 25);
        var vEmail = validarTexto(email, 2, 25);
        var vPass = validarTexto(pass, 6, 8);
        var vDireccion = validarTexto(direccion, 2, 25);
        var vCp = validarTexto(cp, 5, 5);
        var vSexo = validarRadio(sexo);

        var sexoValue;
        for (i = 0; i < sexo.length; i++) {
            if (sexo[i].checked) {
                sexoValue = sexo[i].value;
            }
        }

        var minAficiones;
        if (sexoValue == 'm') {
            minAficiones = 1;
        } else if (sexoValue == 'f') {
            minAficiones = 3;
        } else if (sexoValue == 'o') {
            minAficiones = 0;
        }
        var vAficion = validarCheckbox(aficion, minAficiones, 999);;

        var vCondiciones = validarCheckbox(condiciones, 1, 1);
        var VProvincia = validarSelect(provincia);
        var vObservaciones = validarTexto(observaciones, 25, 500);

        if (vNombre && vApellido && vEmail && vPass && vDireccion && vCp && vSexo && vAficion && vCondiciones && VProvincia && vObservaciones) {
            return true;
        } else {
            console.log('FALSE');
            return false;
        }

    }

    function validarTexto(texto, min, max) {

        if (texto.value.length >= min && texto.value.length <= max) {
            return true;
        } else {
            return false;
        }

    }

    function validarSelect(select) {
        if (select.value != '0') {
            return true;
        } else {
            return false;
        }
    }

    function validarCheckbox(checkbox, min, max) {

        var marcados = 0;
        for (i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                marcados++;
            }
        }

        if (marcados >= min && marcados <= max) {
            return true;
        } else {
            return false;
        }
    }

    function validarRadio(radio) {

        var marcados = 0;
        for (i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                marcados++;
            }
        }

        if (marcados == 0) {
            return false;
        } else {
            return true;
        }
    }

    function validarTextarea(texto, min, max) {
        if (texto.value.length >= min && texto.value.length <= max) {
            return true;
        } else {
            return false;
        }
    }
