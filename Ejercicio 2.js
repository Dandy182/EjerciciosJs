/* 1. crear una funcion que permita verificar el estado de un asiento de cine */

function checkSeatStatus(row, number){
    if(typeof row !== 'string')throw new TypeError('First parameter is not a string');
    if(typeof number !== 'number')throw new TypeError('Second parameter is not a number');


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