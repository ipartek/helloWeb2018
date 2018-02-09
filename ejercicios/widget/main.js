function verTiempo() {

    console.log("Quiero ver el tiempo");

    var ciudad = document.querySelector("#input_ciudad").value;

    if (!ciudad) {
        document.querySelector("#mensaje").innerHTML = "Debe introducir una ciudad";
        console.log("Debe introducir una ciudad");
    } else {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=";
        var url2 = "&APPID=bd5e378503939ddaee76f12ad7a97608";

        url = url + ciudad + url2;
        console.log(url);

        /*llamada AJAX*/
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            //Esperamos a que la terpsuesta sea correcta
            if (this.readyState == 4 && this.status == 200) {
                var json = JSON.parse(this.responseText);

                var temp = Math.round(json.main.temp -273) + "º";
                var city = json.name;
                var icon = "http://openweathermap.org/img/w/"+ json.weather[0].icon + ".png";

                document.querySelector(".temp").innerHTML = temp;
                document.querySelector(".city").innerHTML = city;
                document.querySelector(".icon img").src = icon;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }
}
