class receta{
    constructor (nombre, foto,descripcion, cocinero){
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.cocinero = cocinero;

        this.ingredientes = [];
    }

    addIngrediente (ingrediente){
        this.ingredientes.push(ingrediente);
    }

}
