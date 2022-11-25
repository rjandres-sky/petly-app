const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetsUserSchema = new Schema({
    name : {type : String, unique : true, required : true},
    username : {type : String, required : true},
    password : {type : String, required : true},
    profile_picture : {type : String},
    pet_type : {type : String},
    posts : [{type : Schema.Types.ObjectId, ref : 'posts'}],
    shared_posts : [{type : Schema.Types.ObjectId, ref : 'shared_posts'}]
})
module.exports = mongoose.model('pets', PetsUserSchema)