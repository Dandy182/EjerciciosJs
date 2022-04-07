
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

salarioAnual(empleados, 'Manuel')