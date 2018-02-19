var btnReordenar = document.getElementById('btnReordenar');
var vocales = ['vocalA', 'vocalE', 'vocalI', 'vocalO', 'vocalU'];

function reordenarVocales() {

    console.log(vocales);

    //mezclar array
    var n = vocales.length;
    while (n--) {
        var i = Math.floor(n * Math.random());
        var tmp = vocales[i];
        vocales[i] = vocales[n];
        vocales[n] = tmp;

    }

    for (i = 0; i < vocales.length; i++) {

        document.getElementById(vocales[i]).style.order = i + 1;

    }

}

btnReordenar.addEventListener('click', function () {
    reordenarVocales();

}, false)


var parrafos = document.getElementsByTagName('p');

for (i = 0; i < parrafos.length; i++) {

    parrafos[i].addEventListener('click', function (event) {
        for (i = 0; i < parrafos.length; i++) {
            parrafos[i].style.backgroundColor = 'white';
        }
        console.log('clickiti');
        event.target.style.backgroundColor = 'red';
    }, false);
}
