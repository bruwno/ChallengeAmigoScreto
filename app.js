//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function validarEntrada(nome) {
    return (nome.length) === 0 ? "" : nome;
}

function adicionarAmigo() {
    let campoNomeAmigo = document.getElementById("amigo");
    let nomeAmigo = validarEntrada(campoNomeAmigo).value;

    if (nomeAmigo !== "") {
        adicionarNaLista(nomeAmigo);
        campoNomeAmigo.value = "";
    } else {
        alert("Informe um nome válido!");
    }
}

function adicionarNaLista(nome) { 
    listaAmigos.push(nome);
}