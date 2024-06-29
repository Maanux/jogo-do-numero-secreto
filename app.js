let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 e 10");

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value); // Converter para número

  if (numeroSecreto === chute) {
    exibirTextoNaTela("h1", "Acertouuu!!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativa = ` Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela("p", mensagemTentativa);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    exibirTextoNaTela("h1", "Errouu!");

    if (chute < numeroSecreto) {
      exibirTextoNaTela("p", "O número secreto é maior que o seu chute.");
    } else {
      exibirTextoNaTela("p", "O número secreto é menor que o seu chute.");
    }
    tentativas++;
    alert("Tente novamente!");
  }
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = Math.floor(Math.random() * (numeroLimite - 0) + 0);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

console.log(numeroSecreto);
exibirTextoNaTela("h1", "Errouu!");
exibirTextoNaTela("p", "Voce eerou o numero secreto");
alert("Tente novamente");

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reinicarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
