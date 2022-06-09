const {
    options
} = require('./db/mysql')

const knex = require('knex')(options)

const categories=[
    {name: 'Bebidas'},
    {name: 'Snack'},
    {name: 'Cereal'},
    {name: 'Dulces'},
    {name: 'Pan'},
]

knex('categories')
.insert(categories)
.then(n => console.log(`Categorias insertadas: ${n}`))
.catch(err => console.log(`Error ${err.message}`))
.finally(()=> knex.destroy())
