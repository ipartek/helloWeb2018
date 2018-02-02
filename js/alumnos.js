// Variable global para tod@s los alumn@s

var alumnos = [
                "Izaskun",
                "Jon Ander",
                "Iñigo",
                "Iñaki Aretxabaleta",
                "Javier",
                "Jorge",
                "Leire",
                "Iñaki Jimenez",
                "Alex",
                "Aingeru",
                "David",
                "Patricia",
                "Aintzine"
                ];


function leer(){

    //Número aleatorio
    var num = Math.floor(Math.random() * (alumnos.length));
    var alumno = alumnos[num];


    console.debug ("Numero al azar %i y el alumno es %s ", num, alumno);

    //Mostrar en el HTML
    document.getElementById("voluntario").textContent = alumno;

    //mostrar la celda en naranja
    var celdas = document.getElementsByClassName("alumno");

    for(i =0; i < celdas.length; i++){

        if(alumno == celdas[i].textContent){
            celdas[i].style.backgroundColor = 'orange';
        }else{
            celdas[i].style.backgroundColor = '#2e518b';
        }
    }



}

