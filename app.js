/*
Ejemplo para levantar un servidor web con node.js
********/

/* importar librerias */
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    //recibir parametros GET
    //ejemplo
    // http://localhost:8084/?nombre=Ander&apellido=Uraga&edad=37
    //

    var queryParams = url.parse( req.url, true ).query;





    res.write('<h1>Servidor escuchando</h1>');
    res.write('<p>Nombre: '+queryParams.nombre+'</p>');
    res.write('<p>Apellido: '+queryParams.apellido+'</p>');
    res.write('<p>Edad: '+queryParams.edad+'</p>');

    res.end();


}).listen(8084);
