class Persona {
    datos = (nombre, apellido) => { 
        this.fn = nombre;
        this.ln = apellido;
    }

    presentar() {
        console.log(`Hola ${this.fn} ${this.ln}`);
    }
}

class Empleado extends Persona {
    constructor() {
        super();
    }

    usuario = (nombre, apellido) => {
        this.datos(nombre, apellido);
    }
}

let person = new Empleado();
person.usuario("Winser", "Espinal");
person.presentar(); 
