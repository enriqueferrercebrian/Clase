class AnalizadorVulnerabilidades {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
        this.VULNERABILIDADES_CONOCIDAS = ['XSS', 'SQL Injection', 'CSRF', 'RCE'];
        this.vulnerabilidadesDetectadas = [];
    }

    agregarVulnerabilidadDetectada(vulnerabilidad) {
        this.vulnerabilidadesDetectadas.push(vulnerabilidad);
    }

    revisarVulnerabilidades() {
        let vulnerabilidades = [];
        for (let vulnerabilidad of this.VULNERABILIDADES_CONOCIDAS) {
            if (this.vulnerabilidadesDetectadas.includes(vulnerabilidad)) {
                vulnerabilidades.push(vulnerabilidad);
            }
        }
        return vulnerabilidades;
    }
}

// Uso
let analizador = new AnalizadorVulnerabilidades('web', 'https://explotaMiApp.com');
analizador.agregarVulnerabilidadDetectada('XSS');
analizador.agregarVulnerabilidadDetectada('RCE');

console.log("Vulnerabilidades encontradas:", analizador.revisarVulnerabilidades());
