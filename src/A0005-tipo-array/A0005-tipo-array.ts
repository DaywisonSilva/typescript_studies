// Array<T> - T[]

function multiplicaArgs(...args: number[]): number {
    return args.reduce((ac, valor) => ac * valor, 1)
}

function concatenaString(...args: Array<string>): string {
    return args.reduce((ac, valor) => ac + valor)
}

function toUpperCase(...args: Array<string>): string[] {
    return args.map(valor => valor.toUpperCase())
}

console.log(multiplicaArgs(1, 2, 3))
console.log(concatenaString('daywison', 'silva'))
console.log(toUpperCase('daywison', 'silva'))
