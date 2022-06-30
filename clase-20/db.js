const mongoose = require('mongoose');

const URL  = 'mongodb+srv://lucianoroagna:onaicul98@cluster0.n41i7au.mongodb.net/clase-20?retryWrites=true&w=majority'

const connection = mongoose.connect(URL,{
    useNewUrlParser:true,
    
}  )
.then(_ => console.log('Conectado a la base de datos de MongoDB Atlas'))
    module.exports =connection