var leido = [];
var alumno = ["izaskun", "jonander", "inigo", "inakia", "javier", "patri", "jorge", "leire", "inakij", "alex", "aingeru", "david", "xabier", "joseba", "aintzine", "mikel"];

function elegirAlumno(){


    console.info(leido);

    var repetido=false;
    var seHaElegido=false;

    if (leido.length == alumno.length){
        console.info("Reset");
        leido=[];
        for(i=0; i<alumno.length; i++){
            document.getElementById(alumno[i]).style.backgroundColor="white";
        }
        //document.getElementsByClassName("alumno").style.backgroundColor="white";
        //NO SE PUEDE CAMBIAR LOS ESTILOS DE UNA COLECCION. HAY QUE RECORRERLOS UNO A UNO
    }

    while (seHaElegido!=true){
        var elegido = alumno[Math.floor(Math.random() * alumno.length)];
        console.info("elegido en el bucle "+elegido);
        repetido = false;
        for(i=0;i<leido.length && repetido==false;i++){
            if(leido[i]==elegido){
                repetido=true;
            }
        }

        if (repetido==false){

            leido.push(elegido);
            seHaElegido=true;

        }

    }

    console.info(elegido);
    document.getElementById(elegido).style.backgroundColor="red";
    document.getElementById("elegido").textContent = "Enhorabuena " + document.getElementById(elegido).innerText + " te ha tocado";


}
