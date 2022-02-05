// codigo do ator
let yAtor = 366;
let xAtor = 100;
let yAtorInicial = 366;
let xAtorInicial = 100;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 5;
    if(yAtor < 4){
      yAtor = 4;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 5;
    if(yAtor > 366){
      yAtor = 366;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 5;
    if(xAtor < 4){
      xAtor = 4;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 5;
    if(xAtor > 466){
      xAtor = 466;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      colidiu.play();
      voltaParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
}

function voltaParaPosicaoInicial(){
  yAtor = yAtorInicial;
  xAtor = xAtorInicial;
}

function incluiPontos(){
  stroke(color(0, 255, 255));
  textAlign(CENTER);
  textSize(25);
  fill(color(0, 255, 255));
  //text(meusPontos, width / 5, 27);
  text(meusPontos, 150, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos++;
    pontos.play();
    voltaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}








