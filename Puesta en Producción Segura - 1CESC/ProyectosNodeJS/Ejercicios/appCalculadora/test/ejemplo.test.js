// uso de la biblioteca de aserciones "chai"
const chai = require('chai');
const expect = chai.expect;
// Agrupa pruebas relacionadas (describe)
describe('Prueba simple', function() {
  //define prueba individual (it)
  it('Bloque Verdadero = Verdadero', function() {
    expect(true).to.be.true; //expect (Chai): aserción sobre resultado
  });
});