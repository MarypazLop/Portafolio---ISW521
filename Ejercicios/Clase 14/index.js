/*
const numeros =[40,34,5,8,100,6];

console.log(numeros.sort((a,b) => a - b));

let arr = ["a","b","c"];
arr[7]="z";
console.log(arr);


const precios = [100, 250, 80, 400];
const caros = [];
for (let i = 0; i < precios.length; i++) {
    if (precios[i] > 150) {
        caros.push(precios[i]);
    }
}
console.log(caros);

//el bucle filtra
//El método correcto declarativo es el filter:
//El bucle hace lo mismo que el filter, pero con menos código 
const caros2 = precios.filter(precio => precio > 150);
console.log(caros2);



const estudiantes = [
    {nombre: "Ana", carnet: 2024001},
    {nombre: "Luis", carnet: 2024002},
];

//El dato de cada objeto se necesitan en el resultado es el nombre, por lo que se puede usar map para obtener un arreglo con los nombres de los estudiantes
//Un String se puede convertir en mayuscula con el método toUpperCase()
const nombres = estudiantes.map(e => `${e.nombre} (${e.carnet})`.toUpperCase());
console.log(nombres);


const estudiantes = [
    {nombre: "Ana", promedio: 85},
    {nombre: "Luis", promedio: 67},
    {nombre: "Sara", promedio: 91}
];

//la propiedad exacta para comparar es:
const aprobados = estudiantes.filter(e => e.promedio >= 70);
console.log(aprobados);

//nombres que quedan en el resultado: 
//Ana y Sara son los aprobados, por lo que el resultado es ["Ana", "Sara"]

const nombresAprobados = aprobados.map(e => e.nombre);
console.log(nombresAprobados);
*/

