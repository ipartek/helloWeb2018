/*
    Librería para realizar llamadas AJAX de tipo XMLHttpRequest en vanilla JS
    y retorna una Promise de manera asíncrona
*/

console.log('Libreria para hacer llamadas AJAX');

function ajax( method, url, data = null) {

    return new Promise( function(resolve, reject) {

        let request = null;

        // Soporte para diferentes navegadores
        if (window.XMLHttpRequest) {    // Chrome, Mozila, Safari...
            request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {  // IE
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } else {
            request("Este navegador no soporta llamadas Ajax");
        }

        // Comprobar cambios de estado
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status >= 200 && request.status <= 208) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject(error(request.statusText));
                }
            }
        };
        request.open(method, url, true);
        request.setRequestHeader('Content-type', 'application/json');
        request.send( JSON.stringify(data));
    });
}
