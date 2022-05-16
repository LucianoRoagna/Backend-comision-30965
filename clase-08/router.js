const express = require('express');
const {Router} = express;
//o sino tambien
// const Router = express.Router
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/* let messages = [
    {id:1,
    tittle:'ok',
    message: ''
    },
    {id:2,
    tittle:'ko',
    message:''}
];

const messagesRouter = Router()


messagesRouter.get('',(req,res)=>{
    return res.json(messages)
})

messagesRouter.post('',(req,res)=>{

})

app.use('/api/mensages',messagesRouter)
 */





const PORT = 8080

const server = app.listen(PORT,()=>{
    console.log(`HTTP server listening on port ${PORT}`);
}) 

server.on('err',err => console.log(`Server error ${err}`)) 