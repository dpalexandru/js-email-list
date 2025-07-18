//Recupero elemnti dom
const emailContainer = document.getElementById('emailContainer')

//Ciclo for per genearare 10 email
for (i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
        const email = resp.data.response;
        emailContainer.innerHTML += `<li>${email}</li>`;
    })
}