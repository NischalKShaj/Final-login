const express = require("express");
const router = express.Router();

const credential = {
    username: "nischal",
    password: "red"
}


router.post("/login", (req, res) => {
    const {username, password} = req.body;

    if(username === credential.username && password === credential.password) {
        req.session.user = username;
        res.redirect("/user")
    } else {
        res.render("home", {err:true})
    }
})

router.post("/logout", (req, res) => {
    req.session.destroy(function (err) {
        if (err) {
          console.log(err);
          res.send("Error");
        } else {
          console.log("logout successful");
          res.status(200).send('Okay');
        }
      });
})



module.exports = router;