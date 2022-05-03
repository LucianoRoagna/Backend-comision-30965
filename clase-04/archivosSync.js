const fs = require('fs');
/* 
const data = fs.readFileSync('./test-input-sync.txt','utf-8')

console.log(data)


const contenido = 'Esto es una prueba escrita con Node.js'

const contenidoExtra = 'Esto es un agregado'

fs.writeFileSync('./test-output-sync.txt',contenido)


fs.appendFileSync('./test-output-sync.txt',contenidoExtra)

fs.unlinkSync('./test-output-sync.txt')

let dataNoExiste

try{
 dataNoExiste = fs.readFileSync('./no/existe','utf-8')

console.log(dataNoExiste)
}catch(err){
    console.error('El archivo no existe')
}
console.log('Continuar con mi programa') */



try{
const date = fs.writeFileSync('./fyh.txt',Date())
console.log(Date())
}catch(err){
console.error('No se pudo leer el archivo')
}

