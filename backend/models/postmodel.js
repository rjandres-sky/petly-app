const mongoose = require('mongoose')
const Schema = mongoose.Schema
const populate = require('mongoose-autopopulate')

const PostsSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true},
    comments : [{type : Schema.Types.ObjectId, ref : 'comments', default : [], autopopulate : true}],
    reacts : [{type : Schema.Types.ObjectId, ref : 'reacts', default : [], autopopulate : true}],
    body : {type : String, require : true},
    date_created : {type : Date, deafaul : Date.now},
    date_updated : {type : Date, deafaul : Date.now}
})
PostsSchema.plugin(populate)

module.exports = mongoose.model('posts', PostsSchema)