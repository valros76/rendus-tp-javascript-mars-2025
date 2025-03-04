const champSaisieTache = document.getElementById('champSaisieTache');
const boutonAjouterTache = document.getElementById('boutonAjouterTache');
const listeTaches = document.getElementById('listeTaches');

function chargerTaches() {
    const taches = JSON.parse(localStorage.getItem('taches')) || [];
    taches.forEach(tache => {
        creerElementTache(tache);
    });
}

function sauvegarderTaches() {
    const taches = [];
    document.querySelectorAll('.tache').forEach(elementTache => {
        const tache = {
            texte: elementTache.querySelector('.texte-tache').textContent,
            terminee: elementTache.querySelector('.case-checkbox').checked
        };
        taches.push(tache);
    });
    localStorage.setItem('taches', JSON.stringify(taches));
}

function creerElementTache(tache) {
    const elementTache = document.createElement('li');
    elementTache.classList.add('tache');

    const texteTache = document.createElement('span');
    texteTache.classList.add('texte-tache');
    texteTache.textContent = tache.texte;
    
    const caseCheckbox = document.createElement('input');
    caseCheckbox.type = 'checkbox';
    caseCheckbox.classList.add('case-checkbox');
    caseCheckbox.checked = tache.terminee;
    caseCheckbox.addEventListener('change', () => {
        sauvegarderTaches();
    });

    const boutonSupprimer = document.createElement('button');
    boutonSupprimer.textContent = 'Supprimer';
    boutonSupprimer.addEventListener('click', () => {
        elementTache.remove();
        sauvegarderTaches();
    });

    elementTache.appendChild(caseCheckbox);
    elementTache.appendChild(texteTache);
    elementTache.appendChild(boutonSupprimer);
    listeTaches.appendChild(elementTache);
}

boutonAjouterTache.addEventListener('click', () => {
    const texteTache = champSaisieTache.value.trim();
    if (texteTache) {
        const tache = {
            texte: texteTache,
            terminee: false
        };
        creerElementTache(tache);
        champSaisieTache.value = ''; 
        sauvegarderTaches();
    }
});

chargerTaches();
