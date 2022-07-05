type User = { username: string; password: string }
/*
    o tipo User no _user e _sentValue, não significa que o valor tenha que ser do tipo User, mas que satisfaça as regras de User, ou seja, que tenha os campos que o type User especifica
*/
type VerifyUserFn = (_user: User, _sentValue: User) => boolean

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    )
}

const bdUser = { username: 'joao', password: '123456' }
const sentUser = { username: 'joao', password: '123456' }
const loggedIn = verifyUser(bdUser, sentUser)

console.log(loggedIn)

export default {}
