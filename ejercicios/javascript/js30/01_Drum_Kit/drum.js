"usestrict";

var keys = document.querySelectorAll('.key');


window.addEventListener('keydown', function () {
    playSound();
});

function removeTransition(e){
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

/* no funciona por el scope de la i
for (let i = 0; i<keys.length; i++) {
    keys[i].addEventListener('transitioned', removeTransition );
}*/

function playSound() {

    console.log('play sound %s', event.keyCode);

    sound = event.keyCode;

    var audio = document.querySelector('audio[data-key="' + sound + '"]');

    key = document.querySelector('div[data-key="' + sound + '"]');

    if (!audio) return;

    audio.play();
    key.classList.add('playing');

}
