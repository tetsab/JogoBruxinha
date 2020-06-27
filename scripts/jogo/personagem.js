class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
  {  
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.variacaoY = variacaoY
    // y = persY
    this.yInicial = height - this.altura - 30 // 450 - 135 = 315 
    this.y = this.yInicial
    this.velocidadeDoPulo = 0
    this.gravidade = 6
    this.alturaDoPulo = -50
    this.pulos = 0
    this.invencivel = false
  }
  
  pula(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
    // this.velocidadeDoPulo = this.alturaDoPulo
  }

  aplicaGravidade(){
     this.y = this.y + this.velocidadeDoPulo
     this.velocidadeDoPulo += this.gravidade
    
    if(this.y > this.yInicial){
         this.y = this.yInicial
         this.pulos = 0
       }
  }

  tornarInvencivel(){
    this.invencivel = true
    setTimeout(()=>{
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo){
    if(this.invencivel){
      return false
    }
    const precisao = 0.9

    // noFill()
    // rect(this.x, 
    //      this.y,
    //      this.largura * precisao, 
    //      this.altura * precisao)
    // rect(
    //  inimigo.x,
    //  inimigo.y,
    //  inimigo.largura * precisao,
    //  inimigo.altura * precisao
    //)
    
    const colisao = collideRectRect(
      this.x, 
      this.y,
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
      
    );
    
    return colisao
  }
  
} 