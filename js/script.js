//#creacion de variables//
//var//

var nombre= "Nazarena";
var apellido= "Falleti";

console.log (nombre);
console.log (apellido);

//Let//
let auto="Audi R8";
console.log (auto);
//Const//
const color = "Negro";
console.log (color);

// Variables de numeros a Calcular//

var numA=34;
var numB=9;
//suma//
function suma(numA, numB) {
    var resultadoSuma = 0;
    resultadoSum = numA + numB;
    return resultadoSum;
}
console.log(suma(numA, numB));
//resta
function resta(numA, numB) {
    var resultadoRes=0;
    restas = numA - numB;
    return restas;
}
console.log(resta(numA, numB));
//multiplicacion
function multiplicacion(numA, numB) {
    var resultadoMulti=0;
    resultadoMulti = numA*numB;
    return resultadoMulti;
}
console.log(multiplicacion(numA, numB));
//division
function division (numA, numB) {
    var resultadoDivi;
    resultadoDivi = numA/ numB;
    return resultadoDivi;
}
console.log(division(numA, numB));

//resto
function restos (numA, numB) {
    var resto ;
    resto= numA % numB;
    return restos;
}

console.log(restos(numA,numB));

//Creo array y recorro

var persona = ['Nazarena', 'Falleti', 17];
persona.forEach(function(per) {
    console.log(per);
});


