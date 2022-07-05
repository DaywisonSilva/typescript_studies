export abstract class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string
    ) {}

    getIdade(): number {
        return this.idade
    }

    getCpf(): string {
        return this.cpf
    }

    getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string
    ) {
        super(nome, sobrenome, idade, cpf)
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        console.log('FAZENDO ALGO ANTES DE CHAMAR A SUPERCLASSE')
        return super.getNomeCompleto()
    }
}

const aluno = new Aluno('Daywison', 'Sousa', 22, '03524073280', 'T01')
const cliente = new Cliente('Daywison', 'Sousa', 22, '03524073280')
// console.log({ aluno, cliente })
// console.log(cliente.getNomeCompleto())
console.log(aluno)
