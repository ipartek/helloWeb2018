/*
    Ejemplo para lanzar un servidor con Node.js

    @see: https://www.w3schools.com/nodejs/default.asp

    Para lanzarlo:
    0. Abrir consola
    1. Posicionarse en la carpeta del proyecto
    2. Arrancarlo con: $node app.js
    3. Abrir navegador y dirigirse a la URL "localhost:8084"
*/

// imports
var http = require('http');
var url = require('url');
var qs = require('querystring');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // recibir parametros por GET request
    // ejemplo: http://localhost:8084/?nombre=Aingeru&apellido=Sanchez&edad=25
    var queryParams = url.parse(request.url, true).query;

    // recibir parametros por POST request
    function (request, response) {
        if (request.method == 'POST') {
            var body = '';

            request.on('data', function (data) {
                body += data;

                // Too much POST data, kill the connection!
                // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6)
                    request.connection.destroy();
            });

            request.on('end', function () {
                var post = qs.parse(body);

                // obtener los valores del objeto 'post'
                console.log(post);
            });
        }
    }

    // respuesta para el navegador
    /*response.write('<h1>Servidor Web lanzado con NodeJS</h1>');
    response.write('<p>Nombre: ' + queryParams.nombre + '</p>');
    response.write('<p>Apellido: ' + queryParams.apellido + '</p>');
    response.write('<p>Edad: ' + queryParams.edad + '</p>');
    response.end(); // terminar petición*/

}).listen(8084); // puerto en el que escucha las peticiones
