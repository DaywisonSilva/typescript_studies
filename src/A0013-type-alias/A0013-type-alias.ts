type Idade = number

type Pessoa = {
    nome: string
    idade: Idade
    salario: number
    corPreferida?: CorPreferida
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Mangeta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
    nome: 'Daywison',
    idade: 21,
    salario: 3000.0,
    corPreferida: 'Amarelo'
}

const setCorPreferida = (pessoa: Pessoa, cor: CorPreferida): Pessoa => {
    return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Azul'))

export default {}
