class Receta {
    constructor(nombre, foto, like, cocinero) {

        this.nombre = nombre;
        this.foto = foto;
        this.cocinero = cocinero;

        this.ingredientes = [];

    }
    addIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

}

