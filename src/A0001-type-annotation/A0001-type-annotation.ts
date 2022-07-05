import { Pessoa } from './types'

/* eslint-disable */
const nome: string = 'daywison'
const idade: number = 22
const adulto: boolean = true
const simbolo: symbol = Symbol('qualquer-symbol')
// const big: bigint = 10n // bigint

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3]
const arrayDeNumeros2: number[] = [1, 2, 3]
const arrayDeStrings: Array<string> = ['1', '2', '3']
const arrayDeStrings2: string[] = ['1', '2', '3']

// Objetos
const pessoa: Pessoa = {
    nome: 'Daywison',
    idade: 21,
    adulto: true
}

// Funções
function soma(x: number, y: number) {
    return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y

;[1, 2, 3].forEach((element: number) => {
    console.log(element)
})

console.log(soma2(1, 2))
