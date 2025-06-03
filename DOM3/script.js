const contadorElemento = document.getElementById('contador');
const botaoDecrementar = document.getElementById('decrementar');
const botaoIncrementar = document.getElementById('incrementar');
const mudarCorBody = document.getElementById('cor');
const inputIdade = document.getElementById('idade');
const botaoCalcular = document.getElementById('calcular');
const resultadoTexto = document.getElementById('resultado');

let contador = 0;

function atualizarContador() {
    contadorElemento.textContent = contador;
    contadorElemento.style.color = contador < 0 ? "yellow" : "black";
    mudarCorBody.style.backgroundColor = contador < 0 ? "red" : "white";
}

botaoDecrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
});

botaoIncrementar.addEventListener('click', () => {
    contador++;
    atualizarContador();
});

function calcularDiasDeVida(idadeAnos) {
    if (isNaN(idadeAnos) || idadeAnos < 0) return "Idade inválida.";
    const diasPorAno = 365.25;
    const diasDeVida = Math.floor(idadeAnos * diasPorAno);
    return `Você viveu aproximadamente ${diasDeVida} dias.`;
}

botaoCalcular.addEventListener('click', () => {
    const idade = Number(inputIdade.value);
    const resultado = calcularDiasDeVida(idade);
    resultadoTexto.textContent = resultado;

    const numeroDias = resultado.match(/\d+/)?.[0];
    if (numeroDias) {
        contador = Number(numeroDias);
        atualizarContador();
    }
});

atualizarContador();