
 var btn = document.getElementById("btnDesordenar");
        var aOrden = [1, 2, 3, 4, 5];
        btn.addEventListener("click", function() {
            aOrden = shuffle(aOrden);
            var boxes = document.getElementsByClassName("box");
            var box;
            for (i = 0; i < boxes.length; i++) {
                box = boxes[i];
                box.style.order = aOrden[i];
            }
        });
        function shuffle(a) {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
        function sonido(fileName) {
            var audio = new Audio('../../Sound/' + fileName + '.wav');
             if(audio.duration > 0 && !audio.paused){
                //already playing
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            }else{
                //not playing
                audio.play();
            }
        }
