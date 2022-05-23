const express = require('express')
const fs = require('fs')
const app = express()

app.engine('coder',(filePath,options,callback)=>{
    fs.readFile(filePath,(err,content)=>{
        if(err){
            return callback(new Error(err))
        }
        const rendered = content.toString()
        .replace('#title#',options.title)
        .replace('#message#',options.message)

        return callback(null, rendered)
    })
})

app.set('views','./views')
app.set('view engine','coder')


app.get('',(req,res)=>{
  const data = {
      title:'Hola',
      message:'Motor de plantillas propio'

  }
  return res.render('index',data)
})


/* const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <span>Contenido Estatico</span> <!-- para inyectar el resultado -->
  
</body>
</html>` */

const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})

server.on('error',error =>console.log(`Error on server ${PORT}`))