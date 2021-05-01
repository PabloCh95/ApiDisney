const express=require("express");
const {createCharacter,listCharacter,deleteCharacter}=require('../controllers/character');
const ensureAuth= require('../middlewares/authentication');

const router=express.Router();

//muestra todos los personajes
router.get("/list-character",ensureAuth,listCharacter);
//crear un personaje
router.post("/create-character",ensureAuth,createCharacter);
//actualiza los personajes
router.delete('/delete-character/:id',ensureAuth,deleteCharacter);

//

//establecer ruta
module.exports=router;
