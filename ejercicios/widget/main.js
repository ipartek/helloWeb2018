var url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=bd5e378503939ddaee76f12ad7a97608";
var ciudad;

function verTiempo() {
	ciudad = document.getElementById("input_ciudad").value;
	console.debug('Quiero ver el tiempo de %s', ciudad);
	var mensaje = document.getElementById("mensaje");
	if (ciudad == "") {
		mensaje.textContent = "No has introducido nada";
	} else {
		mensaje.textContent = "Realizando peticion...";

		//TO DO poner en la URL la ciudad

		//Llamada Ajax
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function () {
			//esperamos a que la respuesta sea correcta
			if (this.readyState == 4 && this.status == 200) {
				var json = JSON.parse(this.responseText);
				console.debug("jason %o", json);
				rellenarWidget(json);
			}
		};
		xhr.open("GET", url, true);
		xhr.send();
	}
}

	function rellenarWidget(json){
		document.getElementById("city").textcontent=json.name;


		//TO DO cambiar de Kelvin a celsius
		document.getElementById("temp").textcontent=json.main.temp;
		mensaje.textContent = "El tiempo en  " + ciudad;
	}
