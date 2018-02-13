/*Ejemplo para levantar un servidor web con NODEJS */

//importar librerias
var http = require('http');
var url=require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    //recibir parámetros por GET
    //ejemplo de uso: (copiar la http de abano y copiarla en la URL)
    //http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
    var parametros=url.parse(request.url, true).query;

    // recibir parametros por POST???

    //TODO validar parametros

    //Respuesta para el navegador
    response.write('<h1>Servidor escuchando</h1>');
    response.write('<p>Nombre:'+parametros.nombre+'</p>');
    response.write('<p>Apellido:'+parametros.apellido+'</p>');
    response.write('<p>Edad:'+parametros.edad+'</p>');


    //termina response
    response.end();


}).listen(8084);


// para probarlo abrir el navegador y pegar:
// localhost:8084
// Para parar el servidor en el cmd damos CTRL+C
