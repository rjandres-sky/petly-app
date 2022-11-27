const express = require('express')
const router = express.Router()

const Pets = require('../models/petusers')
const SharedPosts = require('../models/share_postmodel')

router.post('/', async (request, response) => {
        const post = new SharedPosts(request.body)
        await post.save()
        .then(result => {
            Pets.updateOne(
                {_id : request.body.pet_id},
                {$push : {shared_posts : result._id.toString()}}
                )
                .then(() => response.status(204).send(post))
                .catch(err => response.status(400).send(err))
        })
        .catch(error => response.status(400).send(error))
})

router.delete('/:id', (request, response) => {
    SharedPosts.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Pets.updateOne(
                    {_id : request.body.pet_id},
                    {$pull : {shared_posts : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
                    .catch(err => response.status(400).send(err))
            }
        })
        .catch(error => response.status(404).send(error))
});

module.exports = router