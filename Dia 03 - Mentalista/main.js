let numeroSecreto = parseInt(Math.random() * 11);


function Chutar() {
  let resultado = document.getElementById('resultado');
  let mostrarChute = parseInt(document.getElementById('valor').value);
  console.log(mostrarChute);

  if (mostrarChute === numeroSecreto) {
    resultado.innerText = 'Chutou certo, parabéns'
  } else if(mostrarChute > 10 || mostrarChute < 0) {
    resultado.innerText = 'Chute muito longe do esperado, entre com um numero de 0 a 10'
  } else if (mostrarChute < numeroSecreto) {
    resultado.innerText = 'Chute baixo demais, tenta de novo..'
  }
}