const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

//import model
const Pets = require('../models/petusers')

router.post('/login', (request, response) => {
    console.log(request.body.username)
    Pets.findOne({ username: request.body.username })
        .then(result => {
            console.log(request.password)
            if (result !== null) {
                bcrypt.compare(request.body.password, result.password, (err, match) => {
                    console.log(request.password)
                    if (match) {
                        // Autheticated, valid email and password
                        Pets.findOne({_id : result._id})
                        .select({password : 0, posts : 0, shared_posts : 0})
                        .then(result => {
                            response.status(200).send(result)})
                    } else {
                        response.status(400).send("Invalid Username or Password")
                    }
                })
            }
        })
        .catch(error => response.status(400).send("Invalid Username or Password"))
});


router.post('/register', (request, respond)=>{

})
module.exports = router;
