// "Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)
// chiedere all utente la sua email
var mia_email = prompt('Quale è il tuo email ?', 'tomcruise@missionimpossible.com');

// creare una lista di email
var lista_email_vip = ['tomcruise@missionimpossible.com' ,'dicaprio@titanic.com' ,'ladygaga@badromance.com' ,'pippo@cartone.com' ,'picasso@guernica.com' ,'paint@disegno.com' ,'write@pencil.com']

// verificare che l email è nella lista e dunque dare l output richiesto
 for (var i = 0; i < lista_email_vip.length; i++) {
    if (mia_email != lista_email_vip[i]) {
        // console.log (mia_email);
        console.log('Questa email non è nella lista');
    } else {
        console.log(mia_email);
        // console.log ('Questa email non è nella lista');
    }}
// for (var i = 0; i < lista_email_vip.length || mia_email == lista_email_vip[i] ; i++) {
//     console.log (mia_email);
// }
