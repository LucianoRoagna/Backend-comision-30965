const dividir = (a, b, cb) => {
    return setTimeout(() => {
        if (b === 0) {
            const err = new Error('No se puede divir por 0')
            cb(err)
        } else {
            const resultado = a / b
            cb(null, resultado)
        }
    })
}

const dividirFn = (err, resultado) => {
    console.log(err.message, resultado)

}

dividir(10, 0, dividirFn)