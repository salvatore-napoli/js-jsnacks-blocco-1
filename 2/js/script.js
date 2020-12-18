var firstWord = prompt('Inserisci la prima parola.');
var secondWord = prompt('Inserisci la seconda parola.');

if (firstWord.length > secondWord.length) {
  console.log(secondWord + ' ' + firstWord);
} else if (firstWord.length < secondWord.length) {
  console.log(firstWord + ' ' + secondWord);
} else {
  console.log('Sono uguali!');
}
