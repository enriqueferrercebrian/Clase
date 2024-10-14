const chai = require('chai');
const expect = chai.expect;

const Calculadora = require('../src/calculadora');

describe('Calculadora', function() {
  let calc;

  // Si tiene estado se reinicia antes de cada prueba la instancia.
  beforeEach(function() {
    calc = new Calculadora();
  });

  it('Sumar dos números', function() {
    const result = calc.suma(2, 3);
    expect(result).to.equal(5);
  });

  it('Restar dos números', function() {
    const result = calc.resta(3, 2);
    expect(result).to.equal(1);
  });

  it('Multiplicar dos números', function() {
    const result = calc.multiplica(3, 2);
    expect(result).to.equal(6);
  });

  it('Divide dos números', function() {
    const result = calc.divide(10, 2);
    expect(result).to.equal(5);
  });


  it('Lanzamos excepción al divide por cero', function() {
    expect(()=>calc.divide(10, 0)).to.throw("No se puede dividir por 0!");
  });

// Calculadora avanzada: 

   // Nueva prueba para calcular la raíz cuadrada de un número positivo
   it('Calcula la raíz cuadrada de un número positivo', function() {
    const result = calc.raizCuadrada(16);
    expect(result).to.equal(4); // La raíz cuadrada de 16 es 4
  });

  // Prueba para excepción en raíz cuadrada de número negativo
  it('Lanzamos excepción al calcular la raíz cuadrada de un número negativo', function() {
    expect(() => calc.raizCuadrada(-4)).to.throw("No se puede calcular la raíz cuadrada de un número negativo!");
  });

  // Prueba para verificar el cálculo de porcentaje
  it('Calcula el porcentaje correctamente', function() {
    const result = calc.porcentaje(50, 200);
    expect(result).to.equal(25); // 50 es el 25% de 200
  });

 

});


