/****************************************************
                funcion para reproducir el sonido al pìnchar en la vocal y cambiar color
                *****************************************************************************/


function sonido(filename, container) {
    var vocal;
    vocal = document.getElementById("vocales");
    var audio = new Audio('../../sounds/' + filename + '.wav')
    audio.play();
    container.style.backgroundColor = "cornflowerblue";
    document.getElementById("desorden").disabled = true;
    vocal.style.pointerEvents = "none";




    audio.onended = function () {

        container.style.backgroundColor = "cadetblue";
        document.getElementById("desorden").disabled = false;
        console.debug("ya no esta sonando");
        vocal.style.pointerEvents = "auto";
    };

}
