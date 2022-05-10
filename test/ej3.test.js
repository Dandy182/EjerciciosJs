
const {darFactorial} = require('../Ejercicio 3_estructura');

describe('calcular el factorial',()=>{
    it('debe aceptar solo numero positivos', ()=>{
        expect(darFactorial(-4)).toBe(`debe poner un numero natural`)
    })
    it('si el parametro es es 0 debe dar como resultado 1', ()=>{
        expect(darFactorial(0)).toBe(1);
    })

    it('al calcular el factorial de 3', ()=>{
        expect(darFactorial(3)).toBe(6);
    })

    it('al calcular el factorial de 12', ()=>{
        expect(darFactorial(12)).toBe(479001600);
    })
})