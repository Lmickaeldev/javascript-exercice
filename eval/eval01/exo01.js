// Variables pour stocker les comptages
let dessous20 = 0;
let entre20et40 = 0;
let dessus40 = 0;

// Boucle pour demander les âges successifs
while (true) {
    // Saisie de l'âge
    var age = parseInt(prompt("Entrez l'âge :"));
    // Vérification de l'âge
    if (age < 20) {
        dessous20++;
    } else if (age >= 20 && age <= 40) {
        entre20et40++;
    } else if (age > 40) {
        dessus40++;
    }
    // Condition d'arrêt
    if (age >= 100) {
        break;
    }
}

// Affichage des résultats
document.write("Nombre de personnes d'ages  inférieur a 20 ans : " + dessous20+"<br>");
document.write("Nombre de personnes d'ages compris entre 20 ans et 40 ans : " + entre20et40+"<br>");
document.write("Nombre de personnes d'ages supérieur a 40 ans : " + dessus40);

