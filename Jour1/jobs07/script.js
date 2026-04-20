console.log("Hello JavaScript!");

function jourTravail(date) {
  const jourFérié = [
    "2024-01-01", // Jour de l'An
    "2024-02-12", // Nouvel An chinois
    "2024-03-29", // Vendredi Saint
    "2024-04-01", // Lundi de Pâques
    "2024-05-01", // Fête du Travail
    "2024-06-10", // Fête de la Musique
    "2024-07-14", // Fête Nationale
    "2024-08-15", // Assomption
    "2024-09-17", // Fête de la Gastronomie
    "2024-10-31", // Halloween
    "2024-11-01", // Toussaint
    "2024-12-25"  // Noël
  ];  
  if (jourFérié.includes(date)) {
    console.log(date+" est un jour férié.");
  }
  else if (new Date(date).getDay() === 0 || new Date(date).getDay() === 6) {
    console.log(date+" est un week-end.");
  }
  else {
    console.log(date+" est un jour de travail.");
  }
}