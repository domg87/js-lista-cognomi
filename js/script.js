// Chiedere all’utente il cognome
var utente = prompt("Inserisci il tuo nome");
utente = capitalizeFirstLetter(utente);

// inserirlo in un array con altri cognomi:
// ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’

var listUser = ["Bianchi", "Rossi", "Duzioni", "Balsano", "verdi"];
listUser.push(utente);

// stampa la lista ordinata alfabeticamente -- comando .sort()
listUser.sort();
console.log(listUser);


for(var i = 0; i < listUser.length; i++) {
  var contenuto = document.getElementById("lista").innerHTML;
  contenuto = contenuto + "<li>" + listUser[i] + "</li>";
  document.getElementById("lista").innerHTML = contenuto;
}

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

var posizione;

// capitalizeFirstLetter per mettere la prima lettera in maiusc altrimenti non funziona l'ordine alfabetico

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
