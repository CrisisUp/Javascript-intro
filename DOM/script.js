const contadorElemento = document.getElementById('contador');
const botaoDecrementar = document.getElementById('decrementar');
const botaoIncrementar = document.getElementById('incrementar');
const centralizarDiv = document.getElementById('centralizar');
const centralizarH1 = document.getElementsByTagName('h1')[0];
const mudarCor = document.getElementById('cor');

let contador = 0;
let tamanhoFonte = 16;

function centralizar() {
    if (centralizarDiv){
    centralizarDiv.style.display = 'flex';
    centralizarDiv.style.justifyContent = 'center';
    centralizarDiv.style.alignItems = 'center';
    };
     if (centralizarH1) {
        centralizarH1.style.display = 'flex';
        centralizarH1.style.justifyContent = 'center';
        centralizarH1.style.alignItems = 'center';
    }
}

function atualizarContador() {
    contadorElemento.textContent = contador;
    tamanhoFonte = Math.max(16, 16 + contador * 2); 
    mudarCor.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    contadorElemento.style.fontSize = `${tamanhoFonte}px`;
    contadorElemento.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

botaoDecrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
});

botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

centralizar();
atualizarContador(); 