const fs = require('fs').promises;



class Contenedor {
    constructor(fileName) {
       
        this.fileName = fileName;
        this.products = [];
    }

        async fileJson(){ 
       let file =  await fs.readFile(this.fileName,'utf8');
        let json = JSON.parse(file);
        return json
       
       
    }   
   
       

     async saveFile(params){
        let jsonString = JSON.stringify(params);
        await fs.writeFile(this.fileName, jsonString);
    } 
   
    



    async save(newObj){
        // .Recibe un objeto, lo guarda en el archivo productos, devuelve el id asignado.
         
        try{
            

            let file = await fs.readFile(this.fileName, "utf8");
            
           //Si no hay datos crea el id
            if(file === ''){
                newObj.id = 1
                
               this.products.push(newObj);
            }else{
            //Si lo hay lo suma al anterior
           const json = JSON.parse(file)
           newObj.id = json[json.length-1].id +1;     
           json.push(newObj);      
           this.products = json;
           this.saveFile(json)
        }
        
        console.log('Producto guardado de forma correcta')

        return newObj.id
    }
    

      
        catch(error){
            console.log(error);
        }

    }
   

  async getById(id){

    //Recibe un id y devuelve el objeto con ese id o null si no existe
      try{
       
    
       let json = await this.fileJson()
      


         
          let product = json.find(product => product.id == id);
          return console.log(product);
      }
      catch(err){
         console.log('No funciona')
      }
  }
  async getAll(){

     
      //Devuelve un array con todos los objetos del archivo
      try{
   let json = await this.fileJson()
     
          return console.log(json)
      
        
      }
      catch(err){
          console.log(err)
      }
  }

  async deleteById(numero){
    //Elimina un objeto mediante su ID
    try{
        let json = await this.fileJson()

      let product=json.find(product =>product.id === numero );
      const index = json.indexOf(product);
      json.splice(index,1);
    
      
    this.saveFile(json)
    }
    catch(err){
        console.log(err)
    }
}
async deleteAll(){
    //Elimina todos los objetos del archivo
    try{
        let product=[];
        this.products = product;
        this.saveFile(product)
    }
    catch(err){
        console.log(err)
    }
}
}



module.exports =Contenedor;