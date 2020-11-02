let canvas = document.getElementById('snake');
let context = canvas.getContext(
  '2d'
); /* Renderiza o desenho que vai acontecer dentro do canvas*/
let box = 32;

function criarBG() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box); /*Desenha o retangulo do jogo */
}
criarBG();
