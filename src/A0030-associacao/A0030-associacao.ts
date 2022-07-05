/* eslint-disable no-unused-vars */
export class Escritor {
    private _ferramenta: Ferramenta | null = null

    constructor(private nome: string) {}

    set ferramenta(ferramenta: Ferramenta | null) {
        this._ferramenta = ferramenta
    }

    get ferramenta(): Ferramenta | null {
        if (this._ferramenta) return this._ferramenta
        return null
    }

    escrever(): void {
        if (this._ferramenta === null) {
            console.log('Não posso escrever sem ferramenta')
            return
        }
        this.ferramenta?.escrever()
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) {}

    escrever() {
        console.log('escrevendo')
    }

    get nome(): string {
        return this._nome
    }
}

class Ferramenta2 {
    public nome: string
    constructor(nome: string) {
        this.nome = nome
    }

    getFerramenta() {
        return this.nome
    }
}

export class Caneta extends Ferramenta2 {
    escrever(): void {
        console.log(this.nome)
        console.log(`${super.getFerramenta()} está escrevendo...`)
    }
}

export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`)
    }
}

const escritor = new Escritor('Daywison')
const caneta = new Caneta('Bic')
const maquinaEscrever = new MaquinaEscrever('maquina escrever')

escritor.ferramenta = caneta

escritor.escrever()

caneta.escrever()

// console.log(escritor.escrever())
