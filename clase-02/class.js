class Contador {
    static cuentaGlobal = 0

    constructor(responsable) {
        this.responsable = responsable
        this.cuentaIndividual = 0
    }

    obtenerResponsable() {
        return this.responsable
    }
    obtenerCuentaIndividual() {
        return this.cuentaIndividual
    }
    obtenerCuentaGlobal() {
        return Contador.cuentaGlobal
    }
    contar() {
        this.cuentaIndividual++
        Contador.cuentaGlobal++
    }
}

const resp1 = new Contador('resp1')
const resp2 = new Contador('resp2')

resp1.contar()
resp1.contar()

resp2.contar()
resp2.contar()
resp2.contar()
resp2.contar()
resp2.contar()

console.log(`resp1 ind: ${resp1.obtenerCuentaIndividual()}`)
console.log(`resp1 glob: ${resp1.obtenerCuentaGlobal()}`)

console.log(`resp2 ind: ${resp2.obtenerCuentaIndividual()}`)
console.log(`resp2 glob: ${resp2.obtenerCuentaGlobal()}`)