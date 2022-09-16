let carta1 = {
  nome: 'Bulbasauro',
  imagem: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  atributos: {
    ataque: 7,
    defesa: 8,
    magia: 6
  }
};

let carta2 = {
  nome: 'Hulk',
  imagem: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/10/hulk-1200x900-1.jpg',
  atributos: {
    ataque: 10,
    defesa: 8,
    magia: 1
  }
};

let carta3 = {
  nome: 'Homem Aranha',
  imagem: 'https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2021/11/homem-aranha-multiverso-resumo.jpg?fit=1280%2C720&ssl=1',
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

  // exibirOpcoes()
  exibirCartaJogador();
}

// function exibirOpcoes() {
//   let opcoes = document.getElementById('opcoes');
//   let opcoesTexto = '';
//   for (let atributo in cartaJogador.atributos) {
//     opcoesTexto += `<input type="radio" name="atributo" value="${atributo}"/> ${atributo}`;
//   }
//   opcoes.innerHTML = opcoesTexto;
// }

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

  document.getElementById('btnJogar').disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById('carta-jogador')
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">`;

  let tagHtml = `<div id="opcoes" class="carta-status">`

  let opcoesTexto = '';
  for (let atributo in cartaJogador.atributos) {
    opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ${atributo} ${cartaJogador.atributos[atributo]} </br>`;
  }

  let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = `${moldura} ${nome} ${tagHtml} ${opcoesTexto} </div>`;
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById('carta-maquina')
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">`;

  let tagHtml = `<div id="opcoes" class="carta-status">`

  let opcoesTexto = '';
  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto += `<p type='text' name='atributo' value='${atributo}'> ${atributo} ${cartaMaquina.atributos[atributo]}</p>`;
  }

  let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = `${moldura} ${nome} ${tagHtml} ${opcoesTexto} </div>`;
}
