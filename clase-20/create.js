const db = require('./db')

const userModel = require('./models/user')

const data = {
    name: 'Luciano',
    lastname: 'Roagna',
    email:'lucianoroagna@gmail.com',
    username:'lucianoroagna',
    password:'qwerty'
}

const user = new userModel(data)

db
.then(_ => user.save())
.then(document => console.log('User saved',document))
.catch(err => console.log(`Èrror: ${err.message}`))
.finally(_ => process.exit())



