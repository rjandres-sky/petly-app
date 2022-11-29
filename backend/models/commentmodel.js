const mongoose = require('mongoose')
const Schema = mongoose.Schema
const populate = require('mongoose-autopopulate')

const CommentSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true, autopopulate :{select: 'name pet_name'}},
    comments : [{type : Schema.Types.ObjectId, ref : 'comments', default : [], autopopulate : true}],
    reacts : [{type : Schema.Types.ObjectId, ref : 'reacts', default : [], autopopulate : true}],
    body : {type : String, require : true},
    date_created : {type : Date, deafaul : Date.now},
    date_updated : {type : Date, deafaul : Date.now}
})
CommentSchema.plugin(populate)

module.exports = mongoose.model('comments', CommentSchema)