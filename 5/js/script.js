var numberArray = [];

for (var i = 0; i < 6; i++) {
  var userNumber = parseInt(prompt('Inserisci un numero'));
  if (userNumber % 2 !== 0) {
    numberArray.push(userNumber);
  }
}

console.log(numberArray);
