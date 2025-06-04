let listaDeNumerosSorteados = [];
let limiteTentativa = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        limparCampo();
        exibirTextoNaTela('h1', 'acertou')
        document.getElementById('reiniciar').removeAttribute('disabled');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let mensagemTentativas = `Você descobriu o número secreto com
         ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagemTentativas);
    } else{
        if (chute > numeroSecreto) {
            limparCampo();
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            limparCampo();
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas ++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteTentativa + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == 2) {
        listaDeNumerosSorteados = [];
    }    

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


