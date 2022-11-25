const express = require('express')
const router = express.Router()

//import model
const Pets = require('../models/petusers')

//return all pet users
router.get('/', (req, res) => {
    Pets.find()
    .populate('posts')
    .populate('shared_posts')
    .then(result => {
        res.status(200).send(result)
    })
    .catch(error => console.log(error))
})

module.exports = router