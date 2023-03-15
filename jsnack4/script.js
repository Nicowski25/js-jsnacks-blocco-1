//Snack 4 (sia con for che con while):
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = [
    'nicola',
    'fabio',
    'simone',
    'lorenzo'
]

const nome = prompt('inserisci il tuo nome')

let invite = false;

let i = 0;

/* for (let i = 0; i < invitati.length; i++) {
    if(invitati[i] == nome) {
        let invite = true;
    } 
}

if(invite == true) {
    console.log('sei tra gli invitati');
} else {
    console.log('non sei tra gli invitati');
} */

while (i < invitati.length) {
    const invitatiEl = invitati[i]
    if (invitatiEl === nome) {
        invite = true
    }
    i++
}

if(invite = true) {
    console.log('sei invitato');
} else {
    console.log('non sei invitato');
}