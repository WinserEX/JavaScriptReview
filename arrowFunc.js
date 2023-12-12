class Fabrica {
    saludo = (nombre) => { 
        console.log(`Hola ${nombre}`)
    }
};

const instancia = new Fabrica();

instancia.saludo("Winser");