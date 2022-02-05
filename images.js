// imagens e sons do jogo

// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let trilha;
let colidiu;
let pontos;

function preload(){
  imagemDaEstrada = loadImage("images/estrada.png");
  imagemDoAtor = loadImage("images/ator-1.png");
  imagemCarro = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  trilha = loadSound("sounds/trilha.mp3");
  colidiu = loadSound("sounds/colidiu.mp3");
  pontos = loadSound("sounds/pontos.wav");
}