const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    //name: {type: String, required: true, max: 100},
    //price: {type: Number, required: true},
    _id: {type: Number, required: true} ,
    _libelle: {type: String, required: true},
    _description: {type: String, required: true},
    _image: {type: String, required: true},
    _prix: {type: Number, required: true},
    _nbStock: {type: Number, required: true},
    _stock: {type: Boolean, required: true},
    _date: {type: Date, required: true},
});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);