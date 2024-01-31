 const mongoose = require('mongoose');

 const HomeSchema = new mongoose.Schema({
    titulo: String,
    id: {type:Number, require: true},
    name: String
 });

 const HomeModel = mongoose.model('Home', HomeSchema);

 module.exports = HomeModel;