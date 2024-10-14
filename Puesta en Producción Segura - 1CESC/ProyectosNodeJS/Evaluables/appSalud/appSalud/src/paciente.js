const Bascula = require('./bascula');

class Paciente {
    constructor(nombre, apellidos, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = new Date(fechaNacimiento);
        this.bascula = new Bascula();
    }

    saludar() {
        return `Hola soy ${this.nombre} ${this.apellidos}`;
    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        this.nombre = nombre;
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    obtenerFechaNacimiento() {
        return this.fechaNacimiento;
    }

    modificarFechaNacimiento(fecha) {
        this.fechaNacimiento = new Date(fecha);
    }

    obtenerEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const diferenciaMeses = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    modificarBascula(bascula) {
        this.bascula = bascula;
    }

    obtenerBascula() {
        return this.bascula;
    }

    calcularIMC() {
        return this.bascula.calcularIMC();
    }
}

module.exports = Paciente;