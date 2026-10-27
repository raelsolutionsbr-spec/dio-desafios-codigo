// ============================================================================
// Desafio DIO: Maior Número Par e Menor Número Ímpar
// Linguagem: JavaScript
//
// Enunciado:
//   Faça um programa que receba N (quantidade de números) e seus respectivos
//   valores. Imprima o maior número par e o menor número ímpar.
//
// Regras:
//   - Lê N números da entrada
//   - Identifica qual é o MAIOR entre os números PARES
//   - Identifica qual é o MENOR entre os números ÍMPARES
//   - Imprime os dois resultados no formato exato exigido
//
// Exemplo de Entrada:   Exemplo de Saída:
//   5                     Maior número par: 10
//   3                     Menor número impar: 1
//   4
//   1
//   10
//   8
// ============================================================================

// 1. Lê a quantidade de números que vão entrar
const N = gets();

// 2. Variáveis de resultado:
//    maiorNumeroPar começa em 0 (nenhum par encontrado ainda)
//    menorNumeroImpar começa em Infinity (qualquer ímpar será menor que infinito)
let maiorNumeroPar = 0;
let menorNumeroImpar = Infinity;

// 3. Laço que repete N vezes, lendo um número por vez
for (let i = 0; i < N; i++) {
  const numero = parseInt(gets()); // Converte a entrada para número inteiro

  // 4. Usa === (igualdade estrita) para verificar se o número é PAR
  //    (resto da divisão por 2 é exatamente zero)
  if (numero % 2 === 0) {
    // É PAR: atualiza se for maior que o maior par encontrado até agora
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    // É ÍMPAR: se não é par, só pode ser ímpar (por isso usamos else)
    // Atualiza se for menor que o menor ímpar encontrado até agora
    if (numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

// 5. Imprime os resultados no formato EXATO exigido pelo desafio
//    ATENÇÃO: a DIO compara letra por letra — "impar" sem acento é intencional!
print("Maior número par: " + maiorNumeroPar);
print("Menor número impar: " + menorNumeroImpar);
