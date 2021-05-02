const jwt=require('jwt-simple');
const moment= require('moment');//se que moment no va mas, pero bueno mas adelante lo modifico con luxon
const SECRET_KEY=process.env.SECRET_KEY || "ASÑDJQPWJEI123AKSPDJ123";

const createToken=(user)=>{
    const payload ={
        id:user._id,
        name:user.name,
        lastname:user.lastname,
        email:user.email,
        createToken: moment().unix(),
        exp:moment().add(3,"hours").unix()
    };

    return jwt.encode(payload,SECRET_KEY);
}

const createRefreshToken = (user)=>{
    const payload ={
        id:user._id,
        exp:moment().add(30,'days').unix()
    };

    return jwt.encode(payload,SECRET_KEY);
};

const decodedToken = (token)=>{
    return jwt.decode(token,SECRET_KEY,true);
}

module.exports={
    createToken,
    decodedToken,
    createRefreshToken
}
