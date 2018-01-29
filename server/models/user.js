var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength:[3, "Name minimum characters is 3."]
	}
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;