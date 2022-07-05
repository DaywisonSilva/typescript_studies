/* eslint-disable no-unused-vars */
export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        private _cpf: string
    ) {}

    // Antiga
    // getCpf(): string {

    get cpf(): string {
        const cpf = this._cpf
        return cpf.replace(/\D/g, '')
    }

    // setCpf(valor: string): void {

    set cpf(valor: string) {
        this._cpf = valor
    }
}

const pessoa = new Pessoa('Daywison', 'Silva', 22, '123.456.789-00')

// Antigo
// pessoa.setCpf('123.345.789-99')
// console.log(pessoa.getCpf())

pessoa.cpf = '123.345.789-99'
console.log(pessoa.cpf)
