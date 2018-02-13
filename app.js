/*ejemplo para levantar un servidor web con NODEJS

https://www.w3schools.com/nodejs/default.asp
*/

//importar librerias
var http = require('http');
var url =require('url')

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    /*Content-Type': 'text/plain -- texto plano
    Content-Type': 'text/html -- para que reconozca etiquetas html,
    */
    //recogida parametros (queryParam)
    var parametros = url.parse(request.url,true).query;
    //recibir parametros por GET

    //ejemplo de uso:
    //http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37

    //respuesta para el navegador (estamos en el backend)
    response.write('<h1>Servidor escuchado</h1>');
    response.write('<p>Nombre:'+parametros.nombre+'<p>');
    response.write('<p>Apellido:'+parametros.apellido+'<p>');
    response.write('<p>Edad:'+parametros.edad+'<p>');
    response.end();





}).listen(8084);

/*
para ejecutarlo. CMD y poner la ruta
Desarrollo> cd helloWeb2018
Desarrollo>helloWeb2018> node app.js

para matar proceso en cmd crtl+c

para probarlo:
abrir navegador y pegar localhost:8080
*/
