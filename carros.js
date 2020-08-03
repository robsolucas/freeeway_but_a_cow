//codigo dos carros

//carro 1

let xCarro1 = 520;
let yCarro1 = 40;
let velCarro1 = 3;

function mostraCarro1(imagem, x, y) {
  image(imagem, x, y, 60, 40);
}

function movCarro1() {
  xCarro1 -= velCarro1;

  if (xCarro1 < -60) {
    xCarro1 = 660;
  }
}

//carro 2
let xCarro2 = 550;
let yCarro2 = yCarro1 + 57;
let velCarro2 = 4;

function mostraCarro2(imagem, x, y) {
  image(imagem, x, y, 60, 40);
}

function movCarro2() {
  xCarro2 -= velCarro2;

  if (xCarro2 < -120) {
    xCarro2 = 660;
  }
}

//carro 3
let xCarro3 = 590;
let yCarro3 = yCarro2 + 57;
let velCarro3 = 6;

function mostraCarro3(imagem, x, y) {
  image(imagem, x, y, 60, 40);
}

function movCarro3() {
  let safeDist1 = xCarro3 - xCarro3_2;
  let safeDist2 = xCarro3 - xCarro2;

  xCarro3 -= velCarro3;

  if (safeDist1 < 80 && safeDist1 > 60) {
    xCarro3 += 1;
    if (safeDist2 < -80 || safeDist2 > 180) {
      yCarro3 -= 4;
      if (yCarro3 < 97) {
        yCarro3 += 4;
      }
    }
  }
  
if (xCarro3 < -60) {
  if (xCarro3_2 > 600) {}
  if (xCarro2 > 600) {}
  else {
    xCarro3 = 741;
    yCarro3 = yCarro2 + 57;
  }
}

}
//carro4
let xCarro3_2 = 720;
let yCarro3_2 = yCarro2 + 57;
let velCarro3_2 = 5;
function mostraCarro3_2(imagem, x, y) {
  image(imagem, x, y, 60, 40);
}

function movCarro3_2() {

  xCarro3_2 -= velCarro3_2;

  if (xCarro3_2 < -120) {
    xCarro3_2 = 660;
  }
}