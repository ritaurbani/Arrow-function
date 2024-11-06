/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


//  Description
//  @returns {array}


function namesArray ( ) {
    let letterArray = [];

    for ( let i=0; i<names.length; i++){
        const currenntItem = names[i];
        let firstLetter = currenntItem.charAt(0)
        letterArray.push(firstLetter)
    } 
    return letterArray;
}

// Invoca la funzione qui e stampa il risultato in console

const arrayOfLetters = namesArray ( names)
console.log(arrayOfLetters)


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]