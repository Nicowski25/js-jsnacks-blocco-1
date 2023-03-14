//Snack 1 Blocco 1 L’utente inserisce due numeri in successione, con due prompt.Il software stampa il maggiore.

//inserire il primo num
const firstNum = prompt('inserisci il primo numero')
//inserire il secondo numero
const secondNum = prompt('inserisci il secondo numero')

if (firstNum > secondNum) {
    console.log(firstNum);
} else if (firstNum < secondNum) {
    console.log(secondNum);
} else {
    console.log('uguali');
}
