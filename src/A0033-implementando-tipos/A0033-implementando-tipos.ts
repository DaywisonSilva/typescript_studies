/* export abstract class TipoPessoa {
     nome: string
    protected abstract sobrenome: string
    protected abstract nomeCompleto(): string
} */

type TipoPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto(): string
}

export class Pessoa implements TipoPessoa {
    constructor(public nome: string, public sobrenome: string) {}

    nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome
    }
}

const pessoa = new Pessoa('Daywison', 'Silva')

console.log(pessoa.nomeCompleto())

class Aluno extends Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private nMatricula: string
    ) {
        super(nome, sobrenome)
    }

    get matricula() {
        return this.nMatricula
    }
}

const aluno = new Aluno('Daywison', 'Silva', '04047366')

console.log(aluno.nomeCompleto())
console.log(aluno.matricula)
