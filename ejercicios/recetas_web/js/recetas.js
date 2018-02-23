class Receta {
    constructor(nombre, foto, likes, cocinero){

        this.nombre = nombre;
        this.foto = foto;
        this.likes= likes;
        this.cocinero= cocinero;

        this.ingredientes = [];

    }

    addIngrediente(ingredientes){
        this.ingredientes.push(ingredientes);
    }
}
