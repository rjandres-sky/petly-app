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

router.put('/:id', (request, response) =>{
    Pets.updateOne({_id : request.params.id},
        { $set: request.body })
        .then(result => {
            if (result.modifiedCount === 1) {
                response.status(204).send(result);
            }
        })
        .catch(error => response.status(404).send(error))
    
})

router.delete('/:id', (request, response) => {
Pets.deleteOne({_id : request.params.id})
.then( () => response.status(204).send("Pets Users deleted"))
.catch(error => response.status(400).send(error))
})

module.exports = router