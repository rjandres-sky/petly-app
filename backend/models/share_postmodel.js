const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SharedPostsSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true},
    post_id : {type : Schema.Types.ObjectId, ref : "pets", require : true},
    comments : [{type : Schema.Types.ObjectId, ref : 'comments', default : []}],
    reacts : [{type : Schema.Types.ObjectId, ref : 'reacts', default : []}],
    body : {type : String, require : true},
    date_created : {type : Date, deafaul : Date.now},
    date_updated : {type : Date, deafaul : Date.now}
})

module.exports = mongoose.model('sharedposts', SharedPostsSchema)