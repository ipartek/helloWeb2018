/*Solucion a implementar en caso de tener declarado un eventListener. No sirve en este caso porque llamamos a la funcion con un onClick*/

function sonido(filename, container) {

    container.style.backgroundColor = 'orange';
    container.addEventListener('click', sonido );

    console.debug(container.parentElement);



/*
    for (var i = 0; i < container.parentElement.length; i++) {
        container.parentElement[i].removeEventListener('click', sonido);
    }
*/

    container.parentElement.childNodes.removeEventListener('click', sonido);



    var audio = new Audio('../../sounds/' + filename + '.wav');
    audio.play();
    audio.onended = habilitar;

}

function habilitar() {
    //volver habilitar botones

    /*
    for (var i = 0; i < container.parentElement.length; i++) {
        container.parentElement[i].addEventListener('click', sonido);
        container.parentElement[i].style.backgroundColor = 'teal';
    }
    */

    container.parentElement.childNodes.addEventListener('click', sonido);
    container.style.backgroundColor = 'teal';
}
