/*const mongoose = require("mongoose")

const Schema = mongoose.Schema 

const PictureSchema = new Schema({
  name:{type: String, require: true},
  src:{type: String, require: true}
})

module.exports = mongoose.model("Picture", PictureSchema)*/

const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
  _id: String,
  name: String,
  src: {
    type: String,
    // Defina um getter para corrigir as barras invertidas ao obter o valor
    get: function (value) {
      return value.replace(/\\/g, '/');
    }
  }
});

const Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
