const express=require('express');
const {signUp,login} = require('../controllers/user');

const Router= express.Router();

Router.post('/sign-up',signUp);
Router.post('/login',login);

module.exports=Router;