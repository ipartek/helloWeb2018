/**
 * Escribimos en el textarea
 */
var ta = document.getElementById('ta');

function show() {

    ta.textContent += 'algo \n';
    console.log('escribo');
}

//listener para el boton
var btn = document.getElementById('boton');
btn.addEventListener('click', function () {
    show()
}, false);
//se puede llamar tbn a la funcion solo por su nombre sin parentesis

var btnLimpiar = document.getElementById('botonReset');
btnLimpiar.addEventListener('click', function () {
    document.getElementById('ta').textContent = '';
}, false);

//El evento de HTML se puede realizar en js
var btnJs = document.getElementById('botonJs');
btnJs.onclick = show; //la funcion hay que llamarla sin parantesis. Si no se ejecuta al arrancar y nunca mas



function showTexto(texto) {
    var taTexto = document.getElementById('taTexto');
    taTexto.textContent += 'algo \n';
    console.log('escribo Texto');
}

//listener para el boton
var btnTexto = document.getElementById('botonTexto');
btnTexto.addEventListener('click', function () {
    showTexto('loren ipsum')
}, false);

var btnLimpiarTexto = document.getElementById('botonResetTexto');
btnLimpiarTexto.addEventListener('click', function () {
    document.getElementById('taTexto').textContent = '';
}, false);

//El evento de HTML se puede realizar en js
var btnJsTexto = document.getElementById('botonJsTexto');
btnJsTexto.onclick = function () {
    showTexto('loren ipsum')
};
//la funcion hay que llamarla function(){funcionAEjecutar(parametros)} para que se ejecute correctamente



/**
 * Bubbling
 */

document.getElementById('azul').addEventListener('click', function () {
    ta.textContent += 'azul \n';
}, false);

document.getElementById('rojo').addEventListener('click', function () {
    ta.textContent += 'rojo \n';
}, false);

document.getElementById('verde').addEventListener('click', function (event) {
    ta.textContent += 'verde \n';
    event.stopPropagation();
    //cambiar el color del padre a amarillo
    event.target.parentElement.style.backgroundColor = 'yellow';
}, false);
//hay que pasar el evento con la funcion y hacer event.stopPropagation(); para evitar el bubbling
