const characterModel=require("../../models/character");

//funcion para crear un personaje
const createCharacter= async (req,res) =>{
    try{
        const {image,name,age,weight,history,films}=req.body;
    
        if(req.body===null){
            res.status(404).send({message:"Por favor complete los datos."});
        }else{
            await characterModel.create({
                image:image.name,
                name,
                age,
                weight,
                history,
                films
            })
        }
    }catch{
        

    }
}