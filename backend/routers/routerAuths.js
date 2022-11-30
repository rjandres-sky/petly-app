const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
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
var upload = multer({
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

//import model
const Pets = require('../models/petusers')

router.post('/login', (request, response) => {
    Pets.findOne({ username: request.body.username })
        .then(result => {
            if (result !== null) {
                bcrypt.compare(request.body.password, result.password, (err, match) => {
                    if (match) {
                        // Autheticated, valid email and password
                        Pets.findOne({ _id: result._id })
                            .select({ password: 0, posts: 0, shared_posts: 0 })
                            .then(result => {
                                response.status(200).send(result)
                            })
                    } else {
                        response.status(400).send("Invalid Username or Password")
                    }
                })
            } else {
                response.status(400).send("Invalid Username or Password")
            }
        })
        .catch(error => response.status(404).send("Invalid Username or Password"))
});

router.post('/register', upload.single('profile_picture'), async (request, response, next) => {
    console.log(request.file)
    await bcrypt.hash(request.body.password, 10)
        .then((hashedPassword) => {
            const pet = new Pets({ ...request.body, password: hashedPassword })
            pet.save()
                .then(result => {
                    response.status(204).send(result);
                })
                .catch(error => response.status(400).send(error))
        })
        .catch(error => response.status(400).send(error))

})

router.put('/:id/change', async (request, response) => {
    Pets.findOne({ _id: request.params.id })
        .then(result => {
            if (result !== null) {
                bcrypt.compare(request.body.currentpassword, result.password, async (err, match) => {
                    if (match) {
                        await bcrypt.hash(request.body.newpassword, 10)
                            .then(hashedPassword =>
                                Pets.updateOne(
                                    { _id: request.params.id },
                                    { $set: { password: hashedPassword } })
                                    .then(result => {
                                        if (result.modifiedCount === 1) {
                                            response.status(204).send({ status: "Password changed" });
                                        }
                                    })
                                    .catch(error => response.status(400).send(error))
                            )
                            .catch(error => response.status(404).send("Invalid Password"))

                    } else {
                        response.status(400).send("Password not match")
                    }
                })
            } else {
                response.status(400).send("Password not match")
            }
        })
        .catch(error => response.status(404).send("Invalid Username or Password"))



});

module.exports = router;
