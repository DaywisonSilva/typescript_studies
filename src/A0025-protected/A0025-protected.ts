/* eslint-disable no-unused-vars */
export default class Empresa {
    public readonly nome: string
    protected readonly colaboradores: Array<Colaborador> = []
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

export class Flapper extends Empresa {
    constructor() {
        super('Flapper', '000.000.000/0001-01')
    }

    pop(): Colaborador | null {
        return this.colaboradores.length
            ? (this.colaboradores.pop() as Colaborador)
            : null
    }
}

const empresa1 = new Flapper()
const colaborador1 = new Colaborador('Daywison', 'Silva')
const colaborador2 = new Colaborador('Paulo', 'Gaia')
empresa1.setColaborador(colaborador1)
empresa1.setColaborador(colaborador2)
console.log(empresa1)
console.log(empresa1.getColaboradores())
