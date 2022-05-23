const express = require('express')
const {engine} = require('express-handlebars')
const app = express()

app.engine('hbs',engine({
    extname: 'hbs',
    defaultLayout:`${__dirname}/views/index.hbs`,
    layoutsDir:`${__dirname}/views/layouts`,
    partialsDir:`${__dirname}/views/partials`
}))

app.engine('hbs',engineFN)
app.set('views','./views')
app.set('view engine','hbs')

const alumnos = [
    {nombre:'Aaron',apellido:'Molinas'},
    {nombre:'Aaron',apellido:'Molinas'},
    {nombre:'Aaron',apellido:'Molinas'},
    {nombre:'Aaron',apellido:'Molinas'}
]

app.get('',(req, res)=>{
    const data = {
        comision:30965,
        alumnos:alumnos
    }
    return res.render('layouts/main',data)
})




const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`)
})

server.on('error',error =>console.log(`Server error: ${error}`))