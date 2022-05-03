 function mostrarLetras(palabra,callback){
    let index = 0;
    const timer = setInterval(() =>{
       const letra = palabra(index++)
           if(letra){
               console.log(letra)
           }else{
               clearInterval(timer)
              callback()
           }

    },1000)
}

const fin = ()=> console.log('termine')

setTimeout(()=>{
    mostrarLetras('hola',fin)
},0)
setTimeout(()=>{
    mostrarLetras('hola',fin)
},250)
setTimeout(()=>{
    mostrarLetras('hola',fin)
},500) 

