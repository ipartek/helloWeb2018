function hideOrShowPassword(){ // Si quieres le cambias el nombre xD

  var  pass = document.getElementById('pass').value;
    if(checkbox.checked==true) // Si la checkbox de mostrar contraseña está activada
    {
        pass.type = "text";
    }
    else // Si no está activada
    {
        pass.type = "password"
    }
}
