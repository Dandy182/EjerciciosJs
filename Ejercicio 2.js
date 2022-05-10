
/* promediar */
function promedio(array){
  let resultado = 0;

  for(var i = 0; i< array.length; i++){
    resultado += array[i];
  }

  return Math.floor(resultado / array.length);

}


/* ejercicio del extra henry para yest */


function checkSeatStatus(row, column){
  if(typeof row !== 'string')throw new TypeError('First parameter is not a String');
  if(typeof column !== 'number')throw new TypeError('the second parameter is not a number');

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



//test

module.exports = {
   promedio,
   checkSeatStatus,
  getRowNumber};