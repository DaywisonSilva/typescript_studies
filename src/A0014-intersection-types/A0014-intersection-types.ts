type TemNome = { nome: string }

type TemSobrenome = { sobrenome?: string }

type TemIdade = { idade?: number }

// type Pessoa = TemNome | TemSobrenome | TemIdade // Ou - Union Types
type Pessoa = TemNome & TemSobrenome & TemIdade // E - Intersection Types

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersecao = AB & AC

const pessoa: Pessoa = {
    nome: 'Daywison'
    // sobrenome: 'Sousa',
    // idade: 30
}

console.log(pessoa)

export default {}
