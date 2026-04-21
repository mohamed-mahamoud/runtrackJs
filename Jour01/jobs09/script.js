console.log("Hello JavaScript!");

function tri(tableau,order) {
  if (order === "asc") {
    return tableau.sort((a, b) => a - b);
  } else if (order === "desc") {
    return tableau.sort((a, b) => b - a);
  } else {
    console.log("L'ordre doit être 'asc' ou 'desc'.");
    return null;
  }
}

const tableau = [5, 2, 9, 1, 5, 6];
console.log("Tableau trié en ordre croissant : " + tri(tableau, "asc"));
console.log("Tableau trié en ordre décroissant : " + tri(tableau, "desc")); 
