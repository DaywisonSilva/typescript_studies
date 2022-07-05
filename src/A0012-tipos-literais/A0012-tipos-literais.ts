let x = 10

x = 0b1010

// x = 'Daywison'

let a = 100 as const
// a = 200

const pessoa = {
    nome: 'Daywison' as const,
    sobrenome: 'Silva'
}

// pessoa.nome = 'Daywison1'

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
    return cor
}

console.log(escolhaCor('Amarelo'))

console.log(a, x)
export default {}
