var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var respuesta = JSON.parse(xhttp.responseText);
    var personas = respuesta.datos;
    console.log(personas);
    var salida = "";

 
    salida += `<li>${personas[0].nombres} </li>` ;
    salida += `<li>${personas[0].apellidos} </li>` ;
    salida += `<li>${personas[0].semestre} </li>` ;
    salida += `<li>${personas[0].paralelo} </li>` ;
    salida += `<li>${personas[0].direccion} </li>` ;
    salida += `<li>${personas[0].correo} </li>` ;
    document.getElementById("personas").innerHTML = salida;
  }
};
xhttp.open("GET", "datos.json", true);
xhttp.send();
