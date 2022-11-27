const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PetsUserSchema = new Schema({
    name : {type : String, unique : true, required : true},
    username : {type : String, required : true},
    password : {type : String, required : true},
    profile_picture : {type : String},
    pet_type : {type : String},
    pet_name : {type : String},
    posts : [{type : Schema.Types.ObjectId, ref : 'posts', default: [], autopopulate : true}],
    shared_posts : [{type : Schema.Types.ObjectId, ref : 'shared_posts', default : [], autopopulate : true}],
    date_joined : {type : Date, dafault : Date.now}
})
module.exports = mongoose.model('pets', PetsUserSchema)