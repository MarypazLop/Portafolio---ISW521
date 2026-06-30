import {animal} from './animal.js';

export class perro extends animal {
    constructor(nombre, especie, raza, edad) {
        super(nombre, especie); // Llamada al constructor de la clase padre (animal)
        this.raza = raza;
        this.edad = edad;
    }
    ladrar() {
        console.log(`El perro llamado ${this.nombre} está ladrando.`);
    }
    comer() {
        console.log(`El perro llamado ${this.nombre} está comiendo.`);
    }

}