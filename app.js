/* Ejemplo para levantar un servidor web con Node.js */

//Importar libreria
var http = require('http');
var url= require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    //Recibir parametros por GET
    //Ejemplo de uso:
    //http://localhost:8084/?nombre=JonAnder&apellido=Gonzalez&edad=24
    //Respuesta para el navegador
    response.write('<h1>Servidor lepanto</h1>');
    var parametros =url.parse(request.url,true).query;

    response.write('<p>Nombre: '+parametros.nombre+'</p>');
    response.write('<p>Apelldio: '+parametros.apellido+'</p>');
    response.write('<p>Edad: '+parametros.edad+'</p>');
    response.end();
}).listen(8084);

// para probarlo abrir navegador y pegar:
//localhost:8084
