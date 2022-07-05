/* eslint-disable no-unused-vars */
// enum Numérico

enum Cores {
    VERMELHO = 1,
    AZUL = 2,
    AMARELO = 3
}

// enum String

enum DiaDaSemana {
    SEGUNDA = 'Segunda-feira',
    TERÇA = 'Terça-feira',
    QUARTA = 'Quarta-feira'
}

function escolhaAcor(cor: Cores): void {
    console.log(Cores[cor])
}

console.log(Cores)
console.log(DiaDaSemana)
console.log(escolhaAcor(Cores.AMARELO))

export default {}
