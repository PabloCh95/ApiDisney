const CharacterRoutes=require("./character-routes.js");

module.exports= app => {
//    app.use('/api/v1/user');
    app.use('/api/v1/character',CharacterRoutes);
}