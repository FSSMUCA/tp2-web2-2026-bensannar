let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let variables = [
  ["nom", nom],
  ["age", age],
  ["ville", ville],
  ["score", score],
  ["actif", actif]
]

console.log("Partie A — opérateur ??")

for (let [nomVar, valeur] of variables) {
  console.log(nomVar + " ?? \"valeur par défaut\" ->", valeur ?? "valeur par défaut")
}

console.log("\nPartie B — opérateur ||")

for (let [nomVar, valeur] of variables) {
  console.log(nomVar + " || \"valeur par défaut\" ->", valeur || "valeur par défaut")
}

console.log("\nPartie C — comparaison")

for (let [nomVar, valeur] of variables) {

  let resNullish = valeur ?? "valeur par défaut"
  let resOr = valeur || "valeur par défaut"

  if (resNullish === resOr) {
    console.log(nomVar + " : ?? et || -> même résultat")
  } else {
    console.log(nomVar + " : ?? et || -> résultat différent")
  }

}