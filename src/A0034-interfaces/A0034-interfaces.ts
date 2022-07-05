/* export abstract class TipoPessoa {
     nome: string
    protected abstract sobrenome: string
    protected abstract nomeCompleto(): string
} */

type TipoNome = {
    nome: string
}

type TipoSobrenome = {
    sobrenome: string
}

type TipoNomeCompleto = {
    nomeCompleto(): string
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto

export class Pessoa implements TipoPessoa {
    // eslint-disable-next-line no-unused-vars
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
        // eslint-disable-next-line no-unused-vars
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
