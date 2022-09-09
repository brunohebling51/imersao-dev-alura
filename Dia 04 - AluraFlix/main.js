// let listaFilmes = ['Eu sou a lenda', 'Vingadores', 'Vizinhos', 'Vingadores Guerra-Infinita']


// document.write(`<p>O meu filme preferido é ${listaFilmes[0]} do famoso Will Smith.</p>`);
// document.write(`<p>O meu filme preferido é ${listaFilmes[1]}.</p>`);
// document.write(`<p>O meu filme preferido é ${listaFilmes[2]} da franquia brasileira com Leandro Hassum.</p>`);

// for (let indice = 0; indice < 4; indice++) {
//   document.write(`<p> ${listaFilmes[indice]} </p>`);
// }

// let listaFilmes = ['Eu sou a lenda', 'Vingadores', 'Vizinhos', 'Vingadores Guerra-Infinita']

// for (let indice = 0; indice < listaFilmes.length; indice++) {
//   document.write(`<p> ${listaFilmes[indice]} </p>`);
// }


let listaFilmes = ['https://s1.static.brasilescola.uol.com.br/be/conteudo/images/o-filme-eu-sou-lenda-pode-ser-usado-nas-aulas-biologia-por-abordar-temas-como-doencas-virais-imunizacao-5bcf030bce2eb.jpg', 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg', 'https://lumiere-a.akamaihd.net/v1/images/unnamed_10_2a3389cf.jpeg?region=0%2C0%2C356%2C512', 'https://br.web.img3.acsta.net/pictures/22/08/26/16/46/2639434.jpg']

for (let i = 0; i < listaFilmes.length; i++) {
  document.write(`<img src="${listaFilmes[i]}">`)
}