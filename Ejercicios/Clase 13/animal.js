export class animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
}

// Los tres iguales === (comparación estricta) se usan para comparar tanto el valor como el tipo de dato, 
// mientras que los dos iguales == (comparación abstracta) solo comparan el valor y pueden realizar conversiones de tipo implícitas. 

//persona.prototype.saludar = function() significa que estamos agregando un método llamado saludar 
// al prototipo de la clase persona. Prototype es un objeto que se asocia con una función constructora 
// y permite agregar propiedades y métodos que serán compartidos por todas las instancias de esa clase.
