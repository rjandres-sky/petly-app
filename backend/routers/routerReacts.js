const express = require('express')
const router = express.Router()

const Reactions = require('../models/reactmodel')
const Posts = require('../models/postmodel')
const SharedPosts = require('../models/petusers')
const Comments = require('../models/commentmodel')

//==================adding comment========================
router.post('/post', async (request, response) => {
    const reaction = new Reactions(request.body)
    await reaction.save()
    .then(result => {
        Posts.updateOne(
            {_id : request.body.post_id},
            {$push : {reacts : result._id.toString()}}
            )
            .then(() => response.status(204).send(reaction))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})

router.post('/shared', async (request, response) => {
    const reaction = new Reactions(request.body)
    await reaction.save()
    .then(result => {
        SharedPosts.updateOne(
            {_id : request.body.shared_id},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(reaction))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})

router.post('/comment', async (request, response) => {
    const reaction = new Reactions(request.body)
    await reaction.save()
    .then(result => {
        Comments.updateOne(
            {_id : request.body.comment_id},
            {$push : {comments : result._id.toString()}}
            )
            .then(() => response.status(204).send(reaction))
            .catch(err => response.status(400).send(err))
    })
    .catch(error => response.status(400).send(error))
})
//==================adding comment========================

// router.put('/:id', (request, response) => {
//     Reactions.updateOne(
//         { _id: request.params.id },
//         { $set: request.body })
//         .then(result => {
//             if (result.modifiedCount === 1) {
//                 response.status(204).send(result);
//             }
//         })
//         .catch(error => response.status(404).send(error))
// })

//==================delete comment========================
router.delete('/:id/post', (request, response) => {
    Reactions.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Posts.updateOne(
                    {_id : request.body.post_id},
                    {$pull : {reacts : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
                    .catch(err => response.status(400).send(err))
            }
        })
        .catch(error => response.status(404).send(error))
});

router.delete('/:id/shared', (request, response) => {
    Reactions.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                SharedPosts.updateOne(
                    {_id : request.body.shared_id},
                    {$pull : {reacts : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
                    .catch(err => response.status(400).send(err))
            }
        })
        .catch(error => response.status(404).send(error))
});

router.delete('/:id/comment', (request, response) => {
    Reactions.deleteOne({ _id: request.params.id })
        .then(result => {
            if (result.deletedCount === 1) {
                Comments.updateOne(
                    {_id : request.body.comment_id},
                    {$pull : {reacts : request.params.id}}
                    )
                    .then(() => response.status(204).send(result))
                    .catch(err => response.status(400).send(err))
            }
        })
        .catch(error => response.status(404).send(error))
});

module.exports = router