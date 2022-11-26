const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostsSchema = new Schema({
    pets_id : {type : Schema.Types.ObjectId, ref : "pets", require : true},
    comments : [{type : Schema.Types.ObjectId, ref : 'comments', default : []}],
    reacts : [{type : Schema.Types.ObjectId, ref : 'reacts', default : []}],
    body : {type : String, require : true},
    date_created : {type : Date, deafaul : Date.now},
    date_updated : {type : Date, deafaul : Date.now}
})

module.exports = mongoose.model('posts', PostsSchema)