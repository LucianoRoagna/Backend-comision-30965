const db = require('./db')
const userModel = require ('./models/user')

db
.then(_ => {
   return userModel.deleteOne({
    username:'lucianoroagna'
})
})
.then(result => console.log(result))
.catch(err => console.log(`Èrror: ${err.message}`))
.finally(_ => process.exit())