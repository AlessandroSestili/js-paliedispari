// Inizializzo la variabile della parola da controllare se palindroma o meno
var palindromCheck = prompt("Inserisci una parola").toLowerCase()

// Inizializzo la variabile che mi servirà nel ciclo for per creare la parola palindroma
var invertedWord = "";

if(verificoParolaPalindroma(palindromCheck)) {
    alert("La tua parola è palindroma")
} else {
    alert("la tua parola NON è palindroma")
}

// funzione che verifica la palindromicità di una parola 
function verificoParolaPalindroma(parola) {

    // Creao un ciclo per creare la parola al contrario che andra poi inserita nella variabile invertedword 
    for(var i = parola.length-1; i >= 0; i--) {

        invertedWord += parola[i];
    }

    // Ora devo comparare le due parole parola e InvertedWord per dire se sono palindrome
    if(parola === invertedWord) {
        return true

    } else {
        return false
    }
}














