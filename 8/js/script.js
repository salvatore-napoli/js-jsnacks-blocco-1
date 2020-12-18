var userNumber = prompt('Inserisci un numero di 4 cifre.');
var sum = 0;
if (userNumber.length === 4) {
  for (var i = 0; i < 4; i++) {
    sum += parseInt(userNumber[i]);
  }
  console.log(sum);
} else {
  alert('Il numero non è di 4 cifre!');
}
