/*ejemplo para levantar un servidor con node.js
    para probarlo abrir un navegador y pegar:
    localhost:8084
*/

//importar librerias
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    //recibir parámetros por get y por post

    //ejemplo de uso

    //http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
    var queryParametros = url.parse( request.url, true).query;

    //respuesta para el navegador
    response.write('<h1>Servidor escuchando</h1>');
    response.write('<p>Nombre: </p>' + queryParametros.nombre);
    response.write('<p>Apellido: </p>' +queryParametros.apellido);
    response.write('<p>Edad: </p>' +queryParametros.edad);
}).listen(8084);
