var persons = [
    {
       nombre: "Pedro",
       apellidos: "Martinez",
       correo : "predro@gmail.com"
    },
    {
       nombre: "Mario",
       apellidos: "Mesa",
       correo : "mario@gmail.com"
    },
    {
       nombre: "Marcela",
       apellidos: "Restrepo",
       correo : "marcel@gmail.com"
    }];

    function actualizar(posicion){
       let nombre = document.getElementById('nombre_' + posicion).value;
       let apellido = document.getElementById('apellido_' + posicion).value;
       let correo = document.getElementById('correo_' + posicion).value;
       
       if (nombre != ""){
         document.getElementById('nombre_' + posicion).classList.remove('is-invalid');
         document.getElementById('nombre_' + posicion).classList.add('is-valid');
         persons[posicion].nombre = nombre;
         persons[posicion].apellidos = apellido;
         persons[posicion].correo = correo;
       } else {
         document.getElementById('nombre_' + posicion).classList.remove('is-valid');
         document.getElementById('nombre_' + posicion).classList.add('is-invalid');
       } 
    }

    console.log(persons);