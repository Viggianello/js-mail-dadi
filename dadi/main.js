// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!
// chiedere all utente un numero da 1 a 6
var dado_valore_human = parseInt(prompt('Scegli un numero da 1 a 6 ?'));
//creare un  numero da 1 a 6 per il pc
var dado_valore_pc = Math.floor(Math.random() * 5) + 1;
if (dado_valore_human <7 && dado_valore_human >=1 && isNaN(dado_valore_human) == false) {
    console.log (dado_valore_human);
    console.log (dado_valore_pc);
    // confrontare i due valori e vendere chi ha vinto
    if (dado_valore_human > dado_valore_pc) {
        console.log ('Human vince!');
    } else if (dado_valore_human == dado_valore_pc) {
        console.log ('Human e Pc pareggiano!');
    } else {
        console.log ('Pc vince!');
    }
} else {
    console.log ('hai barato!! errore');
}
