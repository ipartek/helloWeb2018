/*creamos una receta de prueba*/
var recetas=[];

function objPintxo(){
    var rPollo = new Receta('pollo','http://www.recetasderechupete.com/wp-content/uploads/2015/05/pollo_chilindron-525x360.jpg',13,'Robin Food');

    var rCocido = new Receta('Cocido','http://www.recetasderechupete.com/wp-content/uploads/2015/05/pollo_chilindron-525x360.jpg',14,'Pepa');

    var rMigas = new Receta('Migas','http://www.recetasderechupete.com/wp-content/uploads/2015/05/pollo_chilindron-525x360.jpg',17,'Julia');



    rPollo.addIngrediente('pollo');
    rPollo.addIngrediente('ajo');
    rPollo.addIngrediente('tomate');
    rPollo.addIngrediente('chilindrón');


    console.log('1º receta %s %o', rPollo.nombre , rPollo);



    //crear mas recetas

    //añadir al array de recetas
}

function crear(){

    limpiar();
    nuevoNumero();
    pintarPincho();
}

//crear recetas por formulario
var nombreInput = document.getElementById("nombreInput");

var numeroInput= document.getElementById("numeroInput");
var contenedor = document.getElementById("recetas_lista");
var spanNumero=`<div class="col-sm-4">
                    <div class="thumbnail">
                        <button type="button" class="close">
                          <span>&times;</span>
                        </button>
                        <img src="img/pinchos/pincho01.jpg" alt="pincho" width="400" height="300">
                        <p><strong>Receta 1</strong></p>
                        <p><i class="fa fa-heart"></i> $$$</p>
                         <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#modal">
                          INGREDIENTES
                        </button>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h2 class="modal-title" id="exampleModalLabel">INGREDIENTES</h2>
                      </div>
                      <div class="modal-body">
                          <ul class="ingredientes">
                              <li>1 pollo</li>
                              <li>1 cebolla</li>
                              <li>1 pimiento verde</li>
                              <li>5 dientes de ajo</li>
                              <li>2 tomates</li>
                              <li>2 patatas</li>
                              <li>carne de 4 pimientos choriceros</li>
                              <li>2 rebanadas de pan</li>
                              <li>harina</li>
                              <li>1 vaso de vino blanco</li>
                              <li>1 vaso de caldo o de agua</li>
                              <li>vinagre</li>
                              <li>aceite virgen extra</li>
                              <li>sal</li>
                              <li>pimienta</li>
                              <li>perejil</li>
                          </ul>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      </div>
                    </div>
                  </div>
                </div>`;
var aPinchos = [];





/**
* recoge un número del input y lo introduce en el div co id #cntNumDes
*/
function nuevoNumero(){
    console.debug("añadir nuevo número %s", numeroInput.value);
    var numeroEntero = numeroInput.value;




    aPinchos.unshift(numeroEntero);//agregamos una posición al pripio del array



    numeroInput.value = "";//límpia el input
    numeroInput.focus();//devuelve el foco al input
}



//eliminamos la caja del html y eliminamos el número de array desordenado
//function eliminarBox{
//    console.debug("eliminar box %s",pos);
//
//}


function pintarPincho(){
        for (var i in aPinchos) {
        var newElement = document.createElement('spanNumero');

//        borrada = contenedor.removeChild(newElement);
//        var borrada = 0;

        newElement.innerHTML += spanNumero.replace('$$$',aPinchos[i]);
        contenedor.appendChild(newElement);
        return newElement;
        }
}

function limpiar(){





}


