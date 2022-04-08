
/*Ejercicio 1*/

function promedio(array) {
    // escribir una funcion que reciba un arreglo de enteros (array)
    // y retorne el promedio de esos numeros
    // ej:
    // promedio([1,2,3]) => 2
    // promedio([10, 20, 3]) => 11
    // Nota: Los numeros estan ordenados de menor a mayor
    // Tu código aca:

    let sum = 0;

    array.forEach(numero => {
        sum = sum + numero;
    });

    let prom = (sum / array.length);
    console.log(`1. el promedio es ${prom}`);
    
}

let array = [1, 10, 20, 30, 40]

promedio(array);

/* Ejercicio 2 */

function salarioAnual(empleados, nombre) {
    // Escribe una funcion que reciba un arreglo de objetos con info de empleados (empleados)
    // y un string (nombre)
    // y retorne el salario anual del empleado con ese nombre;
    // ej: 
    // var empleados = [{
    //    nombre: 'Manuel',
    //    salario: 1000,
    //  },
    //  {
    //    nombre: 'Flor',
    //    salario: 4000,
    //  },
    //  {
    //    nombre: 'Maria',
    //    salario: 500,
    //  }
    // ];
    // salarioAnual(empleados, 'Flor'); => 48000
    // salarioAnual(empleados, 'Manuel;); => 12000
    // Tu código aca:
    var resultado = 0;
    empleados.map(function(empleado){
        if(empleado.nombre == nombre){
            resultado = empleado.salario;
        }
    })

    console.log(`2. El sueldo de ${nombre} es ${resultado}`);

}

var empleados = [{ nombre: 'Manuel', salario: 1000},{nombre: 'Flor',salario: 4000},{ nombre: 'Maria', salario: 500}];

salarioAnual(empleados, 'Manuel');

/* Ejercicio 3 */

function encontrarLaPalabra(string) {
    // Escribir una funcion que reciba un string (string) y retorne true si encuentra la palabra "henry" adentro.
    // si no, retorna false.
    // Ej:
    // encontrarLaBomba('bienvenidos a henry') => true;
    // encontrarLaBomba('hola que tal, como va?!') => false;
  
    // Tu código:
    let resultado = false;
    if(string.includes('henry')){
        resultado = true;
    }

    console.log(`3. la palabra henry se encuentra en el string = ${resultado}`);

}

let palabra = 'bienvenidos a henry'

encontrarLaPalabra(palabra)

/* Ejercicio 4 */

function index() {
    // Escribi una función encontraIndex en el prototipo de Arrays,
    // que recibe un elemento.
    // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
    // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
    // Si no existe ese elemento la funcion debe devolver -1
    // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
    // ej:
    // var numeros = [5, 6, 4, 65, 8, 4]
    // numeros.encontraIndex(4) debe devolver 2.
    // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
    // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.
  
    // Tu código aca:

    let indice = function(valor){
        for(var i = 0; i < this.length;i++){
            if(this[i] == valor){
                return i;
            }
        }
        return -1;
    }

    return Array.prototype.encontrarIndice = indice;

}

index();
let numeros = [5, 6, 4, 6, 5, 8, 4];
console.log(numeros.encontrarIndice(4))
