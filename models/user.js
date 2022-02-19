var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({


	fullname: String,
	mobileno: Number,
	emailaddress: String,
	password: String,
	address: String,
	country: String,
	state: String,
	city: String,

}),
	User = mongoose.model('User', userSchema);

module.exports = User;