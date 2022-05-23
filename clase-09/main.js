const express = require('express')
const app = express()

app.use('/static/', express.static(`${__dirname}/public`))

app.get('',(req, res) => res.json({status:'ok'}))

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`)
})

server.on('error',error =>console.log(`Server error: ${error}`))
