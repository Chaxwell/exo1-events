const couleurs = [
    'red',
    'blue',
    'green',
    'rebeccapurple',
    'silver',
    'black',
    'lightgrey',
    'yellow',
    'orange'
];

function eventListener() {    
    for (let n = 0; n < couleurs.length; n++) {
        // S'il n'y a pas de couleur définie, on commence par la premire couleur du tableau
        if (this.style.backgroundColor == '') {
            this.style.backgroundColor = couleurs[0];
            this.innerHTML = `${couleurs[n]}`;
            break;; // Evite de boucler sur toutes les valeurs inutiles.
        }

        // Change la couleur actuelle, par la couleur suivante [Améliorable]
        if (this.style.backgroundColor == couleurs[n]) {
            this.style.backgroundColor = couleurs[n+1];
            this.innerHTML = `${couleurs[n+1]}`;

            // Reset couleurs
            if (n == couleurs.length - 1) {
                this.style.backgroundColor = couleurs[0];
                this.innerHTML = `${couleurs[0]}`;
            }

            break; // Permet de ne changer qu'une couleur à la fois.
        }

 
    }
}

document.querySelectorAll('td').forEach((element) => {
    element.addEventListener('click', eventListener);
});

