// bottone "genera"
var generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function() {
    // operazioni ceh svolge dopo il click
    var prezzoAlKm = 0.21;

    // variabile per il nome da poter riutilizzare per farci più operazioni (generatorUserName)
    var generatorUserName = document.getElementById('input-user-name');
    var userName = generatorUserName.value;
    

    // variabile per l'offerta che prende da (input-user-age), per poi verificare con un if se è maggiorenne, minorenne,ecc
    var generatorUserAge = document.getElementById('input-user-age');
    var userAge = generatorUserAge.value;
    var userOffer = 'Prezzo standard';
    // prende i km inseriti dall'utente e li inserisce in "userKm"
    var generatorUserKm = document.getElementById('input-user-km');
    var userKm = parseInt(generatorUserKm.value);
    var finalPrice = userKm * prezzoAlKm;

    if( userAge == 'over' ) {
        userOffer = 'Sconto over';
        finalPrice = finalPrice - ( ( finalPrice * 40 ) / 100 );
    }else if( userAge == 'under' ) {
        userOffer = 'Sconto under';
        finalPrice = finalPrice - ( ( finalPrice * 20 ) / 100 );
    }


    // carrozza
    var numeroCarrozza = getRandomNumber(1, 10);

    // codice CP
    var codiceCp = getRandomNumber(90000, 100000);
    // console.log(codiceCp);

    // stampzre a schermo i dati 
    document.getElementById('result-user-name').innerHTML = userName;
    document.getElementById('result-offer').innerHTML = userOffer;
    document.getElementById('result-code').innerHTML = codiceCp;
    document.getElementById('result-trailer').innerHTML = numeroCarrozza;
    document.getElementById('result-price').innerHTML = finalPrice.toFixed(2);

});


// funzione che genera un numero casuale con il min incluso e il max escluso
function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) ) + min;
    return randomNumber;
}