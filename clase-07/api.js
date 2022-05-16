const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* const messages = [];

app.get('/api/messages',(req,res)=>{
   console.log('Request recibed')
   
   if(!req.query.tittle){
       return res.json(messages)
   }

   const messageFiltered = messages.filter(message => message.tittle === req.query.tittle)

   return res.json(messageFiltered)
})
*/



// D E S A F I O



/* const frase = 'Hola mundo como estan'

app.get('/api/frase',(req,res)=>{
    res.json({frase})
})

app.get('/api/letras/:num',(req,res)=>{
    const num = parseInt(req.params.num)

    if(isNaN(num)){
        return res.json({error: 'Invalid number'})
    }
if(num < 1 || num > frase.length){
    return res.json({error: 'Invalid number'})
}
res.json({letra: frase[num -1]})
})

app.get('/api/palabras/:num',(req,res)=>{
    const num = parseInt(req.params.num)

    if(isNaN(num)){
        return res.json({error: 'Invalid number'})
    }
    const palabras = frase.split(' ')
    if(num < 1 || num > palabras.length){
        return res.json({error: 'Invalid number'})
    }

res.json({palabra: palabras[num - 1]})
})

 */
const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`);
}) 

server.on('err',err => console.log(`Server error ${err}`)) 




