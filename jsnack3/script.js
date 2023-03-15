//Snack 3Il software deve chiedere per 10 volte all’utente di inserire un numero.Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0

/* for (let i = 0; i < 10; i++)  {
    let num = Number(prompt('inserisci un numero'))
    sum = (sum + num)
}
console.log('la somma dei numeri è ' + sum);
 */


/*Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

i = 0 

while (i < 10) {
    let x = Number(prompt('aggiungi nu numero'));
    sum = sum + x
    i ++
}

console.log(sum);