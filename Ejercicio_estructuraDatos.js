function factorial(n){
    if(n < 0){
        return 0
    } else if(n === 1) {
        return 1;
    }

    return n * factorial(n-1);
}


//EJERCICIO 7
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    restArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

function restArray(array){
    let resultado = 0;
    let dato = 0;
    let arrayCount = 0;

    for(let i = 0; i < array.length; i++){

        if(typeof array[i] === 'number'){
            resultado += array[i]; 
        }

        if(Array.isArray(array[i])){
            arrayCount++;
            dato += restArray(array[i]);
        }
    }

    return (resultado + dato) - arrayCount;

}




const vect = [3, [7, [5,6]], [9,6], 4];

console.log(restArray(vect));



//linked list


module.exports = {
    factorial,
    restArray
}
