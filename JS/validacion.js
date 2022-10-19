function validateForm(){
    let fn = document.forms["miFormulario"]["firstName"].value;
    if(fn ==""){
        alert ("Debe ingresar su Nombre");
        return false;
    }
    let ln = document.forms["miFormulario"]["lastName"].value;
    if(ln==""){
        alert ("Debe ingresar su Apellido");
        return false;
    }
    
    
    let em = document.forms["miFormulario"]["email"].value;
    if (em==""){
        alert ("Debe ingresar su E-Mail");
        return false;
    }
    let tel = document.forms["miFormulario"]["telephone"].value;
    if(tel==""){
        alert ("Debe ingresar su Número de Contacto");
        return false;
    }
    let x = document.getElementById("telephone").value;
    if (isNaN(x) || x < 1100000000 || x > 9999999999) {
      Alert ("El teléfono no es válido");
      return false;
    } 
    let as = document.forms["miFormulario"]["asunto"].value;
    if(as==""){
        alert ("Debe ingresar su Asunto");
        return false;
    }
    let msg = document.forms["miFormulario"]["mensaje"].value;
    if(msg==""){
        alert ("Debe ingresar su Mensaje");
        return false;
    }

  }
