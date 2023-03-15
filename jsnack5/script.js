//Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array.

let lista = []

let i = 0

while(i < 6) {
    let numeroInserito = Number(prompt('inserisci un numero'))
    if(numeroInserito % 2 == 0) {
        console.log('è pari');
    } else {
        lista.push(numeroInserito)
    }
    i++
}
console.log(lista);

let lista2 = []

for (let i = 0; i < 6; i++) {
    let numeroInserito = Number(prompt('inserisci un numero'))
    if(numeroInserito % 2 == 0) {
        console.log('è pari');
    } else {
        lista2.push(numeroInserito)
    }    
}
console.log(lista2);