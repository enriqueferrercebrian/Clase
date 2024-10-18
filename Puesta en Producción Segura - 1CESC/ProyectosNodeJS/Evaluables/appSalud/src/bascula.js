class Bascula {
    constructor() {
        this.anotaciones = [];
    }

    obtenerNumeroAnotaciones() {
        return this.anotaciones.length;
    }

    anotarPeso(peso, altura = 1, fecha = new Date()) {
        this.anotaciones.push({ peso, altura, fecha });
    }

    obtenerPesoMaximo() {
        return Math.max(...this.anotaciones.map(anotacion => anotacion.peso));
    }

    obtenerPesoMinimo() {
        return Math.min(...this.anotaciones.map(anotacion => anotacion.peso));
    }

    calcularIMC() {
        const ultimaAnotacion = this.anotaciones[this.anotaciones.length - 1];
        return ultimaAnotacion.peso / (ultimaAnotacion.altura ** 2);
    }

    describirIMC(imc) {
        if (imc < 16) return 'Infrapeso (delgadez severa)';
        if (imc >= 16 && imc < 17) return 'Infrapeso (delgadez moderada)';
        if (imc >= 17 && imc < 18.5) return 'Infrapeso (delgadez aceptable)';
        if (imc >= 18.5 && imc < 25) return 'Peso normal';
        if (imc >= 25 && imc < 30) return 'Sobrepeso';
        if (imc >= 30 && imc < 35) return 'Obeso (Tipo I)';
        if (imc >= 35 && imc < 40) return 'Obeso (Tipo II)';
        return 'Obeso (Tipo III)';
    }
}
module.exports = Bascula;