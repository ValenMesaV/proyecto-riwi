function comprar(){
    let salario = 2500000;
    let compra = prompt("1-)almohabanaGaseosa 2-)suwayGaseosa elije una opcion 3-) compro en medellin :")
    if(compra == 1){
        salario = salario -1500;
        alert("has comprado un almohabana con gaseosa"+ "tu saldo restante es : "+salario);
    }else if ( compra == 2){
        salario == salario - 23000;
        alert ("has comprado suway con gaseosa")
      
    }else{
        alert("no has comporado nada: - por que va a comprar en medellin "+ "este es tu saldo restante" + salario)
    }
    console.log( salario)
    }  
// caso 2
let maletaH = [60, 40, 20];
let tamañoNormal = [55, 40 ,20];
console.log(tamañoNormal[1])
let FactorReduccion = Math.min(tamañoNormal[0]/maletaH[0],tamañoNormal[1]/maletaH[1],tamañoNormal[2]/maletaH[2]);
console.log(FactorReduccion);
let newAltura = maletaH[0]*FactorReduccion;
let newLength = parseInt(maletaH[1]*FactorReduccion);
let newWidth = parseInt(maletaH[2]*FactorReduccion);
console.log(`${newLength} ${newWidth}`);
//caso 3  
function convertirAdecimales(binario){
let decimal = 0;
for (let index = 0, j = 8; index < 8; index++, j--) {
    console.log(decimal += Number(binario[index]) * Math.pow(2, j - 1));
}  
    return decimal;
}
let wifi = "elpassEs";
let passwordWifi = "01110010_01101001_01110111_01101001";
passwordWifi = passwordWifi.split("_");
//let password = passwordWifi.map((elemento) => String.fromCharCode(convertirAdecimales(elemento))).join("");
let [ bin1, bin2, bin3, bin4 ] = passwordWifi;
bin1 = String.fromCharCode(convertirAdecimales(bin1));
bin2 = String.fromCharCode(convertirAdecimales(bin2));
bin3 = String.fromCharCode(convertirAdecimales(bin3));
bin4 = String.fromCharCode(convertirAdecimales(bin4));
let password = bin1 + bin2 + bin3 + bin4;
console.log(password);
//caso 4
let pedirTaxi = "Taxi me puede llevar al hotel mariposas amarillas."
pedirTaxi = pedirTaxi.replace(/[aeiou]/g, 'i');
console.log(pedirTaxi);
//caso 5
let options = ["piedra","papel","tijera"];
let taxista = Math.floor((Math.random()*options.length));
console.log(taxista)
let hildebrando = Math.floor(Math.random()*options.length);
let taxistaWin = false;
if (options[hildebrando] === "piedra" && options[taxista] === "papel"){
    taxistaWin = true;
}else if(options[hildebrando] === "papel" && options[taxista] === "tijera"){
    taxistaWin = true;
}else if(options[hildebrando] === "tijera" && options[taxista] === "piedra"){
    taxistaWin = true;
}
if (taxistaWin){
    sueldo -= 300000
    console.log(`el taxista le ha ganado a hildebrando y hildebrando a perdido 300.000, ahora 
    hildebrando tiene ${newSueldo}`);
}
else{
    console.log(`hildebrando le ha a ganado a el taxista y no debera pagarle nada. `);
}
let numeros = [1,2,3,4,5];
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
}
//caso 6
    