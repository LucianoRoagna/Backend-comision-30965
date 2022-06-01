/* ----------NUESTRO CLIENTE------------ */

const socket = io()

socket.on('mi mensaje',(data)=>{
    alert(data)
    socket.emit('Notificacion',`Mensaje recibido exitosamente`)
})

socket.on('nuevo cliente',data =>{
    alert(data)
})