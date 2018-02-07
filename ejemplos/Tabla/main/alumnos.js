// variable global para tod@s l@s alumn@s


var alumnos = [
                "Izaskun",
                "Jon Ander",
                "Iñigo",
                "Iñaki Aretxabaleta",
                "Javier",
                "Xabi",
                "Jorge",
                "Mikel",
                "Leire",
                "Iñaki Jimenez",
                "Alex",
                "Aingeru",
                "David",
                "Patri",
                "Joseba",
                "Aintziñe"
              ];

function leer(){


    //numero aleatorio
    var numero = Math.floor((Math.random() * alumnos.length));
    var alumno = alumnos[numero];
    console.debug( "numero al azar %i y el alumno %s ", numero, alumno );

    //mostrar en el html
    document.getElementById("voluntario").textContent = alumno;

    //marcar la celda en naranja

    var celdas = document.getElementsByClassName("alumno");

    for ( i=0; i < celdas.length ; i++ ){

       if ( alumno == celdas[i].textContent){
            celdas[i].style.backgroundColor = 'orange';
       }else{
           celdas[i].style.backgroundColor = '#2f72cc';
       }
    }









}













