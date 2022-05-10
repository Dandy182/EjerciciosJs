
const {promedio, checkSeatStatus, getRowNumber} = require('./Ejercicio 2');

it('debe retornar el promedio', ()=>{
    expect(promedio([1,2,4])).toBe(2);
});

it('checkSeatStatus es una función', ()=>{
    expect(typeof checkSeatStatus).toBe('function');
});

it('debe lanzar un TypeError si el primer parametro es un string', ()=>{
    expect(()=> checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a String'))
});

it('debe lanzar un TypeError si el segundo parametro no es un numero', ()=>{
    expect(()=> checkSeatStatus('A', '2')).toThrow(new TypeError('the second parameter is not a number'))
});

it('debe mostrar 1 si la letra dada como parametro es A', ()=>{
    expect(getRowNumber('A')).toBe(0);
});

it('debe mostrar 3 si la letra dada como parametro es C ', ()=>{
    expect(getRowNumber('C')).toBe(2);
} );