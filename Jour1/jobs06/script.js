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

function fizzbuzz(){
    for(let i = 1; i <= 151; i++){
       if(i%3 === 0 && i % 5 === 0)
         {console.log("FizzBuzz");}
       else if(i % 3 === 0)
         {console.log("Fizz");}
       else if(i % 5 === 0)
         {console.log("Buzz");}
       else
         {console.log(i);}
    }
}