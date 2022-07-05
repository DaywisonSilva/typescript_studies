let x: unknown = ''

x = 100
x = 'Daywison'
x = 900

const y = 800

//  o tipo unknown requer uma verificação de tipo // Ele é um any, porém mais seguro
if (typeof x === 'number') console.log(x + y)

export default {}
