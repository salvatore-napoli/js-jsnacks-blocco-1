var firstNumber = parseInt(prompt('Inserisci il primo numero.'));
var secondNumber = parseInt(prompt('Inserisci il secondo numero.'));

if (firstNumber > secondNumber) {
  console.log(firstNumber);
} else if (firstNumber < secondNumber) {
  console.log(secondNumber);
} else {
  console.log('Sono uguali!');
}
