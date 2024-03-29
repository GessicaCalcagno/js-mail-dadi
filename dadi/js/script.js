// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

// Genera numero casuale giocatore
const player = Math.floor(Math.random() * 6 + 1);
console.log(player);

// Genera numero casuale computer
const computer = Math.floor(Math.random() * 6 + 1);
console.log(computer);

//Indico le condizioni di vincita o parità

//Dischiaro la variabile del risultato per scriverla in pagina
let result;

if (player === computer) {
    result = "Siete pari";
    console.log("Siete pari");
} else if (player > computer) {
    result = "Ha vinto il giocatore";
    console.log("Ha vinto il gicatore");
} else {
    result = "Ha vinto il computer";
    console.log("Ha vinto il computer");
}

document.getElementById("result").innerHTML = `${result}`;