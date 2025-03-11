let listaDeAmigos = [];
let nomeAmigo;

function adicionarAmigo() {
    let inserirAmigo = document.getElementById('amigo'); 
    let nomeAmigo = inserirAmigo.value.trim(); 

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    listaDeAmigos.push(nomeAmigo); 
    inserirAmigo.value = ''; 

    atualizarLista();
}

function atualizarLista(){
    let atualizandoLista = document.getElementById('listaAmigos');
    atualizandoLista.innerHTML = listaDeAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}