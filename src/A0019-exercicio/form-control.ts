/* eslint-disable no-unused-vars */
import isEmail from 'validator/lib/isEmail'

const SHOW_ERROR_MESSAGE = 'show-error-message'

const form = document.querySelector('.form') as HTMLFormElement
const username = document.querySelector('.username') as HTMLInputElement
const email = document.querySelector('.email') as HTMLInputElement
const password = document.querySelector('.password') as HTMLInputElement
const password2 = document.querySelector('.password2') as HTMLInputElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault()
    hideErrorMessages(form)
    checkForEmptyFields(username, email, password, password2)
    checkEmail(email)
    checkEqualPassword(password, password2)
    if (shouldSendForm(form)) window.alert('Formulário enviado')
})

const checkEmail: (input: HTMLInputElement) => void = input => {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email Inválido')
}

const checkEqualPassword: (
    password: HTMLInputElement,
    password2: HTMLInputElement
) => void = (password, password2) => {
    if (password.value !== password2.value) {
        console.log('MOSTRANDO ERRO')
        showErrorMessage(password, 'Senhas não batem ')
        showErrorMessage(password2, 'Senhas não batem ')
    }
}

const hideErrorMessages: (form: HTMLFormElement) => void = form => {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(item => {
        item.classList.remove(SHOW_ERROR_MESSAGE)
    })
}

const checkForEmptyFields: (...inputs: HTMLInputElement[]) => void = (
    ...inputs
) => {
    inputs.forEach(input => {
        if (!input.value)
            showErrorMessage(input, 'Este campo não pode ficar vazio')
    })
}

const showErrorMessage: (input: HTMLInputElement, msg: string) => void = (
    input,
    msg
) => {
    const formFields = input.parentElement as HTMLDivElement

    const errorMessage = formFields.querySelector(
        '.error-message'
    ) as HTMLSpanElement

    errorMessage.innerText = msg
    formFields.classList.add(SHOW_ERROR_MESSAGE)
}

const shouldSendForm: (form: HTMLFormElement) => boolean = form => {
    let send = true

    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(
        () => (send = false)
    )

    return send
}
