const dadosCliente1: readonly [number, string] = [1, 'Daywison']
const dadosCliente2: [number, string, string?] = [1, 'Daywison']
const dadosCliente3: [number, string, ...string[]] = [
    1,
    'Daywison',
    'Silva',
    'Sousa'
]

// posso mudar o valor, porém deve possuir o mesmo tipo

// dadosCliente1[0] = 100
console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)

// readonly
const array: readonly string[] = ['Daywison', 'Silva']
const array2: ReadonlyArray<string> = ['Daywison', 'Silva']

console.log(array)
console.log(array2)
