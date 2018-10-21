const mongoose = require('mongoose');

const braceletSchema = mongoose.Schema({
  name:{
    required: true,
    type: String,
    unique: 1,
    maxlength: 100
  }
});

const Bracelet = mongoose.model('Bracelet',braceletSchema);

module.exports = { Bracelet };
