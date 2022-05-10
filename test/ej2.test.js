const {
    checkSeatStatus,
     getRowNumber} = require('../Ejercicio 2');


describe('checkSeatStatus', ()=>{

    it('verfificar que checkSeatStatus es una función', ()=>{
    expect(typeof checkSeatStatus).toBe('function');
    });

    it('el primer parametro es un string', ()=>{
        expect(()=> checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });

    it('El segundo parametro es un numero', ()=>{
        expect(()=> checkSeatStatus('A', '4')).toThrow(new TypeError('Second parameter is not a number'))
    });

    it('debe retornar true si la silla dada definida por la fila y la columna esta reservada', ()=>{
        expect(checkSeatStatus('A', 1)).toBe(true);
    })

    it('debe retornar false si la silla dada definida por la fila y la columna no esta reservada', ()=>{
        expect(checkSeatStatus('E', 3)).toBe(false);
    })
})
disponible

describe('getRowNumber', ()=>{

    it('el parametro debe ser un string', ()=>{
        expect(getRowNumber('A')).toBe(0);
    });

    it('el parametro debe ser un string', ()=>{
        expect(getRowNumber('D')).toBe(3);
    })
})
