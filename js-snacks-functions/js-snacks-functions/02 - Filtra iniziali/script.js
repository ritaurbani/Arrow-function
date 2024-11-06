/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.


//  * Description
//  * @param {array} arr
//  * @param {string} letter
//  * @returns {any}
 
function arrayOfWords(arr, letter ) {
    const  arrResult = [];
    for (let i = 0; i < arr.length; i++) {
            const currentItem = arr[i];
            let firstLetter = currentItem.charAt(0)
            if (letter === firstLetter) {
                arrResult.push(currentItem)
            }
        } 

    return arrResult; 
}


// Invoca la funzione qui e stampa il risultato in console

const risultato = arrayOfWords( names, "L")
console.log(risultato)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]