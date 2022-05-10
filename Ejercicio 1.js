
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
    return prom;
    
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
    console.log(`7. valor mensual a pagar con descuento: ${resultado}`);
 
}

priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972

/* Ejercicio 8*/

/*A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration.
 So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the 
supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 
'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps 
going until she reached the number of wedges that she needs or until she runs out of limes.
Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes 
to cut.*/
function limesToCut(wedgesNeeded, limes) {
    let rodajasNuevas = 0,
        contador = 0;

        if(wedgesNeeded <= 0 || limes <= 0){
            contador == 0;
        }else{
            while(rodajasNuevas < wedgesNeeded){
                let lime = limes.shift();

                switch(lime){
                    case 'small':
                        rodajasNuevas = rodajasNuevas + 6;
                        break;
                    case 'medium':
                        rodajasNuevas = rodajasNuevas + 8;
                        break;
                    case 'large':
                        rodajasNuevas = rodajasNuevas + 10;
                        break;
                    default:
                        continue; 
                }
                contador++;
                console.log(rodajasNuevas, lime, contador);

            }
        }
 

    
  }
  const limes = [
    'small',
    'large',
    'large',
    'medium',
    'small',
    'large',
    'large',
    'medium',
  ];

limesToCut(42, limes);
limesToCut(4, ['medium', 'small']);



<<<<<<< HEAD

/* ejercicio 1 - curso henry M1 */
function DecimalABinario(num) {
    // tu codigo aca
    let resultado = [];
  
    while(num >= 1){
      resultado.unshift(num % 2);
      num = Math.floor(num / 2);
    }
  
    console.log(resultado.join(''));


  
  }

  DecimalABinario(9);

  



=======
function darFactorial(n){
    if(n < 0){
        return 'ingrese un numero natural!!!';
    }else if(n === 1){
        return 1
    }else{
        return n * darFactorial(n-1);
    }


}


darFactorial(3);
>>>>>>> 6a3eb52786246e9726ef6be586bb98f6d7bb9d38
