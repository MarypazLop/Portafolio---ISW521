/*
const persona = {nombre: "Juan", edad: 50};
const {edad, anios = 21 } = persona;
console.log(anios); 


function sumarTodo (...numeros) {
    return numeros.reduce((acum, numero) => acum + numero, 0) 
};

console.log(sumarTodo(1, 2, 3));
console.log(sumarTodo(5,10,15,20));

import {sumar, restar} from "./operadores.js";

console.log(sumar(5,5));
console.log(restar(5,3));



import {perro} from "./perro.js";

const miPerro = new perro("Max", "Mamifero", "Golden Retriever", 7);
console.log(miPerro.ladrar());
console.log(miPerro.comer());
*/

class CuentaBancaria {
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    getSaldo() {
        return this._saldo;
    }
    set saldo(valor) {
        if (valor < 0) throw new Error("El saldo no puede ser negativo");
        this._saldo = valor;
    }
}

const cuenta = new CuentaBancaria(1000);
cuenta.saldo = 1500; // Establece el saldo a 500
console.log(cuenta.getSaldo()); // Muestra 500