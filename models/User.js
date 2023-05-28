import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	lastName: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	patronymic: {
		type: String,
		required: true,
	},
	role: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: false,
	},
	login: {
		type: String,
		required: false,
		unique: true,
	},
	passwordHash: {
		type: String,
		required: false,
	},
	isAdmin: {
		type: Boolean,
		required: false,
		default: false,
	},
});

export default mongoose.model('User', UserSchema);
