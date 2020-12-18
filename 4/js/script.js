var partyGuests = ['John', 'Jack', 'Tom'];
var userName = prompt('Qual è il tuo nome?');
var consent = false;

// for (var i = 0; i < partyGuests.length; i++) {
//   if (userName[0].toUpperCase() + userName.slice(1).toLowerCase() === partyGuests[i]) {
//     consent = true;
//   }
// }
// if (consent) {
//   console.log('Puoi partecipare alla festa!');
// } else {
//   console.log('Spiacente, non puoi partecipare!');
// }

// Alternativa
if (partyGuests.indexOf(userName[0].toUpperCase() + userName.slice(1).toLowerCase()) !== -1) {
  consent = true;
}

if (consent) {
  console.log('Puoi partecipare alla festa!');
} else {
  console.log('Spiacente, non puoi partecipare!');
}
