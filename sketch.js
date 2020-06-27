function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
  // createCanvas(windowWidth, windowHeight);
  // console.log('Hello');
  // createCanvas(windowWidth, windowHeight); //  createCanvas(590, 450);
  
  windowResized();
  frameRate(40)
// somDoJogo.play();  
  // somDoJogo.loop();  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial // () => console.log('Tela inicial')
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
   jogo.keyPressed(key);
}

function draw() {
  // jogo.draw();
  // if(cenaAtual === 'jogo'){
  //   jogo.draw()
  // }
  cenas[cenaAtual].draw()
 }