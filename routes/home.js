const express = require('express')
const path = require('path')
const router = express.Router();

const username1 = "nischal"
const password1 = "red"

router.get('/',(req,res)=>{
    if(req.session.user){

        res.render(path.join(__dirname,'../','views','user'),{username1})
    } else{
        res.render(path.join(__dirname,'../','views','home'))
    }
})

router.post('/',(req,res)=>{
    const{username, password} = req.body;
    if(username1 === username && password1 === password){
        req.session.user = username;
        res.redirect('/')
    } else{
        res.render('home',{err:true})
    }
    console.log(password);
    console.log(username);
})

module.exports = router;
