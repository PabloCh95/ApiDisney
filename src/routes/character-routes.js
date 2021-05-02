const express=require("express");
const {createCharacter,listCharacter,deleteCharacter,updateCharacter,searchCharacter}=require('../controllers/character');
const ensureAuth= require('../middlewares/authentication');

const router=express.Router();

//muestra todos los personajes
router.get("/list-character",ensureAuth,listCharacter);
//muestra un personaje por pelicula o nombre
router.get('/search-character',searchCharacter);
//crear un personaje
router.post("/create-character",ensureAuth,createCharacter);
//elimina los personajes los personajes
router.delete('/delete-character/:id',ensureAuth,deleteCharacter);
//actualiza los personajes
router.post('/update-character/:id',ensureAuth,updateCharacter);

//establecer ruta
module.exports=router;
