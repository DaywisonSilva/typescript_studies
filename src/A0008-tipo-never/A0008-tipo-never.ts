// nunca retorna nada
// never significa que o fim da função nunca será alcançado
/**
 * Há 2 casos em que as funções devem retornar nunca digitam:
    • Em um loop interminável, por exemplo, um loop de tipowhile(true){}
    • Uma função que lança um erro, por exemplo, function foo(){throw new Exception('Error message')}
 */

export function criaErro(): never {
    throw new Error('Erro qualquer')
}

criaErro()
