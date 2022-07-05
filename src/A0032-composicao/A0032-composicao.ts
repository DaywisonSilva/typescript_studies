/* eslint-disable no-unused-vars */
interface IFuncionalidades {
    ligar(): void
    acelerar(): void
    parar(): void
    desligar(): void
}

export class Carro {
    constructor(private readonly motor: IFuncionalidades) {}

    ligar(): void {
        this.motor.ligar()
    }

    acelerar(): void {
        this.motor.acelerar()
    }

    parar(): void {
        this.motor.parar()
    }

    desligar(): void {
        this.motor.desligar()
    }
}

export class Motor implements IFuncionalidades {
    ligar(): void {
        console.log('motor está ligado')
    }

    acelerar(): void {
        console.log('motor está acelerando...')
    }

    parar(): void {
        console.log('motor está parando...')
    }

    desligar(): void {
        console.log('motor está desligado')
    }
}

const carro = new Carro(new Motor())

carro.acelerar()
