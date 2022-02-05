// codigo do carro

// variaveis em vetores
let xCarros = [430, 430, 430, 430, 430, 430];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [8, 4, 7, 5, 3, 1.6];
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function retornaPosicaoInicial(){
  for(i = 0; i < imagemCarros.length; i++){
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 500;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}