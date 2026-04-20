console.log("Hello JavaScript!");

function bisextile(année){
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;
    }    
    return false;
}

function afficherJourSemaines(){
    const jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
    for(let i = 0; i < jours.length; i++){
        console.log(jours[i]);
    }
}