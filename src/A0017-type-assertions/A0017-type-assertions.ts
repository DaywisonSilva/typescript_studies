const body1 = document.querySelector('body')
if (body1) body1.style.background = 'red'

// informando que a constante não é nula / Non-null assertion(!) - Não é recomendado
const body2 = document.querySelector('body')!
body2.style.background = 'red'

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement
body3.style.background = 'red'

// HTMLelement
const input: HTMLInputElement | null = document.querySelector('.input')
if (input) console.log(input.value)

const input2 = document.querySelector('.input') as HTMLInputElement
console.log(input2)
