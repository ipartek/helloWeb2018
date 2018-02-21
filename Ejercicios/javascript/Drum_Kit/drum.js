"use strick";


window.addEventListener('keydown', playsound);

function playsound() {

    var key = event.keyCode;
    var direcciondiv= document.getElementsByTagName("div");
    console.log('playsounds %o', key);

var audio= document.querySelector('audio[data-key="'+key+'"]');



audio.play();

    bordercolor;
    }

    function bordercolor(){

        var pintar=document.querySelector('.key');

        for(var i=0;i<pintar.length;i++){
            console.log(pintar);

            pintar[i].style.borderColor="yellow";

        }







    }


