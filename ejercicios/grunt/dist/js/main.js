/* codigo javascript ES6 */

const PI = 3.14;
let otra = "a";

var perros = [];

var malasPulgas = new Perro();

console.log(malasPulgas);


var milu = new Perro();

milu.nombre = 'Milu';
milu.raza = 'Fosterrier';
milu.foto = 'https://www.ayto-arroyomolinos.org/mascotas/milu/image';

console.log(milu);


perros.push(malasPulgas);
perros.push(milu);



var listaPerros = document.getElementById("perros");
var lis = "";
perros.forEach( perro => {
    lis += `<li>
                ${perro.nombre}
                <img src='${perro.foto}'/>
            </li>`;
});


listaPerros.innerHTML =  lis;





