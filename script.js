let canvas = document.getElementById('snake');
let context = canvas.getContext(
  '2d'
); /* Renderiza o desenho que vai acontecer dentro do canvas*/
let box = 32;

let snake = [];

snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = 'right';

let comida = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBG() {
  context.fillStyle = 'lightgreen';
  context.fillRect(0, 0, 16 * box, 16 * box); /*Desenha o retangulo do jogo */
}
/* Criando cobrinha */

function criarCobrinha() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = 'green';
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

/* Criar comida */
function drawComida() {
  context.fillStyle = 'red';
  context.fillRect(comida.x, comida.y, box, box);
}

/*Eventos para reconhecer as teclas */

document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode == 37 && direction != 'right') {
    direction =
      'left'; /* Esse if serve para que o usuario não clique na direção 
      oposta do movimento atual da cobra, se ela ta indo para a esquerda, 
      não pode clicar para a direita */
  }
  if (event.keyCode == 38 && direction != 'down') direction = 'up';
  if (event.keyCode == 39 && direction != 'left') direction = 'right';
  if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

/*função de tempo para iniciar jogo */

function iniciarJogo() {
  /* Permitir que a cobra apareça do outro lado da tela */
  if (snake[0].x > 15 * box && direction == 'right') snake[0].x = 0;
  if (snake[0].x < 0 * box && direction == 'left') snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction == 'down') snake[0].y = 0;
  if (snake[0].y < 0 * box && direction == 'up') snake[0].y = 16 * box;

  /* For para comparar se a cabeça se choca com o corpo e finaliza o jogo */
  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert('Game Over');
    }
  } /* For para comparar se a cabeça se choca com o corpo e finaliza o jogo */
  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert('Game Over');
    }
  }

  criarBG();
  criarCobrinha();
  drawComida();

  let snakex = snake[0].x;
  let snakey = snake[0].y;

  /*Direções da cobrinha */

  if (direction == 'right') snakex += box;
  if (direction == 'left') snakex -= box;

  if (direction == 'up') snakey -= box;
  if (direction == 'down') snakey += box;

  /* Fazer a cobra crescer ao pegar comida */

  if (snakex != comida.x || snakey != comida.y) {
    snake.pop(); /*Retira o ultimo array, dando a impressão que esta movimentando */
  } else {
    (comida.x = Math.floor(Math.random() * 15 + 1) * box),
      (comida.y = Math.floor(Math.random() * 15 + 1) * box);
  }

  let newHead = {
    x: snakex,
    y: snakey,
  };
  snake.unshift(newHead);
}

let jogo = setInterval(
  iniciarJogo,
  100
); /* A cada 100ms vai ser chamado a função iniciar jogo, 
para que ele não pare */
