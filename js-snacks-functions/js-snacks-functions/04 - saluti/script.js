/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function greetings(nome){
    const result = `Hello ${nome}`
    return result
}


// Invoca la funzione qui e stampa il risultato in console

const greeting = greetings(name)
console.log(greeting)

//Risultato atteso se si passa 'Mario': // ciao Mario