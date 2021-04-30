const bcrypt=require("bcrypt");
const User=require('../models/users');

const login = (req,res)=>{
    try{
        
    }catch(error){

    }
}
const signUp= async (req,res)=>{
   try{
        const {name,lastname,email,password}=req.body;
        //corrobora si los datos estan vacios
        if(name||lastname||email||password){
            //encriptacion del password
            const hash= await bcrypt.hash(password,15);
            //creacion del usuario en la base de datos
            await User.create({
                name,
                lastname,
                email,
                password:hash
            });
            res.status(200).send({message:'El Usuario se ha creado correctamente'});
        }else{
            res.status(404).send({message:'los campos deben estar completos'});
        }
   }catch(error){
        console.error(error);
        res.status(500).send({message:"error del servidor"});
   }
}

module.exports={
    signUp,
    login
}