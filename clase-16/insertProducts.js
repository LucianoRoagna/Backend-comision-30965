const {
    options
} = require('./db/mysql')

const knex = require('knex')(options)

const products=[
    {name:'CocaCola', price:12.22,description:'Refresco de cola',stock:5,cateogry_id:1},
    {name:'Sprite', price:13.22,description:'Refresco de cola',stock:10,cateogry_id:2},
    {name:'Fanta', price:14.22,description:'Refresco de cola',stock:15,cateogry_id:3},
    {name:'Mirinda', price:15.22,description:'Refresco de cola',stock:20,cateogry_id:4},
    {name:'Pepsi', price:16.22,description:'Refresco de cola',stock:25,cateogry_id:5},
 
]
