/* ejemplo para levantar un servidor web con NODEJS*/
var http = require('http');
var url =require('url');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    var parametros=url.parse(request.url, true).query;
    //recibir parámetro por Get
    //ejemplo de uso:
    //http://localhost:8084/?nombre=Inigo&apellido=Gallego&edad=24
    //Respuesta para el navegador
    response.write('<h1>Servidor escuchando :D</h1>');
    response.write('<p>Nombre:</p>');
    response.write('<p>'+parametros.nombre+'</p>');
    response.write('<p>Apellido:</p>');
    response.write('<p>'+parametros.apellido+'</p>');
    response.write('<p>Edad:</p>');
    response.write('<p>'+parametros.edad+'</p>');
    response.end();
}).listen(8084);
