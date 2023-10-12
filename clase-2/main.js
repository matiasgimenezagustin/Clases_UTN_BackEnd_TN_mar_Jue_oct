"use strict";
let nombre = 'maria';
let edad = 40;
let estaPrendida = true;
let indefinido = undefined;
let apellido = 40;
apellido = 'pepe';
nombre = 'pepe';
console.log("Mi nombre es " + nombre);
const edades = [3, 10, 50, 23, 4];
const nombres = ['pepe', 'juan', 'lucas'];
const persona = {
    nombre: 'pepe',
    edad: 90
};
const persona2 = {
    nombre: 'juan',
    edad: 12
};
const personas = [
    persona, persona2, { nombre: 'maria', edad: 45 }
];
console.log(personas[2]);
const calcular = (a, b) => {
    return a + b;
};
const saludar = (nombre) => {
    console.log("hola buen dia " + nombre);
};
saludar('pepe');
