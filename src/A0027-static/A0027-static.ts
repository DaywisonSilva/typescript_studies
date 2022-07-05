/* eslint-disable no-unused-vars */
export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public cpf: string
    ) {}

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, 0, '0')
    }
}

const pessoa1 = new Pessoa('Daywison', 'Silva', 22, '123.456.789-00')
const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda')

console.log(pessoa1)
console.log(pessoa2)
