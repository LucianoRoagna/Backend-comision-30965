function dividir(dividendo,divisor){
return new Promise((res,rej)=>{
    if(divisor == 0){
        rej('No se puede dividor por cero')
    }else{
        res(dividendo/divisor)
    }
})
}
dividir(12,2)
.then((resultado)=>{
    console.log(`El resultado es: ${resultado}`)
    console.log('A partir de aqui puedo recuperar el control del programa')
    return dividir(resultado,2)
})
.then((segundoResultado)=>{
console.log(`El segundo resultado es ${segundoResultado}`)
})
.catch((err)=>{
    console.log(err)
})
