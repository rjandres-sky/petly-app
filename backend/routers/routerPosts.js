const express = require('express')
const router = express.Router()

const multer = require('multer')
const mongoose = require('mongoose')
const uuidv4 = require('uuid/v4')
const DIR = './uploads/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

const Pets = require('../models/petusers')
const Posts = require('../models/postmodel')

router.get('/', (request, response) => {
    Posts.find()
    .populate({path : 'pet_id', select : 'name'})
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

router.get('/:id', (request, response) => {
    Posts.findOne({_id : request.params.id})
    .then(result => response.status(200).send(result))
    .catch(error => response.status(404).send(error))
})

router.post('/', upload.single('img'), async (request, response, next) => {
const newPost = {
    pet_id : request.body.pet_id,
    body : {
        caption : request.body.caption,
        img : request.body.img
    }
}

    const post = new Posts(newPost)
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

router.put('/:id', (request, response, next) => {
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