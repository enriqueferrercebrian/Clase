function fortificarCodigo(codigo, vulnerabilidades) {
    let codigoFuerte = codigo;

    for (let vulnerabilidad in vulnerabilidades) {
        // Busca el patrón en todo el texto
        let pattern = new RegExp(vulnerabilidad, 'g'); 
        codigoFuerte = codigoFuerte.replace(pattern, vulnerabilidades[vulnerabilidad]);
    }

    return codigoFuerte;
}

// Ejemplo de uso:
let miCodigo = `
    const password = "12345";
    eval('algoRaro()');
    let admin = true;
`;

let vulnerabilidades = {
    // Reemplaza eval por un console.log de advertencia
    'eval\\(': 'console.log(', 
    // Oculta contraseñas obvias
    'password = "12345"': 'password = "*****"',
    // Desactiva privilegios de administrador por defecto
    'let admin = true': 'let admin = false'    
};

let codigoFortificado = fortificarCodigo(miCodigo, vulnerabilidades);
console.log(codigoFortificado);