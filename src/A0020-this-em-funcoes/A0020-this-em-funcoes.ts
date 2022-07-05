export function funcao(this: Date, name: string): void {
    console.log(this)
    console.log(name)
}

const funcaoBind = funcao.bind(new Date())

funcaoBind('Daywison')
