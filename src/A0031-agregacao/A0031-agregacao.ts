/* eslint-disable no-unused-vars */
export class CarrinhoDeCompras {
    private readonly produtos: Array<Produto> = []

    inserirProdutos(...produtos: Array<Produto>): void {
        for (const produto of produtos) {
            this.produtos.push(produto)
        }
    }

    quantidadeProduto(): number {
        return this.produtos.length
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => {
            return soma + produto.preco
        }, 0)
    }
}

export class Produto {
    constructor(private nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 49.9)
const produto2 = new Produto('camiseta2', 49.9)

const carrinhoDeCompras = new CarrinhoDeCompras()

carrinhoDeCompras.inserirProdutos(produto1, produto2)

console.log(carrinhoDeCompras.valorTotal())
