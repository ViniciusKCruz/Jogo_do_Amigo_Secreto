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

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        adicionarAmigo();
    } else { 
        let sorteandoAmigo = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado;
        amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = listaDeAmigos[sorteandoAmigo]; 
    }
}