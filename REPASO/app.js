console.log('Soy un mensaje');

// Declarar una variable
//(var, let, const)
var numero;

//asignar valor a una variable
numero = 10;

//se puede declarar y asignar al mismo tiempo
var nomber = 'Ricardo';
var nombreUsuario = ' Sanabria';
var numeroTelefonico = '3166216769';

//diferencia entre var, let, const
//scope = alcance que puede tener una variable
//var = es una variable global
//let = es una variable local
//const = local y constante (no cambiar de valor)

// si puedo reasignar
var num = 10;
console.log('10')
num = 1;
num = 100;

// si puedo reasignar
let num2 = 100;
num2 = 1;
num2 = 3;

const num3 = 100;

var num5 = 100;

{
    console.log(num5)
}

let num6 = 2;

{
    console.log(num6)
}

{
    var num7 = 200;
}


// NUMEROS
let numX = 3.5;

//STRINGS
let nombreAlumno = 'Ricardo';
//no importa el tamñan de caracteres sigue siendo un string

//BOLEANOS: utilizaremos True or false
let esMayorDeEdad = true;
let esHijoUnico = false;

console.log('soy un console.log');
console.log('esHijoUnico');
console.log('num2')

//ARRGLOS O LAS LISTAS
let listaUno = [1, 50, 200, 20];
let listaDos = [];
let nombre = ['Juan', 'Ana', 'Jose'];
let listaCuatro =[];

console.log(nombre);
console.log(nombre[2])

//OBJETOS
let persona = {
    nombre: 'Luis',
    edad: 20,
    tel: 3166324578
};

console.log(persona);
console.log(persona.nombre);

//CONDICIONALES --> DECISIONES
// veremos IF y else

let edadAlumno = 15;
// PREGUNTAS


if(edadAlumno > 18) {
    console.log('Si es mayor');
} else {
    console.log('No es mayor');
}

let precio = 30;

if(precio < 100) {
    console.log('Boleto es rojo')
};


console.log[5 > 10];
console.log["hola" == "hola"];
console.log[5 != 10];
console.log[10 != 10];

//Compara el valor
console.log[10 == '10'];

//Compara valor y tipo ESTRICTO
console.log[10 === '10'];


//ciclos funcionan para repetir
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

//valor inicial; tope; incremento
for(let iterador = 10; iterador <= 100; iterador++) {
    console.log(iterador);
}

let nombresAlumnos = ['Juan', 'Ana', 'Pedro', 'Maria', 'Lucia', 'Luis', 'Oso'];

// console.log(nombresAlumnos)

console.log(nombresAlumnos.length);
for(let i = 0; i < nombresAlumnos.length; i++){
    console.log(nombresAlumnos[i]);
};

//FUNCIONES: hay varias formas de declarar
//Es importante el hehco de como se nombra

function saludar () {
    console.log('bienvenido');
}

console.log(mostrarAlumnos());

//Funciones con valor de retorno
function obtenerNombreCompleto () {
    let nombre = 'Ricardo';
    let apellido = 'Sanabria';
    let nombreCompleto = nombre + apellido;
    return nombreCompleto;
}

console.log(obtenerNombreCompleto());
