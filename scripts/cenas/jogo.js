class Jogo{
  constructor(){ // delay x controle (map). delay for infinite setup
    this.indice = 0;
    this.mapa = fita.mapa
  }
  setup(){
    cenario   = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao()
    vida      = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
    
    personagem    = new Personagem(matrizPersonagem, imagemPersonagem, 220, 30, 110, 135, 220, 270);
    const inimigo       = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
    
    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }
  keyPressed(key) {
    if(key == 'ArrowUp'){
      personagem.pula()
      somDoPulo.play()
   }
  }

  draw(){
  // background(imagemCenario);
  // circle(mouseX, mouseY, 200);
  // circle(200,200,200);
  // console.log('Test');
  cenario.exibe();
  cenario.move();
  
  vida.draw()
  pontuacao.exibe()
  pontuacao.adicionarPonto()
  personagem.exibe();
  personagem.aplicaGravidade();
  
// codigo simplificado abaixo
  // inimigoVoador.exibe();
  // inimigoVoador.move(); 
  // inimigoGrande.exibe();
  // inimigoGrande.move(); 
  // inimigo.exibe();
  // inimigo.move(); 
  const linhaAtual = this.mapa[this.indice]
  const inimigo = inimigos[linhaAtual.inimigo];
  const inimigoVisivel = inimigo.x < -inimigo.largura;

  inimigo.velocidade = linhaAtual.velocidade

  // inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()
    
    if(inimigoVisivel) { // se implementar outros itens, mudar nome variavel
      // this.inimigoAtual++;
      // if(this.inimigoAtual > 2){
      //   this.inimigoAtual = 0;
      this.indice++;
      inimigo.aparece()
      if(this.indice > this.mapa.length - 1){
        this.indice = 0
      }      
      // inimigo.velocidade = parseInt(random(5,40));
    }

    if(personagem.estaColidindo(inimigo)){
      // console.log('colidiu');
      // vida.perdeVida()
      // personagem.tornarInvencivel()
      // console.log(vida)
      // if(vida.vidas === 1){ 
      //  image(imagemGameOver, width/2 - 200, height/3)  
      //  noLoop()            
      // }

      vida.perdeVida()
      personagem.tornarInvencivel()  
      
      if(vida.vidas === 0){
        vida.perdeVida()

        setInterval(() =>{
          image(imagemGameOver, width/2 - 200, height/3)
          noLoop()  
        }, 100)        
      }
   }
  // })
  }
}