const express = require('express');

const app = express();

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))



const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`);
}) 

server.on('err',err => console.log(`Server error ${err}`)) 