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

            var vNombre = validarTexto(nombre, 2, 25);
            var vApellido = validarTexto(apellido, 2, 25);
            var vEstadoCivil = validarSelect(estadoCivil);
            var vIdioma = validarCheckbox(idiomas, 1, 9999);
            var vProfesion = validarRadio(profesion);
            var vComentario = validarTextarea(comentario, 25, 500);

            if (vNombre && vApellido && vEstadoCivil && vIdioma && vProfesion && vComentario) {

            } else {
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
