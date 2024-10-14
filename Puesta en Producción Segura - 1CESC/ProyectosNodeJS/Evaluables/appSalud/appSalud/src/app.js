const Bascula = require('./bascula');
const Paciente = require('./paciente');

// Ejemplo de uso
let bascula = new Bascula();
bascula.anotarPeso(70, 1.75); // Peso de 70kg y altura de 1.75m
console.log(`Número de anotaciones: ${bascula.obtenerNumeroAnotaciones()}`);
console.log(`IMC: ${bascula.calcularIMC()}`);
console.log(`Descripción IMC: ${bascula.describirIMC(bascula.calcularIMC())}`);

// Uso
let paciente = new Paciente("Juan", "Pérez", "1990-01-15");
console.log(paciente.saludar());
console.log(`Edad: ${paciente.obtenerEdad()} años`);