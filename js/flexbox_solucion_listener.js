"use strict";

var aOrden = [1,2,3,4,5];
        var aSonidos = ['a','e','i','o','u'];
        var boxes = document.getElementsByClassName("box");
        var btn = document.getElementById("btnBarajear");.


        btn.addEventListener('click', function(){
            aOrden = shuffle(aOrden);
            var box;
            for( var i=0; i<boxes.length;i++){
                box = boxes[i];
                box.style.order = aOrden[i];
            }
        });



        function sonido( fileName, elem){
             //Deshabilitar botones

            for( i=0; i<boxes.length;i++){
                boxes[i].onclick==null;
            }
            btn.disabled = true;

            var audio = new Audio( '../sounds/'+fileName+'.wav' );
            audio.play();
            audio.onended = ponerColor;


            elem.style.backgroundColor = 'orange';
        }

        function ponerColor(){

                btn.disabled = false;

                for( i=0; i<boxes.length;i++){

                    boxes[i].onclick==function(){sonido(aSonidos[i],this)};
                    boxes[i].style.backgroundColor = 'teal';
                }
        }

        /**
         * Shuffles array in place.
         * @param {Array} a items An array containing the items.
         */
        function shuffle(a) {
            var j, x, i;
            for ( i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
