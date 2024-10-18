const chai = require('chai');
const expect = chai.expect;

const Paciente = require('../src/paciente');  // Asegúrate de que la ruta es correcta


describe('Paciente', function() {

    let paciente;

    beforeEach(function() {
        paciente = new Paciente("Juan", "Pérez", "1980-11-02");
    });


    // Test nuevos 
    it('debería saludar correctamente', function() {
        expect(paciente.saludar()).to.equal('Hola soy Juan Pérez');
    });

    it('deberia cambiar el nombre', function() {
        paciente.modificarNombre('Enrique');
        expect(paciente.obtenerNombre()).to.equal('Enrique');
    });

    it('deberia cambiar los apellidos', function() {
        paciente.modificarApellidos('Ferrer');
        expect(paciente.obtenerApellidos()).to.equal('Ferrer');
    });
    

    it('deberia cambiar la fecha de nacimiento', function() {
        paciente.modificarFechaNacimiento('1994-05-19');
        expect(paciente.obtenerFechaNacimiento().toISOString()).to.equal(new Date('1994-05-19').toISOString());
    });  

    it('deberia obtener la edad correcta mediante la fecha de nacimiento solo con el año', function() {
        expect(paciente.obtenerEdad()).to.equal(43);
    });
    
  it('deberia cambiar la bascula', function() {     
    let bascula = {anotaciones: [{peso: 80, altura: 1.75, fecha: new Date()}]};
    paciente.modificarBascula(bascula);
    expect(paciente.obtenerBascula()).to.equal(bascula);
});


it(' Comprueba que el calculo del IMC sea un numero', function() {         
    expect(typeof paciente.calcularIMC() === 'number');
});
    




 });