let paulo = {
  nome: 'Paulo', vitorias: 3, empates: 1, pontos: 5
};

let gui = {
  nome: 'Gui', vitorias: 2, empates: 2, pontos: 4
};

let rafa = {
  nome: 'Rafa', vitorias: 1, empates: 4, pontos: 3
};

rafa.pontos = calculaPontos(rafa);
gui.pontos = calculaPontos(gui);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

console.log(rafa);
console.log(gui);
console.log(paulo);

let jogadores = [rafa, paulo, gui]

function exibeJogadoresNaTela(jogadores) {
  let elemento = '';
  
}