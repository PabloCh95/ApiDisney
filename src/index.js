//modulos
const express= require("express");
const app = express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const dotenv=require('dotenv');
//configuracion de dotenv
dotenv.config();
//constantes a utilizar
const PORT=process.env.PORT || 3000;
const URL=process.env.URL;

//Configuraciones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Conexion Base de Datos
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('la base de datos se conecto exitosamente');
}).catch((err) => {
    console.error(err);
});

//Configuraciones Header HTTP
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
//Puerto
app.listen(PORT, ()=>{
    console.log(`Conectado en el puerto: ${PORT}`);
});

//falta establecer rutas, y controllers, ver routes.