const dados = require('./dados.json');
/*
Questão 1.
*/

function exibeValorDeSoma(indice, soma, k) {

  while(k < indice) {
    k = k + 1;
    soma = soma + k
  }
  return console.log(soma);
}

exibeValorDeSoma(13, 0, 0)

/*
Questão 2.
*/

function isFibonacci(num, a = 0, b = 1) {
  if (num === a || num === b) {
    return true;
  }
  if (b > num) {
    return false;
  }
  return isFibonacci(num, b, a + b);
}

function verificaFibonacci(numero) {
  if (numero < 0) {
    return "Número inválido. Por favor, informe um número maior ou igual a zero.";
  }

  const pertence = isFibonacci(numero);
  return `O número ${numero} ${pertence ? "pertence" : "não pertence"} à sequência de Fibonacci.`;
}

console.log(verificaFibonacci(14));

/*
Questão 3.
*/

function verificaFaturamento(dados) {
  let menor = null;
  let maior = null;
  let soma = 0;
  let diasComFaturamento = 0;
  let diasAcimaDaMedia = 0;

  for(let i = 0; i < dados.length; i++) {
    const valor = dados[i].valor;

    if(valor > 0) {
      if(menor == null || valor < menor) {
        menor = valor;
      }
      if(maior == null || valor > maior) {
        maior = valor;
      }
      soma += valor;
      diasComFaturamento++;
    }
  }

  const media = soma / diasComFaturamento;

  for(let i = 0; i < dados.length; i++) {
    const valor = dados[i].valor;
    if(valor > media) {
      diasAcimaDaMedia++
    }
  }
  console.log(menor.toFixed(2));
  return console.log(`Menor valor de faturamento em um dia: ${menor} - Maior valor de faturamento em um dia: ${maior} - Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`)
}

verificaFaturamento(dados);

/*
Questão 4.
*/

const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};


function calculaPercentual(faturamento) {
  let total = 0;
  for(let estado in faturamento) {
    total += faturamento[estado];
  }
  const listagem = [];

  for(let estado in faturamento) {
    const valor = faturamento[estado];
    const percentual = (valor / total) * 100;
    listagem.push({
      [estado]: percentual.toFixed(2)
    })
  }
  console.log(listagem);
}

calculaPercentual(faturamento)


function inverteTexto(texto) {
  let textoInvertido = "";

  for(let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i]
  }

  return console.log(textoInvertido);
}

inverteTexto("Olá Mundo")