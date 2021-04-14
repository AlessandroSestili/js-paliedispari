// Inizializzo la variabile della parola da controllare se palindroma o meno
var palindromCheck = prompt("Inserisci una parola").toLowerCase()

// Inizializzo la variabile che mi servirà nel ciclo for per creare la parola palindroma
var invertedWord = "";

verificoparolaPalindroma(palindromCheck);

// funzione che verifica la palindromicità di una parola 
function verificoparolaPalindroma(parola) {

    // Creao un ciclo per creare la parola al contrario che andra poi inserita nella variabile invertedword 
    for(var i = parola.length-1; i >= 0; i--) {

        invertedWord += parola[i];
    }

    // Ora devo comparare le due parole parola e InvertedWord per dire se sono palindrome
    if(parola === invertedWord) {
        return console.log("la parola da te inserita è palindroma")

    } else {
        console.log("la parola da te inserita NON è palindroma")
    }
}












