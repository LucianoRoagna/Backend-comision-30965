function dividir(dividendo,divisor){
    return new Promise((res,rej)=>{
        if(divisor == 0){
            rej('No se puede dividor por cero')
        }else{
            res(dividendo/divisor)
        }
    })
    }

asyncFunction = async ()=>{
    try{
    const resultado = await dividir(10,0)
    
    console.log(resultado)
    }catch(err){
        console.error('No se puede dividir por 0')
    }
    console.log('Continua')
    const resultado2 = await dividir(10,2)
    console.log(resultado2)
}


asyncFunction()
 