import query from './db.js'

const id = 1
const doc = query.doc(id.toString())

try{
    const user = await doc.set({nombre:'Luciano',dni:41069910})
    console.log(user)
}catch(e){
    console.log(`Error: ${e}`)
}