const chai = require('chai');
const expect = chai.expect;

const Calculadora = require('../src/calculadora');

describe('Calculadora con fechas', function() {
    let calculadora;
    beforeEach(function() {
      calculadora = new Calculadora();
    });
  
    it('deberÃ­a calcular la diferencia entre dos fechas en dÃ­as', function() {
      const fechaInicio = new Date('2023-01-01');
      const fechaFin = new Date('2023-01-10');
      const diferencia = calculadora.diasEntre(fechaInicio, fechaFin);
      expect(diferencia).to.equal(9); 
    });
  
    it('Determinar si una fecha es anterior a otra', function() {
      const fecha1 = new Date('2023-01-01');
      const fecha2 = new Date('2023-01-10');
      const esAnterior = calculadora.esFechaAnterior(fecha1, fecha2);
      expect(esAnterior).to.be.true;
    });
  
    it('Determinar si una fecha NO es anterior a otra', function() {
      const fecha1 = new Date('2023-01-15');
      const fecha2 = new Date('2023-01-10');
      const esAnterior = calculadora.esFechaAnterior(fecha1, fecha2);
      expect(esAnterior).to.be.false;
    });
    
    it('Obtiene la fecha actual y la compara con una fecha anterior', function() {
      const fechaActual = new Date();
      const fechaAnterior = new Date('2020-01-01');
      const esAnterior = calculadora.esFechaAnterior(fechaAnterior, fechaActual);
      expect(esAnterior).to.be.true;
    });
  });