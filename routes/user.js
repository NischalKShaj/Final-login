const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
    
})

module.exports = router