/*Ejemplo para levantar un servidor cweb con NODEJS */

//importar librerias
var http = require('http');
var url = require ('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});


	//recibir parametros por GET
	//ejemplo de uso:
	//http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
	var parametros = url.parse(request.url,true).query;



	//Respuesta para el navegador
    response.write('<h1>Servidor escuchando</h1>');
	response.write('<p>Nombre:' + parametros.nombre + '</p>');
	response.write('<p>Apellido:' + parametros.apellido + '</p>');
	response.write('<p>Edad:' + parametros.edad + '</p>');
	response.end();
}).listen(8084);

//en ms-DOS vamos a la carpeta donde tenemos este fichero y ejecutamos:
//cd c:\desarrollo\helloWeb2018
//node app.js


//para probarlo-> abrir navegador y pegar:
//localhost:8080
