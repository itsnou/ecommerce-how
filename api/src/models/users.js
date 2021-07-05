const mongoose= require('mongoose')
const { Schema } = mongoose;
const findOrCreate = require('mongoose-findorcreate');

const user = new Schema({
  user_name: {
    type: String,
    
  },

},{versionKey: false});

user.plugin(findOrCreate);

module.exports= mongoose.model('users', user);