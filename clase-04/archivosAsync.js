const fs = require('fs');



const contenido = 'Esto es una prueba escrita con Node.js'

const contenidoExtra = 'Esto es un agregado'

fs.readFile('./test-input-cb.txt','utf-8',(err,data)=>{
    if(err){
        console.error('Error al obtener archivo')
    }else{
        console.log(data)
        fs.writeFile('./text-output-cb.txt',contenido,err =>{
            console.log('archivo generado')
        })
    }
})