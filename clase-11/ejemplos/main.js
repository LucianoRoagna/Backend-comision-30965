/* --------NUESTRO SERVIDOR------------ */


const express = require('express');
const {
    Server: IoServer
} = require('socket.io');
const {
    Server: HttpServer
} = require('http')

const app = express();

const httpServer = new HttpServer(app);
const io = new IoServer(httpServer);

app.use(express.static('./public'))

const PORT = 8080

httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`)

    socket.emit('mi mensaje', `Mensaje de bienvenida desde el servidor al socket ${socket.id}`)

    io.sockets.emit('nuevo cliente',`Se ha conectado un nuevo cliente: ${socket.id}`)
    socket.on('Notificacion', data => {
        console.log(data, socket.id)
    })
})