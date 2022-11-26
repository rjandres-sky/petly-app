const express = require('express')
const router = express.Router()

//import model
const Pets = require('../models/petusers')

//return all pet users
router.get('/', (request, response) => {
    Pets.find()
    .select({password : 0})
    .populate('posts')
    .populate('shared_posts')
    .then(result => {
        response.status(200).send(result)
    })
    .catch(error => console.log(error))
})

// get request for login users
router.get('/:id', (request, response) => {
    Pets.find()
    .select({password : 0})
    .populate('posts')
    .populate('shared_posts')
    .then(result => {
        response.status(200).send(result)
    })
    .catch(error => console.log(error))
})

module.exports = router