const {factorial, restArray} = require('../Ejercicio_estructuraDatos');



it(`Factorial dá el resultado correcto`, function(){
    expect(factorial(5)).toBe(120);
})

describe(`determinar la suma de todos los números contenidos en el array.`, function(){
    it('se le agrega un array normal y lo suma', ()=>{
        expect(restArray([1,2,3,5])).toBe(11);
    })
})