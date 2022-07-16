const p = document.getElementById("contadorPontos");
const botao = document.getElementById("botao");
console.log(p);


let contador = 0;

p.innerHTML = contador;

botao.addEventListener('click', function(){
    contador++;

    p.innerHTML = contador;
});
