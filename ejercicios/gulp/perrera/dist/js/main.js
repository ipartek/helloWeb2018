'use strict';

var nombre = document.getElementById('nombre').value;
var raza = document.getElementById('raza').value;
var chip = document.getElementById('chip').value;
var imagen = document.getElementById('imagen').value;

var perros =[];

function nuevoPerro() {

    var perro = new Perro(nombre, raza, chip, imagen);
    console.log(perro);

    perros.push(perro);
    console.log(perros);

}
