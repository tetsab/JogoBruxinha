function preload(){
  imagemCenario       = loadImage('/imagens/cenario/floresta.png');
  imagemGameOver      = loadImage('/imagens/assets/game-over.png');  
  imagemPersonagem    = loadImage('/imagens/personagem/correndo.png');  
   imagemInimigo      = loadImage('/imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('/imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('/imagens/inimigos/troll.png');  
  imagemTelaInicial   = loadImage('/imagens/cenario/telaInicial.png');
  imagemVida          = loadImage('/imagens/assets/coracao.png');

  fita                = loadJSON('/fita/fita.json');

  fonteTelaInicial    = loadFont('/imagens/assets/fonteTelaInicial.otf');

  somDoJogo = loadSound('/sons/trilha_jogo.mp3');
  somDoPulo = loadSound('/sons/somPulo.mp3');
  
}