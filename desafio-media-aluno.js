// ============================================================================
// Desafio de Código DIO: Cálculo de Média Escolar
// Linguagem: JavaScript
//
// Enunciado:
//   Faça um programa que receba a média de um aluno e imprima o seguinte:
//     - Caso a média seja < 5         -> imprima "REP" (Reprovado)
//     - Caso a média seja >= 5 e < 7  -> imprima "REC" (Recuperação)
//     - Caso a média seja >= 7        -> imprima "APR" (Aprovado)
// ============================================================================

// 1. Lê a média enviada pelo sistema da DIO
let media = gets();

// 2. Condição 1: Aluno reprovado
if (media < 5) {
    print('REP');
} 
// 3. Condição 2: Aluno em recuperação (usando o operador lógico &&)
else if (media >= 5 && media < 7) {
    print('REC');
} 
// 4. Condição 3: Aluno aprovado (qualquer nota igual ou superior a 7)
else {
    print('APR');
}
