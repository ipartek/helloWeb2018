//importar librerias
var http = require('http');
var url = require('url');


http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    //recibir paramatros por GET
    //ejemplo de uso: http://localhost:8084
    var parametros = url.parse(request.url, true).query;

    <script type = "text/javascript" >

        //Escapar comillas con la barra invertida y retornos de carro al final del texto
        var texto1 = "Este texto no lleva comillas"\
    "pero este otro texto, si que las lleva\", hasta pronto\n\n";

    //Combinar el uso de comillas simples  y comillas dobles y retornos de
    //carro al final de texto
    var texto2 = 'Este text no lleva comillas ``pero este otro texto, sí que las lleva´´, hasta pronto\n\n';

    //Uso del retorno de carro y tabulador
    var texto3 = "Esta frase pertenece a una línea\n y esta frase a otra diferente.Ahora\t insertamos un golpe de tabulador."
    //Mostramos un mensaje con el valor de todas las variables.
    alert(texto1 + texto2 + texto3); <
    /script>
    //TODO validar parametros

    //Respuesta para el navegador

    //termina response
    response.end();

}).listen(8084);

// para probarlo abrir navegador y pegar:
// localhost:8084
