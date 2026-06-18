//console.log("Hola");

//Var

/*if (true) {
  var edad = 25;
}
console.log(edad);

//let
if (true) {
    let puntos = 100;
    console.log(puntos);
}
console.log(puntos); // This will throw an error because 'puntos' is not defined outside the block

//const
const PI = 3.14159;
PI = 3.14; // This will throw an error because 'PI' is a constant and cannot be reassigned

const user = {id:1};
user.id = 2; // This is allowed because we are modifying the property of the object, not reassigning the constant itself
console.log(user.id); // This will print 2


//v8
const v8 = require('v8');

miVariable = {
    nombre: "Jose",
    version: 2026
} 

const tamano = v8.serialize(miVariable).length; 
console.log(`El tamano de la variable es: ${tamano} bytes`);
*/

//readline

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const rl =  readline.createInterface({ input, output });

async function iniciar() {
    const nombre = await rl.question('Digite su nombre: ');
    if (validarDatos(nombre)) {
        console.log(`Nombre digitado es: ${nombre}`);
    }else {
        console.log("El nombre solo debe contener letras");
    }
    rl.close();
}

function validarDatos(nombre) {
    const expresion = /^[a-zA-Z]+$/; // Solo permite letras
    const nombreValidado = expresion.test(nombre);
    if (nombreValidado) {
        return true;
    }else {
        return false;
    }
}

iniciar();

/*
^ - donde inicia
$ - donde termina
[a-zA-Z] - solo permite letras mayusculas y minusculas
+ - indica que debe haber al menos una letra
$ - indica el final de la cadena
*/

/* Await - esperar a que se resuelva una promesa 
antes de continuar con la ejecución del código 
Async - indica que una función es asíncrona y puede contener 
operaciones asíncronas, como promesas o await
*/

/* test - es un método de las expresiones regulares en JavaScript 
que se utiliza para verificar si una cadena de texto cumple con 
un patrón específico definido por la expresión regular. 
Devuelve true si la cadena coincide con el patrón y false si no coincide.
readline - es un módulo de Node.js que proporciona una interfaz para 
leer datos de una fuente de entrada, como el teclado, y escribir datos 
en una fuente de salida, como la consola. Permite interactuar con el usuario a través de la consola, solicitando información y recibiendo respuestas.
*/

/* asyncrono es un concepto de programación que se refiere 
a la capacidad de ejecutar operaciones que pueden tomar tiempo sin bloquear 
el flujo principal del programa. Esto es especialmente útil para tareas como 
la lectura de archivos, solicitudes de red o cualquier operación que pueda 
tardar en completarse. En JavaScript, las funciones asíncronas se pueden manejar 
utilizando promesas o la sintaxis async/await, lo que permite escribir código que 
es más fácil de leer y mantener.
*/