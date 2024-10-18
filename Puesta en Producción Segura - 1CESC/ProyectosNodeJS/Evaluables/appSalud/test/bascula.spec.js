const chai = require('chai');
const expect = chai.expect;

const Bascula = require('../src/bascula');  // Asegúrate de que la ruta es correcta

describe('Bascula', function() {
  
  describe('#constructor()', function() {
    it('debería crear una nueva instancia de Báscula', function() {
      const bascula = new Bascula();
      expect(bascula).to.be.instanceOf(Bascula);
    });
  });

  let bascula;

  beforeEach(function() {
      bascula = new Bascula();
  });

  it('debería inicializar una báscula correctamente', function() {
      expect(bascula.obtenerNumeroAnotaciones()).to.equal(0);
  });

  it('debería registrar un nuevo peso correctamente', function() {
      bascula.anotarPeso(65, 1.75, '2023-09-20');
      expect(bascula.obtenerNumeroAnotaciones()).to.equal(1);
  });

  it('debería detectar y devolver el peso máximo correctamente', function() {
      bascula.anotarPeso(65);
      bascula.anotarPeso(70);
      expect(bascula.obtenerPesoMaximo()).to.equal(70);
  });

  it('debería detectar y devolver el peso mínimo correctamente', function() {
      bascula.anotarPeso(65);
      bascula.anotarPeso(60);
      expect(bascula.obtenerPesoMinimo()).to.equal(60);
  });

  it('debería calcular el IMC correctamente', function() {
      bascula.anotarPeso(65, 1.75);
      expect(bascula.calcularIMC()).to.be.closeTo(21.22, 0.01); // Aproximadamente 21.22
  });

  it('debería dar una descripción textual del IMC', function() {
      bascula.anotarPeso(65, 1.75);
      let imc = bascula.calcularIMC();
      expect(bascula.describirIMC(imc)).to.equal('Peso normal');
  });

  
  it(' Obtener la bascula del paciente', function() {         
    expect(paciente.obtenerBascula()).to.be.a('object');
}); 



});