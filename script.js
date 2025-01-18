// Sélectionner le formulaire et ajouter un écouteur d'événements
const form = document.querySelector('form');

form.addEventListener(submit, function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupérer les données du formulaire
    const name = form.querySelector(input[type="text"]).value;
    const email = form.querySelector(input[type="email"]).value;
    const message = form.querySelector(textarea).value;

    // Afficher un message de confirmation
    alert(Merci ${name} ! Votre message a été envoyé avec succès.);
    
    // Réinitialiser le formulaire
    form.reset();
});

// Animation simple pour les compétences
const skillBars = document.querySelectorAll('.skills .skill');

skillBars.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = #00d8ff;
        skill.style.color = #fff;
        skill.style.transition = 0.3s ease;
    });

    skill.addEventListener(mouseout, () => {
        skill.style.backgroundColor = #fff;
        skill.style.color = #333;
    });
})