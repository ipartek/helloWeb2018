'use strict';

class Perro {

    constructor(nombre = 'Malas Pulgas', raza = 'Mil Razas', chip='', foto = 'htts://www.anipedia.net/imagenes/nombres-de-perros.jpg') {
        this.nombre = nombre;
        this.raza = raza;
        this.chip = chip;
        this.foto = foto;
    }

    ladrar() {
        console.log('GUAU GUAU WRRESDF');
    }
}
