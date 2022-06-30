import query from './db.js';

try{
    const response = await query.get()
    const docs = response.docs

   const users = docs.map(doc => {
        return ({id: doc.id,...doc.data()})
    })
console.log(users)
}catch(e){
    console.log(`Error ${e}`)
}