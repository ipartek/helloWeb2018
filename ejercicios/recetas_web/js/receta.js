// JavaScript para la clase RECETA

class Receta {

    constructor(nombre, foto, likes, cocinero) {
        this.nombre = nombre;
        this.foto = foto;
        this.likes = likes;
        this.cocinero = cocinero;
        // ingredientes para la receta
        this.ingredientes = [];
    }

    addIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }
}
