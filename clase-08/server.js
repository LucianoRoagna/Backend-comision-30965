const express = require('express')
const  routerMascotas  = require("../clase-08/routerMascotas")
const  routerPersonas  = require("../clase-08/routerPersonas")

const app = express()

app.use((req,res,next)=>{
    console.log('Time:', Date.now())
    return next()
})

const middlewareRoute = (req,res,next) =>{
    console.log('Request recibido a la ruta raiz /')
    return next()
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',middlewareRoute,(req,res,)=>{
    return res.json({
        status: 'OK',
    })
})

app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Cargo los routers */

app.use('/api/mascotas', routerMascotas)
app.use('/api/personas', routerPersonas)

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))