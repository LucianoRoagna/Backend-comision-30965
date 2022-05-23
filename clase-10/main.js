const express = require('express')
const app = express()

app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req, res) => res.json({status:'ok'}))

app.get('/hello',(req,res) =>{

const data= {
    mensaje:'Usando Pug JS en express'
}

 return res.render('hello',data)
})


const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`)
})

server.on('error',error =>console.log(`Server error: ${error}`))
