/* 1. crear una funcion que permita verificar el estado de un asiento de cine */

// Los asientos en el ticket se represetan como A1, B2, C2, etc
function checkSeatStatus(row, number){
    if(typeof row !== 'string')throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number')throw new TypeError('Second parameter is not a number');

    //1 sacar el numero de la fila

    const nFila = getRowNumber(row);
    const filaLayout = layout[nFila];
    const silla = filaLayout[number];
    return silla.booked; // esto dá es estatus de la silla (true si está reservada y false si no está reservada)
}

const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function getRowNumber(letter) {
    return letter.charCodeAt() - 65;

}






module.exports = {
    checkSeatStatus, getRowNumber
};
