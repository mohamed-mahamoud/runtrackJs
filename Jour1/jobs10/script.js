console.log("Hello JavaScript!");

function compterVoyelles(phrase) {
  const voyelles = "aeiouAEIOU";
  let compteur = 0;
  for (let char of phrase) {
    if (voyelles.includes(char)) {
      compteur++;
    }
  }
  console.log("Le nombre de voyelles dans la phrase est : " + compteur);
}

const phrase = "Bonjour, comment ça va ?";
compterVoyelles(phrase);