class Receta{

    constructor( nombre , foto, likes, cocinero ){

        this.nombre = nombre;
        this.foto = foto;
        this.likes = likes;
        this.cocinero = cocinero;
        this.cont=cont++;

        this.ingredientes = [];
    }


    addIngrediente( ingrediente ){
        this.ingredientes.push(ingrediente);
    }



}
