//variable global para todos los alumnos

var alumnos = ["Izaskun", "Jon Ander", "Iñigo", "Iñaki A", "Javier", "Xabier", "Jorge", "Mikel", "Leire", "Iñaki J", "Alex", "Aingeru", "David","Patri","Joseba", "Aintzine"];

function leer(){

    //numero aleatorio
   var numero = Math.floor((Math.random() * alumnos.length));

    console.debug("numero al azar %i y el alumno %s ", numero, alumnos[numero]);
    //console.info("numero al azar %i y el alumno %s ", numero, alumnos[numero]);

    //mostrar en el html
    document.getElementById("voluntario").textContent=alumnos[numero];
    var alumno =alumnos[numero];
    //marcar la celda en naranja
    var celdas = document.getElementsByClassName("alumno");
    for (i=0; i < celdas.length; i++)
        {
            if (alumno == celdas[i].textContent)
                {
                    celdas[i].style.backgroundColor ='orange';
                }
            else celdas[i].style.backgroundColor ='darkcyan';
        }
}


