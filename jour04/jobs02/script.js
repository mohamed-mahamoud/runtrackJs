function jsonValueKey(json, key){
    const object = JSON.parse(json);
    return object[key];
}

// Exemples de test :
const jsonStr = '{"name":"Elio","age":25}';
console.log(jsonValueKey(jsonStr, "name")); // Affiche : Elio
console.log(jsonValueKey(jsonStr, "age"));  // Affiche : 25