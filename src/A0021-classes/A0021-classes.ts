/* eslint-disable no-unused-vars */
export default class Empresa {
    public readonly nome: string
    private readonly colaboradores: Array<Colaborador> = []
    protected readonly cnpj: string

    constructor(nome: string, cnpj: string) {
        this.nome = nome
        this.cnpj = cnpj
    }

    public setColaborador(colaborador: Colaborador) {
        this.colaboradores.push(colaborador)
    }

    public getColaboradores(): Array<Colaborador> {
        return this.colaboradores
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string
    ) {}
}

const empresa1 = new Empresa('Flapper', '000.000.000/0001-01')
const colaborador1 = new Colaborador('Daywison', 'Silva')
const colaborador2 = new Colaborador('Paulo', 'Gaia')
empresa1.setColaborador(colaborador1)
empresa1.setColaborador(colaborador2)
console.log(empresa1)
console.log(empresa1.getColaboradores())
