/*Todo lo relacionado con receta*/


class Receta{


    constructor(nombre,foto,likes,cocinero,descripcion){

        this.nombre=nombre;
        this.foto=foto;
        this.likes=likes;
        this.cocinero=cocinero;
          this.descripcion=descripcion;


        this.ingredientes=[];


    }


    addingredientes(ingrediente){


        this.ingredientes.push(ingrediente);

    }
}
