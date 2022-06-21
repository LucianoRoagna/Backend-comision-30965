const db = require('./db')
const userModel = require ('./models/user')

db
.then(_ => userModel.findOne({username: 'lucianoroagna'}))
.then(user => {
    console.log(user)
    user.password = 'asdfgh'
    return user.save()
})
.then(user => console.log(user))
.catch(err => console.log(`Èrror: ${err.message}`))
.finally(_ => process.exit())