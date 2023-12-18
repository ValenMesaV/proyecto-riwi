function operaciones(){
    
    let operaciones = document.getElementById('operacion').value;
    let numero1 =document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    if(numero1 != "" && numero2 != "" &&  operaciones != ""){
    if( operaciones == 'suma')
    {
        var resultado = parseInt(numero1) + parseInt(numero2);
        console.log(resultado);
    }
    else if( operaciones == 'resta')
    {
        resultado = parseInt(numero1)- parseInt(numero2);
        console.log(resultado);
    }
    else if( operaciones == 'multi')
    {
        resultado = parseInt(numero1) * parseInt(numero2);
        console.log(resultado);
    }
    else if( operaciones == 'divi')
    {
        resultado = parseInt(numero1)/ parseInt(numero2);
        console.log(resultado);
    }
}
    document.getElementById('resultado').innerText = `resultado ${numero1} y ${numero2} es: ${resultado}`;
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
    document.getElementById('operacion').value = "";
     if ( numero1 == ""){
        document.getElementById('numero1').focus();
    }
    else if( numero2 == ""){
        document.getElementById('numero2').focus();
    }
    else if (operaciones == ""){
        document.getElementById('operacion').focus();
    }
   

}
