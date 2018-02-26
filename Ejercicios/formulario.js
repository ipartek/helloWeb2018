   function mousedown() {
       var pass = document.getElementById('pass').value;
       if (checkbox.checked == true) // Si la checkbox de mostrar contraseña está activada
       {
           mousedown.type = "text";
       } else // Si no está activada
       {
           pass.type = "password"
       }
