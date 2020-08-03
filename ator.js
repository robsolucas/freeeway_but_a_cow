let xAtor = 100;
let yAtor = 366;

function mostraAtor(imagem, x, y) {
  image(imagem, x, y, 30, 30);
}

function movAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 5
  }

  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 5
  }

}