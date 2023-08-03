const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')

const homeRouter = require('./routes/home')
const userRouter = require('./routes/user')

app.set('view engine','ejs')
app.set('views','views')

app.use(session({
    secret :"seceretkey",
    saveUninitialized:false,
    resave:false,

}))

app.use(express.urlencoded({extended : true}))
app.use(express.static('./public'))


app.use('/',homeRouter)
app.use('/logout',userRouter)

app.use((req,res)=>{
    res.status(404).send("404 page not found")
})

app.listen(3000,()=>{
    console.log("server started...");
})