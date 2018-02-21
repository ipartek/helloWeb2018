let segundero = document.querySelector('.second-hand');
let minutero = document.querySelector('.min-hand');
let horario = document.querySelector('hour-hand');

function actualizarHora() {
    let ahora = new Date();


    let segundos = ahora.getSeconds();
    
    
    let pasoSegundos = ((segundos/60*360)+90);
    segundero.style.textTransform=`rotate(${pasoSegundos}deg)`;
}
 setInterval(actualizarHora, 1000);
actualizarHora();