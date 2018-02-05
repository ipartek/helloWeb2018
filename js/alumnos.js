// Variables globales
var listaAlumnos = ["Izaskun",
                    "Jon Ander",
                    "Iñigo",
                    "Iñaki Aretxabaleta",
                    "Javier",
                    "Xabier",
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
// IMPORTANT: para volcar el contenido en de una Array en otro, usar Array.slice()
// Mediante asignación crea un puntero en vez de copiar el contenido.
var no_premiados = listaAlumnos.slice();
var txt_afortunado = null;

// Método para seleccionar un alumno de clase
function tocaLeer() {

    var afortunado_valido = false;
    var color_afortundado = null;
    var elegido = null;
    var afortunado = null;

    while(!afortunado_valido) {
        elegido = Math.floor((Math.random() * listaAlumnos.length) + 1);
        // Obtenemos el nombre del afortunado
        afortunado = document.getElementById(elegido).innerHTML;
        // Comprobar si ya han leido todos los alumnos
        if(!no_premiados.length == 0){
            // Comprobar si el afortunado ya ha sido premiado con anterioridad
            if(no_premiados.includes(afortunado)){
                // Se borra de las personas aún no premiadas
                no_premiados.splice(no_premiados.indexOf(afortunado),1);
                // Se muestra el afortunado por pantalla
                txt_afortunado = document.getElementById("txt_afortunado");
                txt_afortunado.innerHTML = "AFORTUNAD@: " + afortunado;
                console.info("AFORTUNAD@: " + afortunado);
                // Se pinta la casilla del afortunado
                color_afortundado = document.getElementById(elegido);
                color_afortundado.style.backgroundColor = "lightGreen";
                // Se activa la condición para salir del bucle
                afortunado_valido = true;
            }
        } else {
            // En caso de que todos hayan leido, reiniciar la lista
            no_premiados = listaAlumnos.slice();
            // Reiniciar tabla poniendo el fondo de color por defecto
            reiniciarTablaAlumnos();
        }
    }
}

function reiniciarTablaAlumnos() {
    for(var alumno=0; alumno < listaAlumnos.length; alumno++) {
        color_afortundado = document.getElementById(alumno+1);
        color_afortundado.style.backgroundColor = "white";
    }
    txt_afortunado = document.getElementById("txt_afortunado");
    txt_afortunado.innerHTML = "AFORTUNAD@: ";
}
