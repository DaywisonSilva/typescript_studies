let x
if (typeof x === 'undefined') x = 20
console.log(x * 2)

// em parâmetros opcionais checar se o valor é undefined ou não
function createPerson(
    firstName: string,
    lastName?: string
): {
    firstName: string
    lastName?: string
} {
    if (!lastName) return { firstName }
    return {
        firstName,
        lastName
    }
}

function squareOf(x: any) {
    if (typeof x === 'number') return x ** 2
    return null
}

console.log(createPerson('daywison', 'sousa'))
console.log(squareOf(2))
