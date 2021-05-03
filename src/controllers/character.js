const Character=require('../models/character');
//crea personajes
const createCharacter=async (req,res)=>{
    try {
        //podria hacerlo con una subida de imagen, pero solo voy a dejar la url de una imagen en la web
        const {image,name,age,weight,history, film}=req.body;
        if(image || name || age || weight || history || film ){
           await Character.create({
                image,
                name,
                age,
                weight,
                history,
                film
           });
           res.status(200).send({message:'Se ha creado el personaje correctamente.'});
        }else{
            res.status(404).send({message:'Los campos deben estar completos'});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'ERROR DEL SERVIDOR'});
    }
}
//muestra a todos los personajes, devuelve un array de objetos
const listCharacter= (req,res)=>{
        Character.find().then((character)=>{
            if(!character){
                res.status(404).send({message:'No se encontraron personajes'});
            }else{
                res.status(200).send({character});
            }
        }).catch((e)=>{
            console.log(e);
            res.status(500).send({message:"ERROR DEL SERVIDOR"});
        });
}
//busqueda de personajes por nombre o por pelicula
const searchCharacter=async (req,res)=>{
    try {
        const {name,film}=req.body;
        if(name){
            const character=await Character.find({name})
            if(character){
                res.status(200).send({message:"Se busco correctamente por el nombre del personaje",character});
            }else{
                res.status(204).send({message:"CHARACTER_NOT_FOUND"});
            }
            
        }else if(film){
            //falla cuando lo busco por pelicula
            console.log("film:",film)
            const character=await Character.find({film});
            if(character){
                console.log("character:",character);
                res.status(200).send({message:"Se busco correctamente por el nombre de la pelicula",character});
            }else{
                res.status(204).send({message:"CHARACTER_NOT_FOUND"});
            }
            
        }else{
            res.status(404).send({message:"Los campos deben estar completos"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:"ERROR DEL SERVIDOR"});
    }
}
//actualizar personajes
const updateCharacter=async (req,res)=>{
    try{
        const {id}=req.params;
        const {name,film,age,image,weight,history} =req.body;
        if(name||film||age||image||weight||history){
            const characterUpdate=await Character.findByIdAndUpdate({id},req.body)
            if(characterUpdate){
                res.status(200).send({message:'Se a actualizado el personaje correctamente'});
            }else{
                res.status(404).send({message:"No se ha encontrado ningun personaje."})
            }
        }else{
            res.status(404).send({message:"los campos deben estar completos"});
        }
    }catch(error){
        console.log(error);
        res.status(500).send({message:"ERROR DEL SERVIDOR"});
    }
}
//borra personajes
const deleteCharacter=async (req,res)=>{
    try{    
        const {id} = req.params;
        console.log(req.params);
        const characterDeleted= await Character.findByIdAndDelete(id);

        if(!characterDeleted){
            res.status(404).send({message:'Personaje no encontrado.'});
        }else{
            res.status(200).send({message:'El Personaje ha sido eliminado correctamente.'});
        }

    }catch(e){
        console.log(e);
        res.status(500).send({message:"ERROR DEL SERVIDOR"});
    }
}
//actualiza personajes

module.exports={
    createCharacter,
    listCharacter,
    updateCharacter,
    searchCharacter,
    deleteCharacter
}