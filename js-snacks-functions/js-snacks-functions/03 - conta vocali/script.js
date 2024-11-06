/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


// Description
// @param {string} parola
// @returns {number}

function vowelNumber( parola) {
 let newString = "";
 const vowelArray = ["a","e","i","o","u"]
//  const result = newString.length();
 for (let i=0; i<parola.length;i++){
    let currentLetter = parola[i];
    if (vowelArray.includes(currentLetter)) {
        newString += currentLetter
    }
      
}
 
 return newString.length
}



// Invoca la funzione qui e stampa il risultato in console

const numVowel = vowelNumber(word)
console.log(numVowel)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)