
function rangoEdad(){
    if (window.confirm('¿Es mayor de edad?')){
  
    }
    else{ 
        window.location='menor.html';
    }
}



function sumarNum(){
    var num1; 
    var num2; 
    
    num1= parseInt(prompt("Introduce un número","")); 
    num2= parseInt(prompt("Introduce otro un número","")); 
    var res = num1+num2; 
    

    if (isNaN (num1) || isNaN (num2)) { 
        alert("NO PUEDO SUMAR SI NO ME DAS DOS NÚMEROS");
    } else{
        document.getElementById("myOutput").innerHTML = res;
    }
    
}