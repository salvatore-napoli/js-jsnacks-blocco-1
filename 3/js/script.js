var firstNumber = parseInt(prompt('Inserisci il primo numero.'));
var secondNumber = parseInt(prompt('Inserisci il secondo numero.'));
var thirdNumber = parseInt(prompt('Inserisci il terzo numero.'));
var fourthNumber = parseInt(prompt('Inserisci il quarto numero.'));
var fifthNumber = parseInt(prompt('Inserisci il quinto numero.'));
var start = 0;
var numberSum = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];

// // Versione for
// for (var i = 0; i < numberSum.length; i++) {
//   start += numberSum[i];
// }
// console.log ('La tua somma è: ' + start);

// // Versione while
// var i = 0;
// while (i < numberSum.length) {
//   start += numberSum[i];
//   i++;
// }
// console.log ('La tua somma è: ' + start);

// Versione do-while
var i = 0;
do {
  start += numberSum[i];
  i++;
} while (i < numberSum.length);
console.log ('La tua somma è: ' + start);
