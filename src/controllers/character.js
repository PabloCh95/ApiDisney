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
        res.status(500).send({message:'Error del servidor.'});
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
            res.status(500).send({message:"Error del servidor"});
        });
}
//busqueda de personajes por nombre o por pelicula
const searchCharacter=async (req,res)=>{
    try {
        const {name,film}=req.body;
        if(name){
            const character=await Character.find({name})
            res.status(200).send({message:"Se busco correctamente por el nombre del personaje",character});
        }else if(film){
            //falla cuando lo busco por pelicula
            const character=await Character.find({film:[{title:film.title}]});
            res.status(200).send({message:"Se busco correctamente por el nombre de la pelicula",character});
        }else{
            res.status(404).send({message:"Los campos deben estar completos"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error});
    }
}
//actualizar personajes
const updateCharacter=(req,res)=>{
    let CharacterData=req.body;
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
        res.status(500).send({message:e.message});
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