let carta1 = {
  nome: 'Bulbasauro',
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

let carta2 = {
  nome: 'Hulk',
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 1
  }
};

let carta3 = {
  nome: 'Homem Aranha',
  atributos: {
    ataque: 8,
    defesa: 8,
    magia: 5
  }
};

let cartas = [carta1, carta2, carta3];
let cartaMaquina = 0;
let cartaJogador = 0;

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina];
  // console.log(cartaMaquina);

  let numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById('btnSortear').disabled = true;
  document.getElementById('btnJogar').disabled = false;

  exibirOpcoes()
}

function exibirOpcoes() {
  let opcoes = document.getElementById('opcoes');
  let opcoesTexto = '';
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type="radio" name="atributo" value="${atributo}"/> ${atributo}`;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecinado() {
  let radioAtributos = document.getElementsByName('atributo');

  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecinado();
  let elementoResultado = document.getElementById('resultado');
  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = `Você venceu!`
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = `Você perdeu! :(`
  } else {
    elementoResultado.innerHTML = `Empatou!!`
  }
}