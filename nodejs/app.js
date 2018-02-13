/*Ejemplo para levantar un servidor web con NODEJS,porque estamos trabajando en el servidor*/

/*Para abrir el servidor tienes que poner en la terminal:

cd desarrollo/helloweb2018/nodejs

node app.js

Para probarlo abrir navegador y poner localhost:8080*/

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    //Recibir parametros por GET
    //Ejemplo de uso : localhost:8084/?nombre=Joseba&apellido=Clemente&edad=no disponible

    var parametros = url.parse(request.url, true).query;

    /*Respuesta para el navegador*/


    response.write('<h1>Servidor Escuchando!</h1>');
    response.write('<p>Nombre:' + parametros.nombre + '</p>');
    response.write('<p>Apellido:' + parametros.apellido + '</p>');
    response.write('<p>Edad:' + parametros.edad + '</p>');
    response.end();
}).listen(8084);
