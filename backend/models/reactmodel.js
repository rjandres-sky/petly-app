const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReactsSchema = new Schema({
    pet_id : {type : Schema.Types.ObjectId, ref : "pets", require : true},
    react_type : {type : String, require : true}
})

module.exports = mongoose.model('reacts', ReactsSchema)