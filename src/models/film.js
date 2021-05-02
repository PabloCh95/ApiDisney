const mongoose=require('mongoose');
const Schema=mongoose.Schema();

const SchemaFilm=Schema({
    title:{type:String,unique:true,require:true},
    image:{type:String},
    date:{type:String}
})

mongoose.model('Film',SchemaFilm);

module.exports=SchemaFilm;
