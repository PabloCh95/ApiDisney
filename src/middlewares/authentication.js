const jwt = require('jwt-simple');
const moment = require('moment');

const SECRET_KEY = "ASÑDJQPWJEI123AKSPDJ123";

const ensureAuth = (req,res,next)=>{
    if (!req.headers.authorization){
        return res.status(403).send({message:'La peticion no tiene cabecera'});
    }

    const token= req.headers.authorization.replace(/['"]+/g, "");

    try{
        var payload = jwt.decode(token,SECRET_KEY);

        if(payload.exp <= moment.unix()){
            return res.status(404).send({message:'El token ha expirado'});
        }

    }catch(e){
        return res.status(404).send({message:e.message});
    }
    req.user=payload;
    next();
}

module.exports=ensureAuth;