const mongoose = require('mongoose')
const Schema = mongoose.Schema
const populate = require('mongoose-autopopulate')

const ReactsSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true, autopopulate : {select: 'name pet_type pet_name' }},
    react_type : {type : String, require : true}
})
ReactsSchema.plugin(populate)
module.exports = mongoose.model('reacts', ReactsSchema)