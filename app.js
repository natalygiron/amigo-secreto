// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const secretList = [];

function agregarAmigo() {
    const friendName = document.getElementById('amigo');
    if (!friendName.value) {
        alert('Por favor, inserta un nombre.');
    } else {
        secretList.push(friendName.value);
        friendName.value = '';
        resetLista();
    }
}

function resetLista() {
    const nuevoAmigo = document.getElementById('listaAmigos');
    nuevoAmigo.innerHTML = '';
    for ( const item of secretList ) {
        nuevoAmigo.innerHTML += `<li>${item}</li>`;
    }
}

function sortearAmigo() {
    if ( secretList.length > 0) {
        const index = Math.floor(Math.random()*(secretList.length));
        console.log(index);
        document.getElementById('listaAmigos').innerHTML = secretList[index];
    }
}