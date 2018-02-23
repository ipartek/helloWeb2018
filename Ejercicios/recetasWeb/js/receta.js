class Receta{

    constructor( nombre, foto, likes, cocinero ){

        this.nombre = nombre;
        this.foto = foto;
        this.like = likes;
        this.cocinero = cocinero;

        this.ingredientes = [];
    }

    addIngrediente( ingrediente ){
        this.ingredientes.push(ingrediente);
    }

}
