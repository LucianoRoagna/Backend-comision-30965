const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,'uploads')
    },
    filename:(req,res,cb)=>{
        cb(null,`${file.fieldname}- ${Date.now()}`)
    }
})

const upload = multer({storage})
const app = express()

app.use('/static',express.static(__dirname + '/public'))

app.get('', (req, res) => {
    res.json({
        status: 'OK'
    })
})


app.post('/uploadFile',upload.single('myFile'),(req,res)=>{
const file = req.file

if(!file){
    return res.status(400).json({
        error: 'Please upload a file'
    })
}
})
const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

server.on('error', error => console.log(`Server error ${error}`))