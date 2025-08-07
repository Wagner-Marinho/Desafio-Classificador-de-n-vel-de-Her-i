/* let vitorias = 10
let derrotas = 2
resultado = vitorias - derrotas

console.log("Herói venceu " + resultado) */

/* < 10 = Ferro
    11 e 20 = Bronze
    21 e 50 = Prata
    51 e 80 = Ouro
    81 e 90 = Diamante
    91 e 100 = Lendário
    >= 101 = Imortal

    O Herói tem de saldo de (Vitórias) vitórias e está no nível de (Ranker).
*/

let vitorias = 50 // Insira a quantidade de vitórias
let derrotas = 20  // Insira a quantidade de derrotas
let resultado = vitorias - derrotas

ranker(resultado)

function ranker(resultado) {
    if (resultado <= 10) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Ferro")
    } else if (resultado <= 20) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Bronze")
    } else if (resultado <= 50) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Prata")
    } else if (resultado <= 80) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Ouro")
    } else if (resultado <= 90) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Diamante")
    } else if (resultado <= 100) {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Lendário")
    } else {
        console.log("O Herói tem saldo de " + resultado + " vitórias e está no nível de Imortal")
    }
}