// utilize any apenas em último caso
function semRetorno(...args: string[]): void {
    console.log(args.join(' '))
}

const pessoa = {
    nome: 'Daywison',
    sobrenome: 'Silva',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome)
    }
}

semRetorno('Daywison', 'Silva')
pessoa.exibirNome()
