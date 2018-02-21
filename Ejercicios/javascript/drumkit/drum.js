var keys = document.querySelectorAll(".key")
window.addEventListener('keydown', playSound);

function playSound() {
    var key = event.keyCode;
    console.log('playSound keyCode %s', key);
    var audio = document.querySelector('audio[data-key="' + key + '"]')
    key.classList.add('playing');
    audio.currentTime = 0;

    audio.play();


}
