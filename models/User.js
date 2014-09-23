var mongoose = require('mongoose');


var UserSchema = mongoose.Schema({
	name : { type: String, require: true},
	comment : { type: String },
	email : { type : String, require: true},
	date : { type : String, require: true}
});

var User = mongoose.model('user', UserSchema);

module.exports = User;


