const fs = require('fs').promises


module.exports = class ContenedorArchivos{
    constructor(file){
        this.file = file
    }

    async leer(){
        let data
        try{
            data = await fs.readFile(this.file, 'utf-8')
            console.log(data.toString())

            if (data.toString() != ''){
                data = JSON.parse(data)
            }else{
                data = []
            }

            return data
        }catch(e){
            throw new Error(e.message)
        }
    }

    async guardar(data){
        
        try{
            await fs.writeFile(this.file, JSON.stringify(data, null, 2))
        }catch(e){
            throw new Error(e.message)
        }
    }

}