const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const buttonDraw = document.querySelector('.button-draw');
let amigos = [];
let amigosDisponiveis = []; // Lista de amigos disponíveis para sorteio

function adicionarAmigo() {
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
        inputAmigo.value = "";
        return;
    }

    amigos.push(nomeAmigo);
    amigosDisponiveis.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = "";
}

function atualizarListaAmigos() {
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function limparTela() {
    amigos = [];
    amigosDisponiveis = [];
    listaAmigos.innerHTML = ''; 
    resultado.innerHTML = ''; 
    inputAmigo.disabled = false; 
    buttonDraw.disabled = false; 
    const addbutton = document.querySelector('.button-add');
    addbutton.disabled = false; 
    let limpar = document.querySelector('#semNomes');
    limpar.innerHTML = '';
}

function sortearAmigo() {
    if (amigosDisponiveis.length === 0) {
        let semNome = document.querySelector('#semNomes');
        semNome.innerHTML = 'Todos os nomes adicionados já foram sorteados pelo menos uma vez, adicione mais nomes ou zere a lista atual!';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
    const amigoSorteado = amigosDisponiveis[indiceSorteado];

    resultado.innerHTML = "";

    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}`;
    resultado.appendChild(li);

    amigosDisponiveis.splice(indiceSorteado, 1);

    buttonDraw.disabled = false;
}

inputAmigo.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        adicionarAmigo();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) { 
        buttonDraw.click(); 
    }
});