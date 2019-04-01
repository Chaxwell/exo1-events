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
        if (this.style.backgroundColor == '') {
            this.style.backgroundColor = 'red';
            break;
        }

        if (this.style.backgroundColor == couleurs[n]) {
            this.style.backgroundColor = couleurs[n+1];
            break;
        }
    }
}

document.querySelectorAll('td').forEach((element) => {
    element.addEventListener('click', eventListener);
});

