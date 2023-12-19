let container = document.getElementById('contenedor');

function iniciarSession(){

    var autenticacion = [
        {
        nombre : "manuela",
        password: "password",
        correo:"manuela@gmail.com"
    },
    {
        nombre : "alejandro",
        password: "password",
        correo:"alejandro@gmail.com"
    },
    {
        nombre : "david",
        password: "password",
        correo:"david@gmail.com"
    }
];
    
    password = document.getElementById('password').value;
    correo = document.getElementById('correo').value;

autenticacion.forEach(function(autenticacion){
    if(correo == autenticacion.correo && password == autenticacion.password){
        sessionStorage.setItem('nombre', autenticacion.nombre)
        sessionStorage.setItem('auth', "SI");
        location.href ="home.html"
    }else{
        console.log("datos no coinciden")
    }
});
}
