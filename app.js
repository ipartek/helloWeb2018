/* Ejemplo para levantar un servidor web con NODE JS */
//Importar librerias

var http = require('http');
var url=require('url')

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    //recibir parametros por GET
    //ejemplos de uso:
    //http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
    var params = url.parse(request.url, true).query;

    response.write('<h1>Servidor escuchando</h1>');
    response.write('<p>Nombre:'+params.nombre+'</p>');
    response.write('<p>Apellido:'+params.apellido+'</p>');
    response.write('<p>Edad:'+params.edad+'</p>');
}).listen(8084);

//para probarlo abrir navegador y pegar: localhost:8084
