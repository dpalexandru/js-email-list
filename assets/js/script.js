//Recupero elemnti dom
const emailContainer = document.getElementById('emailContainer')
const genera = document.getElementById('genera');

//Funzione con Ciclo for per svuotare genearare 10 email
const generateEmails = () => {
    emailContainer.innerHTML = '';

    for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
            const email = resp.data.response;
            emailContainer.innerHTML += `<li>${email}</li>`;
        })
    }
};
//CHiamo la funzione quando si carica la pagina
generateEmails();

//Button che chiama la funzione di nuovo

genera.addEventListener('click', generateEmails)