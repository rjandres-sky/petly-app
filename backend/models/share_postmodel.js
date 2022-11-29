const mongoose = require('mongoose')
const Schema = mongoose.Schema
const populate = require('mongoose-autopopulate')

const SharedPostsSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true, autopopulate : {select: 'name pet_type pet_name' }},
    post_id : {type : Schema.Types.ObjectId, ref : "posts", require : true},
    comments : [{type : Schema.Types.ObjectId, ref : 'comments', default : [], autopopulate : true}],
    reacts : [{type : Schema.Types.ObjectId, ref : 'reacts', default : [], autopopulate : true}],
    body : {type : String, require : true},
    date_created : {type : Date, default : Date.now},
    date_updated : {type : Date, default : Date.now}
})

SharedPostsSchema.plugin(populate)

module.exports = mongoose.model('shared_posts', SharedPostsSchema)