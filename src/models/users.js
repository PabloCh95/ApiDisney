const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const SchemaUser=Schema({
    name:{type:String},
    lastname:{type:String},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
});



module.exports=mongoose.model('User',SchemaUser);