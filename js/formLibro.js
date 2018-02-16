        //elementos del formulario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var estado = document.getElementById('estadoCivil');
        var idiomas = document.getElementsByName('idioma');
        var profesion = document.getElementsByName('profesion');
        var comentario = document.getElementById('comentario');


        function mostrarDatos() {

            var valido = validar();

            if (valido) {

                //elementos del modal
                var mNombre = document.getElementById('pNombre');
                var mApellido = document.getElementById('pApellido');
                var mEstado = document.getElementById('pEstado');
                var mIdiomas = document.getElementById('pIdiomas');
                var mProfesion = document.getElementById('pProfesion');
                var mComentario = document.getElementById('pComentario');

                //asignar valores del formulario al modal
                mNombre.innerHTML = 'NOMBRE: ' + nombre.value;

                mApellido.innerHTML = 'APELLIDO: ' + apellido.value;

                mEstado.innerHTML = 'ESTADO CIVIL: ';
                switch (parseInt(estado.value)) {
                    case (1):
                        mEstado.innerHTML += 'Soltero';
                        break;

                    case (2):
                        mEstado.innerHTML += 'Casado';
                        break;

                    case (3):
                        mEstado.innerHTML += 'Divorciado';
                        break;

                    case (4):
                        mEstado.innerHTML += 'Viudo';
                        break;
                }

                mIdiomas.innerHTML = 'IDIOMAS: ';
                for (i = 0; i < idiomas.length; i++) {

                    if (idiomas[i].checked) {
                        mIdiomas.innerHTML += idiomas[i].value + ' ';
                    }

                }


                mProfesion.innerHTML = 'PROFESION: ';
                var profesionValue;
                for (i = 0; i < profesion.length; i++) {

                    if (profesion[i].checked) {
                        profesionValue = profesion[i].value;
                    }

                }
                switch (parseInt(profesionValue)) {
                    case (1):
                        mProfesion.innerHTML += 'Autonomo';
                        break;

                    case (2):
                        mProfesion.innerHTML += 'Trabajador por cuenta ajena';
                        break;

                    case (3):
                        mProfesion.innerHTML += 'Desempleado';
                        break;

                    case (4):
                        mProfesion.innerHTML += 'Jubilado';
                        break;
                }

                mComentario.innerHTML = 'COMETARIOS: ' + comentario.value;

                $('#myModal').modal('show');

            } //end if(valido)

        }

        function validar() {

            var vNombre = validarTexto(nombre);
            var vApellido = validarTexto(apellido);
            var vEstadoCivil = validarSelect(estadoCivil);
            var vIdioma = validarCheckbox(idioma,1);
            var vProfesion = validarRadio(profesion);
            var vComentario = validarTextarea(comentario, 25, 500);

            if(vNombre){
                if(vApellido){
                    if(vEstadoCivil){
                        if(vIdioma){
                            if(vProfesion){
                                if(vComentario){
                                    return true;
                                }
                            }
                        }
                    }
                }
            } else {
                return false;
            }

        }

function validarTexto(texto){

}

function validarSelect(select){

}

function validarCheckbox(checkbox, minimo){

}

function validarRadio(radio){

}

function validarTextarea(texto, min, max){

}

