const express = require('express')
const router = express.Router()


const Posts = require('../models/postmodel')
const SharedPosts = require('../models/petusers')
const Comments = require('../models/commentmodel')

router.get('/', (request, response) => {
    Comments.find()
    .populate({path : 'pet_id', select : 'name'})
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

router.get('/:id', (request, response) => {
    Comments.findOne({_id : request.params.id})
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

//==================adding comment========================
router.post('/post', async (request, response) => {
    const comment = new Comments(request.body)
    await comment.save()
    .then(result => {
        Posts.updateOne(
            {_id : request.body.post_id},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(comment))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})

router.post('/shared', async (request, response) => {
    const comment = new Comments(request.body)
    await comment.save()
    .then(result => {
        SharedPosts.updateOne(
            {_id : request.body.shared_id},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(comment))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})

router.post('/comment', async (request, response) => {
    const comment = new Comments(request.body)
    await comment.save()
    .then(result => {
        Comments.updateOne(
            {_id : request.body.comment_id},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(comment))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})
//==================adding comment========================

router.put('/:id', (request, response) => {
    Comments.updateOne(
        { _id: request.params.id },
        { $set: request.body })
        .then(result => {
            if (result.modifiedCount === 1) {
                response.status(204).send(result);
            }
        })
        .catch(error => response.status(404).send(error))
})

//==================delete comment========================
router.delete('/:id/post', (request, response) => {
    Comments.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Posts.updateOne(
                    {_id : request.body.pet_id},
                    {$pull : {comments : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
            }
        })
        .catch(error => response.status(404).send(error))
});

router.delete('/:id/shared', (request, response) => {
    Comments.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                SharedPosts.updateOne(
                    {_id : request.body.pet_id},
                    {$pull : {comments : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
            }
        })
        .catch(error => response.status(404).send(error))
});

router.delete('/:id/comment', (request, response) => {
    Comments.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Comments.updateOne(
                    {_id : request.body.pet_id},
                    {$pull : {comments : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
            }
        })
        .catch(error => response.status(404).send(error))
});


module.exports = router