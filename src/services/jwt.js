const jwt=require('jwt-simple');
const {DateTime,Duration}=require('luxon');
const SECRET_KEY=process.env.SECRET_KEY || "ASÑDJQPWJEI123AKSPDJ123";

const createToken=()=>{
    console.log(DateTime.now().ts);
    
    console.log(Duration.hours)
}

module.exports=createToken
