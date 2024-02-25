let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criaMosquitoTempo = 1500;

//opçoes de dificuldade do jogo
let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
}else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
}else if(nivel === 'chucknorris'){
    ///750
    criaMosquitoTempo = 500
}

//funçao para obter o tamanho da tela
function tamanhoDaTela(){
     altura = window.innerHeight;
     largura = window.innerWidth;
 
console.log(altura, largura);
}

tamanhoDaTela()
let cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//funçao para gerar a imagem em uma posiçao aleatoria na pagina
function posicaoRandomica(){
     //remover o mosquito
  if( document.getElementById('mosquito')){
            document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'

        }else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas ++
        }
  }
   //usando metodos math.random para gerar a posicao aleatoria e math.floor para arredondar o valor gerado
    let posicaoX = Math.floor(Math.random() * largura) -90;
    let posicaoY = Math.floor(Math.random() * altura) -90;

    //expressao para evitar q a imagem gerada nao saia fora das bordas do DOM
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY);

    //criando a imagem em posiçoes aleatorias na pagina
    let mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    } 

    document.body.appendChild(mosquito);
/*
    console.log(tamanhoAleatorio())
    console.log(ladoAleatorio())
*/
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'mosquito_1'
        case 1:
            return 'mosquito_2'
        case 2:
            return 'mosquito_3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}













