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

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return ' ' + this.nome + ' ' + this.sobrenome
    }
}

const aluno = new Aluno('Daywison', 'Sousa', 22, '03524073280')
const cliente = new Cliente('Daywison', 'Sousa', 22, '03524073280')
console.log({ aluno, cliente })
