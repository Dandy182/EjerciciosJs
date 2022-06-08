const {factorial, restArray} = require('../Ejercicio_estructuraDatos');



it(`Factorial dá el resultado correcto`, function(){
    expect(factorial(5)).toBe(120);
})

describe(`determinar la suma de todos los números contenidos en el array.`, function(){
    it('se le agrega un array normal y lo suma', ()=>{
        expect(restArray([1,2,3,5])).toBe(11);
    })

    it('se le agrega un array con arrays anidados y debe sumar los numeros correctamente', ()=>{
        expect(restArray([3, [7, [5,6]], [9,6], 4])).toBe(37);
    })
})