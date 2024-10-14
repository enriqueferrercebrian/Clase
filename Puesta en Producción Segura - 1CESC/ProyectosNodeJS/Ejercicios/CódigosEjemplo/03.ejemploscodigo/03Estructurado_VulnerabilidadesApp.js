// Constantes
const VULNERABILIDADES_CONOCIDAS = ['XSS', 'SQL Injection', 'CSRF', 'RCE'];

// Variables globales
let aplicacionARevisar = {
    tipo: 'web', // 'web' o 'apk'
    url: 'https://explotaMiApp.com',
    vulnerabilidadesDetectadas: ['XSS', 'RCE']
};

// Funciones globales
function revisarVulnerabilidades(aplicacion) {
    let vulnerabilidades = [];
    for (let vulnerabilidad of VULNERABILIDADES_CONOCIDAS) {
        if (aplicacion.vulnerabilidadesDetectadas.includes(vulnerabilidad)) {
            vulnerabilidades.push(vulnerabilidad);
        }
    }
    return vulnerabilidades;
}

// Función principal
function main() {
    let vulnerabilidades = revisarVulnerabilidades(aplicacionARevisar);
    console.log("Se está revisando la APP: " + aplicacionARevisar.url);
    console.log("Vulnerabilidades encontradas:", vulnerabilidades);
}

main();