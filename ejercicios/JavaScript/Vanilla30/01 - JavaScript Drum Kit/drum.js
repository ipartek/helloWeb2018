var keys = document.querySelectorAll(".key");

function playSound(e) {
  
    var audio = document.querySelector('audio[data-key="' + key + '"]');
    var key = document.querySelector('.key[data-key="${e.keyCode}"]');
    if (!audio) return; //para la funcion para que no suenen a la vez
    audio.currentTime = 0; //revovina al principio
    audio.play();
    key.classList.add("playing");

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; //skip si no es un transform
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitioned', removeTransition))
}
window.addEventListener('keydown', playSound);
