const express = require('express')
const router = express.Router()

const Posts = require('../models/postmodel')
const SharedPosts = require('../models/share_postmodel')

router.get('/', async (request, response) => {
    let allPost = []
    let allSharedPost = []
    let combinedPost = []

    await Posts.find()
        .populate({ path: 'pet_id', select: 'name' })
        .then(async result => {
            await combinedPost.push(...result)

            await SharedPosts.find()
                .populate({ path: 'pet_id', select: 'name' })
                .populate('post_id')
                .then(async result =>{
                    await combinedPost.push(...result)
                    //allSharedPost = result
                    console.log(combinedPost)
                    response.status(200).send(combinedPost.sort(post => post.date_created))
                })
            //allPost = result
        })
    //console.log(allPost)
    //await
        //console.log(allSharedPost)
        //combinedPost = [].push(...SharedPosts)
        //combinedPost = combinedPost.push(...Posts)

        
})

router.get('/:id', (request, response) => {
    Posts.findOne({ _id: request.params.id })
        .then(result => response.status(200).send(result))
        .catch(error => response.status(404).send(error))
})

module.exports = router
