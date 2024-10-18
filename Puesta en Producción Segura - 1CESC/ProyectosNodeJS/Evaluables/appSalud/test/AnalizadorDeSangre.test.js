const chai = require('chai');
const expect = chai.expect;
const AnalizadorDeSangre = require('../src/AnalizadorDeSangre'); // AsegÃºrate de ajustar la ruta si es necesario.

describe('AnalizadorDeSangre', function() {

    let analizador;

    beforeEach(function() {
        analizador = new AnalizadorDeSangre();
    });

    it('deberÃ­a generar valores aleatorios dentro de un rango', function() {
        const valor = analizador.generarValorAleatorio(5, 10);
        expect(valor).to.be.at.least(5);
        expect(valor).to.be.below(10);
    });

    it('deberÃ­a analizar una muestra y devolver resultados', function() {
        const resultados = analizador.analizarMuestra('muestraX');
        expect(resultados).to.have.property('colesterol');
        expect(resultados).to.have.property('hierro');
    });

    it('deberÃ­a obtener los Ãºltimos resultados', function() {
        analizador.analizarMuestra('muestraX');
        const resultados = analizador.obtenerResultados();
        expect(resultados).to.have.property('colesterol');
        expect(resultados).to.have.property('hierro');
    });

    it('deberÃ­a determinar si el colesterol es alto', function() {
        analizador.analizarMuestra('muestraX');
        const esAlto = analizador.esColesterolAlto();
        if (analizador.obtenerResultados().colesterol > 240) {
            expect(esAlto).to.be.true;
        } else {
            expect(esAlto).to.be.false;
        }
    });
});