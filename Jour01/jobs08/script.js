console.log("Hello JavaScript!");

function estPremier(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function sommePremiersNombres(a, b) {
  if (estPremier(a) && estPremier(b)) {
    const somme = a + b;
    console.log("La somme des deux nombres est : " + somme);
    return somme;
  }

  console.log("Les deux nombres ne sont pas premiers.");
  return false;
}