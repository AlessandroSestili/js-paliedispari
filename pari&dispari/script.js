/*
Pari e Dispari

L’utente sceglie pari o dispari 
inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri 

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/






// Creo una variabile nella quale l'utente metterà se pari o dispari
var pariODispari = prompt("Inserisci PARI o DISPARI").toLowerCase();

//controllo che l'utente abbia inserito effettivamente o solo la stringa PARI o DISPARI
if(pariODispari === "pari") {
    console.log("hai scelto pari")

    // ora creo una variabile con un prompt per far scegliere all'utente un numero da 1 a 5 
    var UserNumDa1A5 = parseInt(prompt("Scegli un numero da 1 a 5"));

    // controllo che l'utente abbia inserito solo un numero
    if(Number.isNaN(UserNumDa1A5) || (UserNumDa1A5 <= 0) || (UserNumDa1A5 > 5)) {
        alert("Inserisci un numero da 1 a 5. Riprova.")

    } else {
        SommaPariODispari()
    }

} else if (pariODispari === "dispari") {
    console.log("hai scelto dispari")

    // ora creo una variabile con un prompt per far scegliere all'utente un numero da 1 a 5 
    var UserNumDa1A5 = parseInt(prompt("Scegli un numero da 1 a 5"));

    // controllo che l'utente abbia inserito solo un numero
    if(Number.isNaN(UserNumDa1A5) || (UserNumDa1A5 <= 0) || (UserNumDa1A5 > 5)) {
        alert("Inserisci un numero da 1 a 5. Riprova.")

    } else {

        SommaPariODispari()
    }

} else {
    alert("Scegli o PARI O DISPARI! ")
}











// funzione che genera numeri da 1 a 5 
function PcRandomNumDa1A5(numero) {

    // genera un numero da 1 a 5 casuale 
    var numero = (Math.round( Math.random() * 5))

    return numero
}


function SommaPariODispari(somma) {

    // somma i due numeru dell utente del pc
    var risultato = UserNumDa1A5 + PcRandomNumDa1A5();

    // Stabiliamo se la somma dei due numeri è pari o dispari 
    if(risultato % 2 === 0) {

        var somma = "pari"
    } else {

        var somma = "dispari"
    }

    if(somma === pariODispari) {
        console.log("Hai vinto")
    } else {
        console.log("Hai perso")
    }

    return somma
}










