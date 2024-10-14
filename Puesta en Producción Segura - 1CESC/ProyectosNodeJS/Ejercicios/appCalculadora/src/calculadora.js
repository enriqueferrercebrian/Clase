class Calculadora {
  suma(a, b) {
    return a + b;
  }

  resta(a, b) {
    return a - b;
  }

  multiplica(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("No se puede dividir por 0!");
    }
    return a / b;
  }
  raizCuadrada(x) {
    if (x < 0) {
      throw new Error("No se puede calcular la raíz cuadrada de un número negativo!");
    }
    return Math.sqrt(x);
  }

  esPar(x) {
    return x % 2 === 0;
  }

  porcentaje(a, b) {
    return (a / b) * 100;
  }

  diasEntre(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // horas * minutos * segundos * milisegundos
    const diff = Math.abs(date2 - date1);

    return Math.round(diff / oneDay);
  }

  esFechaAnterior(date1, date2) {

   return date1<date2;
  }

}
// para exportar la clase y poder usarla desde otro archivo.
module.exports = Calculadora;