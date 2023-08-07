const express = require('express')
const app = express()
const session = require('express-session')

const router = require("./routes/auth");

app.set('view engine','ejs')
app.set('views','views')

app.use((req, res, next)=>{
    res.set("cache-control","no-store")
    next();
})


app.use(session({
    secret :"seceretkey",
    saveUninitialized:false,
    resave:false,

}))

app.use(express.urlencoded({extended : true}))
app.use(express.static('./public'))

app.get("/", (req, res) => {
    if(req.session.user) {
        res.redirect("/user");
    } else {
        res.render("home")
    }
})

app.get("/user", (req, res) => {

    if(req.session.user) {
       
        res.render("user", {username: req.session.user})
    } else {
        res.redirect("/")
    }
})

app.use("/auth", router)


app.listen(3000,()=>{
    console.log("server started at 4000.....");
})