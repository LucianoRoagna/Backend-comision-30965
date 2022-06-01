const express = require('express');
const {Server: HttpServer} = require('http')
const {Server: IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views','./views')
app.set('view engine', 'ejs')

let users = []

app.get('/login',(req,res)=>res.render('login'))

app.post ('/login',(req,res)=>{
    const {username} = req.body
    users.push(username)

    return res.redirect(`/chat?username=${username}`)
})

const PORT = 8080

httpServer.listen(PORT,()=>console.log(`Server runing at ${PORT}`))