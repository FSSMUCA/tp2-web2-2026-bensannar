let nom = "   salma  "
let age = "20"
let email = "salmabensannar@email.com"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

console.log("===== RAPPORT UTILISATEUR =====")
let nomCorrige = nom.trim()
if (nomCorrige === "") {
  nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

let ageNombre = parseInt(age)

if (Number.isNaN(ageNombre) || ageNombre <= 0) {
  console.log("age              : valeur invalide")
} else {
  console.log("age              :", ageNombre, "(valide)")
}


let positionAt = email.indexOf("@")
let emailValide = false

if (positionAt !== -1 && email.indexOf(".", positionAt) !== -1) {
  emailValide = true
}

if (emailValide) {
  console.log('email            : "' + email + '" (valide)')
} else {
  console.log('email            : "' + email + '" (invalide : pas de point après @)')
}


let score = parseInt(scoreJeu)

if (Number.isNaN(score)) {
  score = 0
}

console.log('scoreJeu         :', score, '(extrait depuis "' + scoreJeu + '")')

let adminBool = estAdmin === "true"

console.log("estAdmin         :", adminBool, '(attention : Boolean("false") = true, conversion manuelle requise)')
let connexion = derniereConnexion ?? "Jamais connecté"

console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)')

let connexions = Number(nombreConnexions)

if (connexions === 0) {
  console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
  console.log("nombreConnexions :", connexions)
}

console.log("================================")