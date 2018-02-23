/*Todo lo relacionado con receta*/


class Receta{


    constructor(nombre,foto,likes,cocinero){

        this.nombre=nombre;
        this.foto=foto;
        this.likes=likes;
        this.cocinero=cocinero;


        this.ingredientes=[];


    }


    addingredientes(ingrediente){


        this.ingredientes.push(ingrediente);

    }
}
