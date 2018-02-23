/* Ejemplo para levantar un servidor web con NODEJS */

var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var recetas = [{
  "nombre" : "Pollo a la cerverza",
  "dificultad" : "Baja",
  "duracion" : "2 horas",
  "ingredientes" : ["pollo", "cerveza", "sal", "pimienta", "cebolla"],
  "categoria" : "carnes",
  "autor" : {
    "nombre" : "Carlos Arguiñano",
    "restaurante" : "el suyo",
    "estrellas" : 1
  	}
	},
  {
    "nombre" : "Sorbete de limón",
    "dificultad" : "Baja",
    "duracion" : "0.5 horas",
    "ingredientes" : ["4 limones", "1 litro de agua", "1 kg de azúcar", "hielo"],
    "categoria" : "postres",
    "autor" : {
      "nombre" : "Juan Mari Arzak",
      "restaurante" : "sorbetilandia",
      "estrellas" : 1
      }
    }
]

router.get('/receta/', function(req, res) {
   res.status(200).json(recetas);
});

router.get('/receta/:id', function(req, res) {

   var id = req.params.id;
   console.log(`receta = ${id}`);
   let receta = recetas[id];

   res.status(200).json(receta );
});




app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
