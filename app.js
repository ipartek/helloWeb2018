/*Ejemplo para levantar un servidor Web con NODEJS*/

//Importar librerias
var http = require('http');
var url = require ('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'}); //tex/plain para texto plano

    //Recibir parametros por GET: se envian parametros y se ven en URL
    //Ejemplos de uso:http://localhost:8084/?nombre=Aintziñe&apellido=Bizkarra&edad=33
    //el ? indica que va un par(ametro y se concatenan con & a todo ello se denomina queryParams
    var parametros = url.parse(request.url,true).query;

    //Respuesta para el navegador
    response.write('<h1> Servidor Escuchando</h1>');
    response.write('<p>Nombre:' + parametros.nombre + '</p>');
    response.write('<p>Apellido' + parametros.apellido +'</p>');
    response.write('<p>Edad:' + parametros.edad +'</p>');
    response.end();
}).listen(8084);


//para probar abrir navegador y pegar: localhost:8080
