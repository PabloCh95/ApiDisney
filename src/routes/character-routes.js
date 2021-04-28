const express=require("express");
const characterController=require("../controllers/character-controller.js");

const router=express.Router();
//crear un personaje
router.use("/create-character",characterController);
//mostrar todos los personajes

//establecer ruta
