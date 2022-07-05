const objetoA: {
    readonly chaveA: string
    chaveB: string
    chaveC?: string
    [key: string]: unknown
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B'
}

// Essa chave não pode ser alterada
// objetoA.chaveA = 'Outro Valor'

objetoA.chaveC = 'Nova Chave'
objetoA.chaveD = 'Olá'
