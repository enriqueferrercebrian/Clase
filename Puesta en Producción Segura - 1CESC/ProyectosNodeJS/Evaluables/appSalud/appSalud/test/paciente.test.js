const chai = require('chai');
const expect = chai.expect;

const Paciente = require('../src/paciente');  // Asegúrate de que la ruta es correcta

describe('Paciente', function() {

    let paciente;

    beforeEach(function() {
        paciente = new Paciente("Juan", "Pérez", "1980-11-02");
    });

    it('debería saludar correctamente', function() {
        expect(paciente.saludar()).to.equal('Hola soy Juan Pérez');
    });

 });