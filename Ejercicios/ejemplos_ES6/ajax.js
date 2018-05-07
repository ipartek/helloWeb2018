// LIBRERIA para realizar llamadas AJAX XMLHttpRequest en Vanilla Javascript
// Retornando un promise

function ajax ( method, url, data=null ){

    return new Promise( function(resolve, reject){

         let request;

        // Soporte para navegadores
          if (window.XMLHttpRequest){
              request = new XMLHttpRequest;
          }else if (window.ActiveXObject) {
              request = new ActiveXObject("Msxml2.XMLHTTP");
          }else{
              reject("Tu navegador no soporta llamadas Ajax");
          }

        // Comprobar cambios de estado
        request.onreadystatechange = function(){

            if (request.readyState == 4){
                if (request.status >= 200 && request.status <= 299){

                    // Hacer un if por si responseText esta vacio, para que no de error al hacer DELETE
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject(Error(request.statusText));
                }
            }

        };

        // resolve(datos)

        // reject(error)

        request.open(method, url, true);

        request.setRequestHeader("Content-type", "application/json");

        request.send(JSON.stringify(data));

    });

}
