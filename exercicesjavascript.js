// Exercice01
// var toto = 'Bonjour';
// alert(toto);

// Exercice02
// var nom = "Doe";
// var prenom = "John";
// var ville = "New York";

// alert('Nom : '+nom+'\nPrénom : '+prenom+'\nVille : '+ville);

// Exercice03
// var rep = prompt('Quel est votre prénom?','Votre réponse ici');
// if (rep == null) {
// 	alert('Vous avez tapé sur Annuler');
// } else {
// 	alert('Bonjour '+rep);
// }

// Exercice04
// var nom = prompt('Quel est votre nom?','Votre réponse ici');
// var prenom = prompt('Quel est votre prénom?','Votre réponse ici');
// var ville = prompt('Quel est votre ville?','Votre réponse ici');


// if (nom == null) {
// 	alert('Vous avez tapé sur Annuler');
// } else {

// 	if (prenom == null) {
// 		alert('Vous avez tapé sur Annuler');
//  	} else {
 		
//  		if (ville == null) {
//  			alert('Vous avez tapé sur Annuler');	
//  		} else {
//  			alert('Nom : '+nom+'\nPrénom : '+prenom+'\nVille : '+ville);
//  		}
//  	}
// }

function showAlert (){
	var valid = document.getElementById('valider').value;
	var nom1 = document.getElementById('nom').value;
	var prenom1 = document.getElementById('prenom').value;
	var ville1 = document.getElementById('ville').value;

	alert('Nom : '+nom1+'\nPrénom : '+prenom1+'\nVille : '+ville1);
}
