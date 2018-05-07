/*  libreria para realizar  llamada ajas xmlhttpreques en vanilla javascript
retornando un promise
*/
function ajax(method, url, data=null){
    return new Promise( function(resolve, reject){
        let request;
        if(window.XMLHttpRequest){
            request= new XMLHttpRequest();
        } else if (window.ActiveXObject){//IE
            request = new ActiveXObject ("Msxml2.XMLHTTP")
        } else {
            reject("Tu navegador no soportallmaadas ajax");
        }

        //comprobar cambios de estado
        request.onreadystatechange =function(){
            if(request.readyState == 4){
                if (request.status == 200){
                    /* como sabemos que es un json, en vez de devolver un texto, parseamos el json
                    resolve(request.responseText);*/
                    resolve(JSON.parse(request.responseText));
                }else{
                    reject(Error(request.statusText));
                }
            }
        };
        //resolve(datos);
        //reject(error);
        request.open(method, url, true);
        //request.send(data);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));
  });
}
