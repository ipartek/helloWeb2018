//Ejemplo para levantar un servidor web con node.js

//Importar librerías
var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    //Recibir parámetros por GET
    //ejempli de uso:
    //http://localhost:8084?nombre=Ander&apellido=Uraga&edad=37
    var parametros = url.parse(request.url, true).query;

    //TODO validar parámetros

    //Respuesta para el navegador
    response.write('<h1>Servidor escuchando</h1>');
    response.write('<p>Nombre: '+ parametros.nombre +' </p>');
    response.write('<p>Apellido: '+ parametros.apellido +' </p>');
    response.end('<p>Edad: '+ parametros.edad +' </p>');
//    response.end();

}).listen(8084);

//Se prueba accediendo en el navgador a localhost:8080
