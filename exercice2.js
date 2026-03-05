
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {

  let valeur = valeurs[i];
  let texte = String(valeur);

  if (valeur === "") {
    texte = "(chaine vide)";
  }


  if (valeur) {
    console.log(texte + " -> truthy");
  } else {
    console.log(texte + " -> falsy");
  }

}