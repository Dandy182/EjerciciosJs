
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
console.log(`4. el indice es ${numeros.encontrarIndice(4)}`);



/* Ejercicio 5*/

const contraseña = [
    'Sunshine warming my toes,',
    'Underwater fun with my friends.',
    'Making homemade ice cream on the porch,',
    'Many long nights catching fireflies.',
    'Early morning walks to the creek,',
    'Reveling in the freedom of lazy days.',
  ];

function frontDoorResponse(line) {
    var caracteres = [];

    for(let i =0; i<line.length;i++){
        caracteres[i] = line[i][0];
    }
    var nuevoString = caracteres.toString()

    console.log(`5. la contraseña es = ${nuevoString.replace(/,/g,"")}`);
    return nuevoString.replace(/,/g,"");
  }

 let pass = frontDoorResponse(contraseña);


/* Ejercicio 6*/

/*Capitalize a word

Now that you have all the correct letters, all you need to do to get the password for the front door is to correctly capitalize the word.

Implement the function frontDoorPassword that accepts a string (the combined letters you found in task 1) and returns it correctly capitalized.*/


function frontDoorPassword(word){
    let resultado = new Array();

    for(let i = 0; i < word.length;i++){
        if(i == 0){
            resultado.push(word[i].toUpperCase());
        }else{
            resultado.push(word[i].toLowerCase());
        }
    }

    let string = resultado.toString();


    console.log(`6. Capitalizar texto: ${string.replace(/,/g,'')}`);
    
}

frontDoorPassword(pass);

/* Ejercicio 7 */

/*Calculate the discounted rate for large projects

Often, the freelancer's clients hire him for projects spanning over multiple months. In these cases, 
the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. 
Every month has 22 billable days. Help him estimate his cost for such projects, given an hourly rate, 
the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, 
where 42% becomes 0.42. The result must be rounded up to the nearest whole number. */


function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let ratePerDay = (ratePerHour * 8);
    let months = Math.floor(numDays / 22);
    let diaSobrante = ((((numDays / 22) - months) * 22) * ratePerDay);
    let ratePerMount = (months * (ratePerDay * 22));

    let resultado = Math.ceil((ratePerMount - (ratePerMount * discount)) + diaSobrante);
    console.log(resultado);
 
}

priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
priceWithMonthlyDiscount(16, 70, 0);
//=>8960
priceWithMonthlyDiscount(16, 130, 0.15);
//=>14528