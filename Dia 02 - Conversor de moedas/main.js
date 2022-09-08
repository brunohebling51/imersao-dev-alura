function Converter() {
  let valorElemento = document.getElementById('valor');
  let valor = valorElemento.value;
  let valorDolar = parseFloat(valor);
  let valorEmReal = valorDolar * 5;
  let elementoValorConvertido = document.getElementById('valorConvertido');
  let valorConvertido = 'O resultado em real é R$ ' + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;

  console.log(valorEmReal);
}
