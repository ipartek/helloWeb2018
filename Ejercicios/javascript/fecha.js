var f = new Date();



var fecha =f.getFullYear();


   document.getElementById("fecha").innerHTML = fecha;


var fcompleta = new Date().toJSON().slice(0,10);



  document.getElementById("fechacompleta").innerHTML = fcompleta;
