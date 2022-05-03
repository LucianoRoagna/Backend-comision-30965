const fs = require('fs');



const contenido = 'Esto es una prueba escrita con Node.js'

const contenidoExtra = 'Esto es un agregado'


fs.promises.readFile('./test-input-promises.txt','utf-8')
.then(data =>{
    console.log(data)
    return fs.promises.writeFile('./test-onput-promises.txt',contenido)
})
.then(()=>{
    console.log('archivo generado')
})
.catch(err=>{
    console.log(err)
})