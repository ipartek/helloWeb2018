class Receta{
    constructor (nombre, foto,descripcion,likes, cocinero){
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.likes = likes;
        this.cocinero = cocinero;

        this.ingredientes = [];
    }

    addIngrediente (ingrediente){
        this.ingredientes.push(ingrediente);
    }

}
