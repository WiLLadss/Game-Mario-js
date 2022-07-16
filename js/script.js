
const mario = document.querySelector('.mario');

const tubo = document.querySelector('.tubo');

const p = document.getElementById("contadorPontos");

const gameOver = document.querySelector('.game-over-fase1');

const morrer = new Audio();
morrer.src = './audios/Som do Mario Morrendo - Efeito Sonoro HD.mp3'

let contador = 0;

p.innerHTML = contador;

const jump = () => {
    mario.classList.add('jump');

}
setInterval(()=>{
    mario.classList.remove('jump');
},500)

const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if(tuboPosition <= 85 && tuboPosition > 0 && marioPosition < 90){
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src="./img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft ='50px'
        gameOver.classList.add('game-over-fase2');
        morrer.play(1);
        clearInterval(loop);
        
       
        

    }else{ 
        
        contador++;

        p.innerHTML = contador;

    }


},10)

document.addEventListener('keydown', jump);

var btn = document.querySelector("reloadPag");
btn.addEventListener("click", function() {
    
    location.reload();
});




