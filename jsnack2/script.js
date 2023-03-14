//SNACK 2:L’utente inserisce due parole in successione, con due prompt.Il software stampa prima la parola più corta, poi la parola più lunga.

//inserire prima parola 
const firstWord = prompt('inserisci prima parola')
// inserisci seconda parola
const secondWord = prompt('inserisci seconda parola')

if (firstWord.length > secondWord.length) {
    console.log(secondWord + ' è la parola piu corta');
    console.log(firstWord + ' è la parola piu lunga');
} else if (firstWord.length < secondWord.length) {
    console.log(firstWord + ' è la parola piu corta');
    console.log(secondWord + ' è la parola piu lunga');
} else {
    console.log('le due parole sono lunghe uguali');
}