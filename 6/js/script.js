var userNumber = parseInt(prompt('Inserisci un numero'));

if (userNumber > 10) {
  alert('Il numero è troppo alto.');
} else {
  for (var i = 1; i <= userNumber; i++) {
    console.log (Math.pow(i, 3));
  }
}
