/*
*
*
funciones para el sorteo
*
*
*/
function aJugar(){
    resetear();
    sortear();
}

// Cambiar valor si viene nuevo alumno
var numeroAlumnos =15;
//
var repetidos=[]
function sortear(){

    var premio= parseInt(Math.random() * numeroAlumnos + 1);
    if(repetidos.length==numeroAlumnos){
        repetidos=[];
        sortear();
    }
    else{
        if(repetidos.includes(premio)==true){
            this.sortear();
        }
        else{
            repetidos.push(premio);
            sortudo = document.getElementById(premio);
            sortudo.style.background="green";
            document.getElementById("afortunado").textContent="¡¡¡El afortunado para leer ha sido: "+sortudo.textContent+"!!!!";
        }
    }
}
function resetear(){
    var presente
    for(i=1;i<=numeroAlumnos;i++){
        presente=document.getElementById(i);
        presente.style.background = "linear-gradient(#6DCDDA, yellow)";
    }
    }

