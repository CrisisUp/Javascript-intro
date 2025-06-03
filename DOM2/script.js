const contadorElemento = document.getElementById('contador');
const botaoDecrementar = document.getElementById('decrementar');
const botaoIncrementar = document.getElementById('incrementar');
const mudarCorBody = document.getElementById('cor');

let contador = 0;
function atualizarContador() {
    contadorElemento.textContent = contador;
    //if (contador > 9) {contador = 9;}
    contadorElemento.style.color = contador < 0 ? "yellow" : "black";
    mudarCorBody.style.backgroundColor = contador < 0 ? "red" : "white";
}

botaoDecrementar.addEventListener('click', () => {contador--; atualizarContador();});
botaoIncrementar.addEventListener('click', () => {contador++; atualizarContador();});

function calcularDiasDeVida(idadeAnos) {
  if (isNaN(idadeAnos) || idadeAnos < 0) {return "Idade inválida.";}
  const diasPorAno = 365.25; // Considerando anos bissextos
  const diasDeVida = Math.floor(idadeAnos * diasPorAno);
  return `Você viveu aproximadamente ${diasDeVida} dias.`;
}

const idadeUsuario = prompt("Digite sua idade em anos:");
const textoResultado = calcularDiasDeVida(Number(idadeUsuario));
alert(textoResultado);

const numeroDias = textoResultado.match(/\d+/); 
contador = Number(numeroDias); 
atualizarContador();