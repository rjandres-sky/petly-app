const express = require('express')
const router = express.Router()

const Pets = require('../models/petusers')
const Posts = require('../models/postmodel')

router.get('/', (request, response) => {
    Posts.find()
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

router.get('/:id', (request, response) => {
    Posts.findOne({_id : request.params.id})
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

router.post('/', async (request, response) => {
    const post = new Posts(request.body)
    await post.save()
    .then(result => {
        Pets.updateOne(
            {_id : request.body.pet_id},
            {$push : {posts : result._id.toString()}}
            )
            .then(() => response.status(204).send(post))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})

router.put('/:id', (request, response) => {
    Posts.updateOne(
        { _id: request.params.id },
        { $set: request.body })
        .then(result => {
            if (result.modifiedCount === 1) {
                response.status(204).send(result);
            }
        })
        .catch(error => response.status(404).send(error))
})

router.delete('/:id', (request, response) => {
    Posts.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Pets.updateOne(
                    {_id : request.body.pet_id},
                    {$pull : {posts : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
            }
        })
        .catch(error => response.status(404).send(error))
});

module.exports = router