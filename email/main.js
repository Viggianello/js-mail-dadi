// Chiedere all utente la sua email e verificare se tale è nella lista eamil 'vip', se in tal caso non lo fosse avvisarlo
// chiedere all utente la sua email
var mia_email = prompt('Quale è il tuo email ?', 'tomcruise@missionimpossible.com');

// creare una lista di email
var lista_email_vip = ['tomcruise@missionimpossible.com' ,'dicaprio@titanic.com' ,'ladygaga@badromance.com' ,'pippo@cartone.com' ,'picasso@guernica.com' ,'paint@disegno.com' ,'write@pencil.com']

// verificare che l email è nella lista e dunque dare l output richiesto

for (var i = 0; i < lista_email_vip.length || mia_email == lista_email_vip[i] ; i++) {
    console.log (mia_email);
}

console.log (lista_email_vip);
