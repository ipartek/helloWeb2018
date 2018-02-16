var contenidoImg = '<div><p>Numero de la imagen: ##numero##</p><p>Extension de la imagen: ##extension##</p><p>Url de la imagen: ##url##</p><hr></div>';

var contenidoDiv = '<div class="panel panel-##clase##" ><div class="panel-heading"><span>##titulo##</span></div><div class="panel-body">##informacion##</div></div>';

var contenidoDispositivo = '<p>Altura: ##height##</p><p>Altura disponible: ##avalHeight##</p><p>Anchura:##width##</p><p>Anchura disponible: ##avalWidth##</p><p>Profindidad de color: ##colorDepth##</p>';


function listarImagenes() {

    var arrImagenes = document.images;
    var contenido ="";

    console.log(arrImagenes);

    crearDivInfo('divInfoImg', 'success', 'Informacion sobre las imagenes de la web', contenidoDiv);

    for (i = 0; i < arrImagenes.length; i++) {


        var iteracion = contenidoImg;
        iteracion = iteracion.replace('##numero##', i + 1);
        iteracion = iteracion.replace('##extension##', 'extension');
        iteracion = iteracion.replace('##url##', arrImagenes[i].src);

        contenido += iteracion;


    }

    //console.log(contenido);
    crearContenido('divInfoImg', contenido);


}

function infoDispositivo (){

    var contenido = '';

    crearDivInfo('divInfoDispositivo', 'warning', 'Informacion sobre el dispositivo', contenidoDiv);

    contenido = contenidoDispositivo;

    contenido = contenido.replace('##height##', screen.height);
    contenido = contenido.replace('##avalHeight##', screen.availHeight);
    contenido = contenido.replace('##width##', screen.width);
    contenido = contenido.replace('##avalWidth##', screen.availWidth);
    contenido = contenido.replace('##colorDepth##', screen.colorDepth);

    //console.log(contenido);
    crearContenido('divInfoDispositivo', contenido);

}

function infoLocation(){

    var contenido = '';

    crearDivInfo('divLocation', 'danger', 'Informacion sobre localizacion', contenidoDiv);

}

/**
 * Genera el div en el que ira la informacion
 * @id id del elemento en el que se va a generar el panel
 * @clase color de la clase que se quiere utilizar de bootstrap
 * @titulo titulo del panel
 * @contenido maquetacion del contenido
 */
function crearDivInfo(id, clase, titulo, contenido) {

    var divGenerado = document.getElementById(id);

    contenido = contenido.replace('##titulo##', titulo);
    contenido = contenido.replace('##clase##', clase);

    divGenerado.innerHTML += contenido;

    console.log(contenido);

}

/**
 * Genera el contenido del panel
 */
function crearContenido(id, contenido) {

    var divGenerado = document.getElementById(id);

    //console.log(contenido);

    divGenerado.innerHTML = divGenerado.innerHTML.replace('##informacion##', contenido);

    console.log(divGenerado);
}
