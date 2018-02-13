//Ejemplo parra levantar un servidor web con NODEJS

//Es una forma de programar desde el servidor

//Importar librerias
var http = require('http');
var  url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    // http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
    // introducir esta direccion web en el navegador

    // recibir parametros por GET
    var parametros = url.parse( request.url, true).query;

    //Respuesta del navagador
    response.write('<h1>Hello World!</h1>');
    response.write('<p>Nombre: ' + parametros.nombre + ' </p>');
    response.write('<p>Apellido: ' + parametros.apellido + ' </p>');
    response.write('<p>Edad: ' + parametros.edad + ' </p>');

}).listen(8084);
