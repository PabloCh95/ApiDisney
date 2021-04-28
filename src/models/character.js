const mongoose=require("mongoose");
const Schema=mongoose.Schema;
//esquema de personaje
const CharacterSchema=Schema({
    image:{type:String},
    name:{type:String},
    age:{type:String},
    weight:{type:Number},
    history:{type:String},
    film:{type:[]}
});

module.exports=mongoose.model("Character",CharacterSchema);