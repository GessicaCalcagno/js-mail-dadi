// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi! COMMENTALO SE ANCORA STAI LAVORANDO SUL CODICE
//"use strict";
//**************************************************** */

//1- Chiedo all'utente la sua email
const mailUser = prompt("Scrivi il tuo indirizzo email")

//Array
const userAccess = ["gessica@gmail.com", "gessica@virgilio.it", "gessica@live.it", "pippo@libero.it "]

// Creo una variabile globale 
let flag = false; // boolean

// Creo ciclo for per entrare nell'array
for (let i = 0; i < userAccess.length; i++) {
    //console.log(i, userAccess[i]); --> Mi stampa tutti gli elementi

    if (userAccess[i] === mailUser) {
        flag = true;
        console.log("Accesso consentito");
        // L'istruzione break serve a uscire immediatamente dal ciclo dopo aver trovato un match, senza continuare a iterare sugli elementi successivi.
        break;
    } else {
        console.log("Accesso negato")
    }
}


//Output

if (flag === true) {
    document.getElementById("result").innerHTML = "Accesso consentito";
} else {
    document.getElementById("result").innerHTML = "Accesso negato";
}

