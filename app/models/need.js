var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var needSchema = mongoose.Schema({
    need: String,
    email: String,
    comments: String,
    urgency: String,
    id: String
  });
 var Need = mongoose.model('Need', needSchema);
 module.exports = Need;
