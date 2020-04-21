// document.getElementById('stampacolore').innerHTML='Ecco il tuo colore preferito:
// chiedere all utente la sua email
var mia_email = prompt('Quale è il tuo email ?', 'tomcruise@missionimpossible.com');
// creare una lista di email
var lista_email = ['tomcruise@missionimpossible.com' ,'dicaprio@titanic.com' ,'ladygaga@badromance.com' ,'pippo@cartone.com' ,'picasso@guernica.com' ,'paint@disegno.com' ,'write@pencil.com']

for (var i = 0; i < lista_email.length || mia_email == lista_email[i] ; i++) {
    console.log (mia_email);
}

console.log (lista_email);
