/*ejemplo para levantar un servidor web con js*/
var http = require('http');
var url= require('url');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});



    //recibir parametros por GET
    //http://localhost:8084/?nombre=xab&apellido=ayer&edad=20

    var parametros=url.parse(request.url,true).query;
    //respuesta navegador
    response.write('<h1>Servidor escuchando</h1>');
    response.write('<p>Nombre: '+parametros.nombre+'</p>');
    response.write('<p>Apellido: '+parametros.apellido+'</p>');
    response.write('<p>Edad: '+parametros.edad+'</p>');
    response.end();
}).listen(8084);
