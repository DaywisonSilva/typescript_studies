/* eslint-disable no-unused-vars */
export abstract class Personagem {
    protected abstract emoji: string

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao()
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.nome} agora tem ${this.vida} de vida...`)
    }

    abstract bordao(): void
}

export class Guerreira extends Personagem {
    public emoji = '\u{1F9DD}'

    bordao(): void {
        console.log('AAAAAA Guerreira ao Ataquee')
    }
}
export class Monstro extends Personagem {
    public emoji = '\u{1F9DF}'

    bordao(): void {
        console.log('Moonnsssttteeeerrrr')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro)
monstro.atacar(guerreira)

console.log(monstro.emoji)
